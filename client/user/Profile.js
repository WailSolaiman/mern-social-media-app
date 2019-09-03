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
import FollowProfileButton from './FollowProfileButton'
import ProfileTabs from './ProfileTabs'

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
    constructor(props) {
        super(props)
        this.state = {
            user: { following: [], followers: [] },
            redirectToSignin: false,
            following: false,
        }
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
                let following = this.checkFollow(response.data)
                this.setState({ user: response.data, following: following })
            })
            .catch(error => {
                this.setState({ redirectToSignin: true })
            })
    }

    componentDidMount() {
        this.init(this.props.match.params.userId)
    }

    checkFollow = user => {
        const jwt = auth.isAuthenticated()
        const match = user.followers.some(follower => {
            return follower._id == jwt.user._id
        })
        return match
    }

    clickFollowButton = callApi => {
        const jwt = auth.isAuthenticated()
        callApi(
            {
                userId: jwt.user._id,
            },
            {
                t: jwt.token,
            },
            this.state.user._id
        )
            .then(response => {
                this.setState({
                    user: response.data,
                    following: !this.state.following,
                })
            })
            .catch(error => {
                this.setState({ error: error.response.data.error })
            })
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
                            this.state.user._id ? (
                            <ListItemSecondaryAction>
                                <Link to={'/user/edit/' + this.state.user._id}>
                                    <IconButton
                                        aria-label="Edit"
                                        color="primary"
                                    >
                                        <Edit />
                                    </IconButton>
                                </Link>
                                <DeleteUser userId={this.state.user._id} />
                            </ListItemSecondaryAction>
                        ) : (
                            <FollowProfileButton
                                following={this.state.following}
                                onButtonClick={this.clickFollowButton}
                            />
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
                <ProfileTabs user={this.state.user} />
            </Paper>
        )
    }
}
Profile.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Profile)
