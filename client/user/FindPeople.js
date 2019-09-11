import React, { Component } from 'react'
import slash from 'slash'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { findPeople, follow } from './api-user.js'
import auth from '../auth/auth-helper'
import { withStyles } from '@material-ui/core'
import {
    List,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText,
    Paper,
    Avatar,
    Button,
    IconButton,
    Snackbar,
    Typography,
} from '@material-ui/core'
import VisibilityIcon from '@material-ui/icons/Visibility'

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
    title: {
        margin: `${theme.spacing(3)}px ${theme.spacing(3)}px ${theme.spacing(
            3
        )}px`,
        color: theme.palette.openTitle,
    },
    avatar: {
        marginRight: theme.spacing(2),
    },
    follow: {
        right: theme.spacing(2),
    },
    snack: {
        color: theme.palette.protectedTitle,
    },
    viewButton: {
        verticalAlign: 'middle',
    },
})
class FindPeople extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            open: false,
            followMessage: '',
        }
    }

    componentDidMount = () => {
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
                this.setState({ users: response.data })
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
        ).then(data => {
            if (data.error) {
                this.setState({ error: data.error })
            } else {
                let toFollow = this.state.users
                toFollow.splice(index, 1)
                this.setState({
                    users: toFollow,
                    open: true,
                    followMessage: `Following ${user.name}!`,
                })
            }
        })
    }

    handleRequestClose = (event, reason) => {
        this.setState({ open: false })
    }
    render() {
        const { classes } = this.props
        return (
            <div>
                <Paper className={classes.root} elevation={4}>
                    <Typography variant="h5" className={classes.title}>
                        Who to follow
                    </Typography>
                    <List>
                        {this.state.users.map((item, i) => {
                            return (
                                <span key={i}>
                                    <ListItem>
                                        <ListItemAvatar
                                            className={classes.avatar}
                                        >
                                            <Avatar
                                                src={
                                                    item.image_data
                                                        ? '/' +
                                                          slash(item.image_data)
                                                        : ''
                                                }
                                            />
                                        </ListItemAvatar>
                                        <ListItemText primary={item.name} />
                                        <ListItemSecondaryAction
                                            className={classes.follow}
                                        >
                                            <Link to={'/user/' + item._id}>
                                                <IconButton
                                                    variant="contained"
                                                    color="secondary"
                                                    className={
                                                        classes.viewButton
                                                    }
                                                >
                                                    <VisibilityIcon />
                                                </IconButton>
                                            </Link>
                                            <Button
                                                aria-label="Follow"
                                                variant="contained"
                                                color="primary"
                                                onClick={this.clickFollow.bind(
                                                    this,
                                                    item,
                                                    i
                                                )}
                                            >
                                                Follow
                                            </Button>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                </span>
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
                />
            </div>
        )
    }
}

FindPeople.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(FindPeople)
