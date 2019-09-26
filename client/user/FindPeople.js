import React, { Component } from 'react'
import update from 'immutability-helper'
import PropTypes from 'prop-types'
import {
    List,
    Paper,
    Snackbar,
    SnackbarContent,
    Typography,
    withStyles,
} from '@material-ui/core'
import { findPeople, follow } from './api-user.js'
import auth from '../auth/auth-helper'
import FindPerson from './FindPerson'
import LoadingSpinners from '../core/LoadingSpinners'

const styles = theme => ({
    root: theme.mixins.gutters({
        maxWidth: 600,
        margin: 'auto',
        padding: theme.spacing(3),
        marginTop: theme.spacing(10),
        border: `1px solid ${theme.palette.secondary.light}`,
        borderRadius: 0,
        boxShadow: 'none',
    }),
    cancelRoot: {
        boxShadow: 'none',
    },
    title: {
        margin: `${theme.spacing(3)}px ${theme.spacing(3)}px ${theme.spacing(
            3
        )}px`,
        color: theme.palette.openTitle,
    },
    snack: {
        color: 'white',
    },
    SnackbarBackgroundColor: {
        backgroundColor: theme.palette.snackpack,
    },
})

class FindPeople extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            open: false,
            followMessage: '',
            loading: true,
        }
    }

    componentDidMount = () => {
        this.findPeopleToFollow()
    }

    findPeopleToFollow = () => {
        const jwt = auth.isAuthenticated()
        findPeople(
            {
                userId: jwt.user._id,
            },
            {
                t: jwt.token,
            }
        )
            .then(response => {
                this.setState({ users: response.data, loading: false })
            })
            .catch(error => {
                console.log(error.response.data.error)
            })
    }

    clickFollow = (user, index) => {
        const jwt = auth.isAuthenticated()
        follow(
            {
                userId: jwt.user._id,
            },
            {
                t: jwt.token,
            },
            user._id
        )
            .then(() => {
                const users = update(this.state.users, {
                    $splice: [[index, 1]],
                })
                this.setState({
                    users,
                    open: true,
                    followMessage: `Following ${user.name}!`,
                })
            })
            .catch(error => {
                this.setState({ error: error.response })
            })
    }

    handleRequestClose = () => {
        this.setState({ open: false })
    }

    render() {
        const { classes } = this.props
        if (this.state.loading) {
            return <LoadingSpinners loading={this.state.loading} />
        }
        return (
            <div>
                <Paper
                    className={
                        this.state.users.length > 0
                            ? classes.root
                            : classes.cancelRoot
                    }
                    elevation={4}
                >
                    {this.state.users.length > 0 && (
                        <Typography variant="h5" className={classes.title}>
                            Who to follow
                        </Typography>
                    )}
                    <List>
                        {this.state.users.map((user, i) => {
                            return (
                                <FindPerson
                                    user={user}
                                    clickFollow={this.clickFollow}
                                    key={i}
                                    index={i}
                                />
                            )
                        })}
                    </List>
                </Paper>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    open={this.state.open}
                    onClose={this.handleRequestClose}
                    autoHideDuration={6000}
                    message={
                        <span className={classes.snack}>
                            {this.state.followMessage}
                        </span>
                    }
                >
                    <SnackbarContent
                        className={classes.SnackbarBackgroundColor}
                        message={
                            <span className={classes.snack}>
                                {this.state.followMessage}
                            </span>
                        }
                    />
                </Snackbar>
            </div>
        )
    }
}

FindPeople.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(FindPeople)
