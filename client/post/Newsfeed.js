import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import { Container, Grid, Typography, Divider } from '@material-ui/core'
import NewPost from './NewPost'
import PostList from './PostList'
import FindPeople from '../user/FindPeople'
import auth from '../auth/auth-helper'
import { listNewsFeed } from './api-post.js'

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
        }
    }

    loadPosts = () => {
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
                //console.log('response newsfeed: ', response.data)
                this.setState({ posts: response.data })
            })
            .catch(error => {
                console.log(error.response.data.error)
            })
    }

    componentDidMount() {
        this.loadPosts()
    }

    addPost = post => {
        const updatedPosts = this.state.posts
        updatedPosts.unshift(post)
        this.setState({ posts: updatedPosts })
    }

    removePost = post => {
        const updatedPosts = this.state.posts
        const index = updatedPosts.indexOf(post)
        updatedPosts.splice(index, 1)
        this.setState({ posts: updatedPosts })
    }

    render() {
        const { classes } = this.props
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
