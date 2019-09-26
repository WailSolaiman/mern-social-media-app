import React, { Component } from 'react'
import update from 'immutability-helper'
import PropTypes from 'prop-types'
import {
    Container,
    Grid,
    Typography,
    Divider,
    withStyles,
} from '@material-ui/core'
import { listNewsFeed } from './api-post.js'
import auth from '../auth/auth-helper'
import NewPost from './NewPost'
import PostList from './PostList'
import FindPeople from '../user/FindPeople'
import LoadingSpinners from '../core/LoadingSpinners'

const styles = theme => ({
    container: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    media: {
        minHeight: 330,
    },
})

class Newsfeed extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            loading: true,
        }
    }

    componentDidMount() {
        this.DisplayAllNewsFeed()
    }

    DisplayAllNewsFeed = () => {
        const jwt = auth.isAuthenticated()
        listNewsFeed(
            {
                userId: jwt.user._id,
            },
            {
                t: jwt.token,
            }
        )
            .then(response => {
                this.setState({ posts: response.data, loading: false })
            })
            .catch(error => {
                console.log(error.response.data.error)
            })
    }

    updatesPostInfos = (postId, postComments, postLikes = null) => {
        const updatedPostIndex = this.state.posts.findIndex(
            post => post._id === postId
        )
        if (postComments) {
            const newPosts = update(this.state.posts, {
                [updatedPostIndex]: {
                    comments: { $set: postComments },
                },
            })
            this.setState({ posts: newPosts })
        }
        if (postLikes) {
            const newPosts = update(this.state.posts, {
                [updatedPostIndex]: {
                    likes: { $set: postLikes },
                },
            })
            this.setState({ posts: newPosts })
        }
    }

    addPost = post => {
        const posts = update(this.state.posts, { $unshift: [post] })
        this.setState({ posts })
    }

    removePost = post => {
        const index = this.state.posts.indexOf(post)
        const posts = update(this.state.posts, { $splice: [[index, 1]] })
        this.setState({ posts })
    }

    render() {
        const { classes } = this.props
        if (this.state.loading) {
            return <LoadingSpinners loading={this.state.loading} />
        }
        return (
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={6}>
                    <Grid item xs={12} sm={7}>
                        <Typography variant="h2" gutterBottom>
                            Newsfeed
                        </Typography>
                        <Divider />
                        <NewPost addUpdate={this.addPost} />
                        <Divider />
                        <PostList
                            removeUpdate={this.removePost}
                            updatesPostInfos={this.updatesPostInfos}
                            posts={this.state.posts}
                        />
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <FindPeople />
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

Newsfeed.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Newsfeed)
