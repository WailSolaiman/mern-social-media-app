import React, { Component } from 'react'
import update from 'immutability-helper'
import { Redirect, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
    Container,
    Grid,
    Box,
    Avatar,
    IconButton,
    Divider,
    Typography,
    withStyles,
} from '@material-ui/core'
import { Edit } from '@material-ui/icons'
import { read, getProfileImage } from './api-user.js'
import { listByUser } from '../post/api-post'
import auth from '../auth/auth-helper'
import DeleteUser from './DeleteUser'
import FollowProfileButton from './FollowProfileButton'
import LoadingSpinners from '../core/LoadingSpinners'
import ProfileTabs from './ProfileTabs'

const styles = theme => ({
    container: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        backgroundColor: 'white',
    },
    minHeight: {
        minHeight: 250,
    },
    bigAvatar: {
        width: 150,
        height: 150,
        margin: 'auto',
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
            photoSrc: '',
            redirectToSignin: false,
            following: false,
            posts: [],
            loading: true,
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
                this.setState(
                    () => {
                        return {
                            user: response.data,
                            following: following,
                        }
                    },
                    () => {
                        this.loadUserImage()
                    }
                )
                this.loadPosts(response.data._id)
            })
            .catch(() => {
                this.setState({ redirectToSignin: true })
            })
    }

    componentDidMount() {
        this.init(this.props.match.params.userId)
    }

    loadUserImage = () => {
        const jwt = auth.isAuthenticated()
        getProfileImage(
            { userId: this.props.match.params.userId },
            { t: jwt.token }
        )
            .then(response => {
                const base64 = btoa(
                    new Uint8Array(response.data).reduce(
                        (data, byte) => data + String.fromCharCode(byte),
                        ''
                    )
                )
                const image = `data:jpg;base64,${base64}`
                this.setState(
                    () => {
                        return { photoSrc: image }
                    },
                    () => {
                        setTimeout(() => {
                            this.setState({ loading: false })
                        }, 1000)
                    }
                )
            })
            .catch(error => console.log(error.response))
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
                this.setState({ posts: response.data })
            })
            .catch(error => {
                console.log(error.response.data.error)
            })
    }

    removePost = post => {
        const index = this.state.posts.indexOf(post)
        const posts = update(this.state.posts, { $splice: [[index, 1]] })
        this.setState({ posts })
    }

    render() {
        const { classes } = this.props
        const redirectToSignin = this.state.redirectToSignin
        if (redirectToSignin) {
            return <Redirect to="/signin" />
        }
        if (this.state.loading) {
            return <LoadingSpinners loading={this.state.loading} />
        }
        return (
            <Container maxWidth="lg" className={classes.container}>
                <Typography variant="h2" gutterBottom>
                    Profile
                </Typography>
                <Grid container spacing={3} className={classes.minHeight}>
                    <Grid item xs={12} sm={2}>
                        {this.state.photoSrc ? (
                            <Avatar
                                src={this.state.photoSrc}
                                alt={this.state.user.name}
                                className={classes.bigAvatar}
                            />
                        ) : (
                            <span></span>
                        )}
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
