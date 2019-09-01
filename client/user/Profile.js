import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import slash from 'slash'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import {
    List,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText,
    Paper,
    Avatar,
    IconButton,
    Divider,
    Typography,
} from '@material-ui/core'
import { Edit } from '@material-ui/icons'
import auth from '../auth/auth-helper'
import { read } from './api-user.js'
import DeleteUser from './DeleteUser'

const styles = theme => ({
    root: theme.mixins.gutters({
        maxWidth: 600,
        margin: 'auto',
        padding: theme.spacing(3),
        marginTop: theme.spacing(5),
    }),
    title: {
        margin: `${theme.spacing(3)}px 0 ${theme.spacing(3)}px`,
        color: theme.palette.protectedTitle,
    },
    bigAvatar: {
        width: 60,
        height: 60,
        margin: 10,
    },
})

class Profile extends Component {
    constructor({ match }) {
        super()
        this.state = {
            user: '',
            redirectToSignin: false,
        }
        this.match = match
    }

    init = userId => {
        const jwt = auth.isAuthenticated()
        read(
            {
                userId: userId,
            },
            { t: jwt.token }
        )
            .then(response => {
                this.setState({ user: response.data })
            })
            .catch(error => {
                this.setState({ redirectToSignin: true })
            })
    }

    componentDidMount = () => {
        this.init(this.match.params.userId)
    }

    render() {
        const { classes } = this.props
        const redirectToSignin = this.state.redirectToSignin
        if (redirectToSignin) {
            return <Redirect to="/signin" />
        }

        return (
            <Paper className={classes.root} elevation={4}>
                <Typography type="title" className={classes.title}>
                    Profile
                </Typography>
                <List dense>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar
                                src={
                                    this.state.user.image_data
                                        ? '/' +
                                          slash(this.state.user.image_data)
                                        : ''
                                }
                                className={classes.bigAvatar}
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary={this.state.user.name}
                            secondary={this.state.user.email}
                        />{' '}
                        {auth.isAuthenticated().user &&
                            auth.isAuthenticated().user._id ==
                                this.state.user._id && (
                                <ListItemSecondaryAction>
                                    <Link
                                        to={'/user/edit/' + this.state.user._id}
                                    >
                                        <IconButton
                                            aria-label="Edit"
                                            color="primary"
                                        >
                                            <Edit />
                                        </IconButton>
                                    </Link>
                                    <DeleteUser userId={this.state.user._id} />
                                </ListItemSecondaryAction>
                            )}
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText primary={this.state.user.about} />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary={
                                'Joined: ' +
                                new Date(this.state.user.created).toDateString()
                            }
                        />
                    </ListItem>
                </List>
            </Paper>
        )
    }
}
Profile.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Profile)
