import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import slash from 'slash'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import {
    Container,
    Grid,
    Box,
    Avatar,
    IconButton,
    Divider,
    Typography,
} from '@material-ui/core'
import { Edit } from '@material-ui/icons'
import auth from '../auth/auth-helper'
import { read } from './api-user.js'
import { listByUser } from '../post/api-post'
import DeleteUser from './DeleteUser'
import FollowProfileButton from './FollowProfileButton'
import ProfileTabs from './ProfileTabs'

const styles = theme => ({
    container: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    minHeight: {
        minHeight: 200,
    },
    mediumAvatar: {
        width: '100%',
        height: 'auto',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    title: {
        margin: `${theme.spacing(3)}px 0 ${theme.spacing(3)}px`,
        color: theme.palette.protectedTitle,
    },
    commentDate: {
        display: 'block',
        color: 'gray',
        fontSize: '0.8em',
    },
    flex: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
})

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: { following: [], followers: [] },
            redirectToSignin: false,
            following: false,
            posts: [],
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
                this.loadPosts(response.data._id)
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

    loadPosts = userId => {
        const jwt = auth.isAuthenticated()
        listByUser({ userId }, { t: jwt.token })
            .then(response => {
                //console.log('user all posts: ', response.data)
                this.setState({ posts: response.data })
            })
            .catch(error => {
                console.log(error.response.data.error)
            })
    }

    removePost = post => {
        const updatedPosts = this.state.posts
        const index = updatedPosts.indexOf(post)
        updatedPosts.splice(index, 1)
        this.setState({ posts: updatedPosts })
    }

    render() {
        const { classes } = this.props
        const redirectToSignin = this.state.redirectToSignin
        if (redirectToSignin) {
            return <Redirect to="/signin" />
        }

        return (
            <Container maxWidth="lg" className={classes.container}>
                <Typography variant="h2" gutterBottom>
                    Profile
                </Typography>

                <Grid container spacing={3} className={classes.minHeight}>
                    <Grid item xs={12} sm={2}>
                        <Avatar
                            className={classes.mediumAvatar}
                            alt={this.state.user.name}
                            src={
                                this.state.user.image_data
                                    ? '/' + slash(this.state.user.image_data)
                                    : ''
                            }
                        />
                    </Grid>
                    <Grid item xs={12} sm={10}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} className={classes.flex}>
                                <Box>
                                    <Typography variant="h4" gutterBottom>
                                        {this.state.user.name}
                                    </Typography>
                                    <Typography variant="h5" gutterBottom>
                                        {this.state.user.email}
                                    </Typography>
                                </Box>
                                <Box>
                                    {auth.isAuthenticated().user &&
                                    auth.isAuthenticated().user._id ==
                                        this.state.user._id ? (
                                        <div>
                                            <Link
                                                to={
                                                    '/user/edit/' +
                                                    this.state.user._id
                                                }
                                            >
                                                <IconButton
                                                    aria-label="Edit"
                                                    color="primary"
                                                >
                                                    <Edit />
                                                </IconButton>
                                            </Link>
                                            <DeleteUser
                                                userId={this.state.user._id}
                                            />
                                        </div>
                                    ) : (
                                        <FollowProfileButton
                                            following={this.state.following}
                                            onButtonClick={
                                                this.clickFollowButton
                                            }
                                        />
                                    )}
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="subtitle2" gutterBottom>
                                    {this.state.user.about}
                                </Typography>
                                <Typography className={classes.commentDate}>
                                    {'Joined: ' +
                                        new Date(
                                            this.state.user.created
                                        ).toDateString()}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Divider />

                <ProfileTabs
                    user={this.state.user}
                    posts={this.state.posts}
                    removePostUpdate={this.removePost}
                />
            </Container>
        )
    }
}
Profile.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Profile)
