import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import slash from 'slash'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import {
    Grid,
    Box,
    Avatar,
    IconButton,
    Divider,
    Typography,
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import auth from '../auth/auth-helper'
import { remove, like, unlike } from './api-post.js'
import Comments from './Comments'

const styles = theme => ({
    mediumAvatar: {
        width: '75%',
        height: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    centerText: {
        textAlign: 'center',
    },
    text: {
        margin: theme.spacing(2),
    },
    media: {
        height: 200,
    },
    button: {
        margin: theme.spacing(2),
    },
    buttonCenter: {
        display: 'block',
        margin: '0 auto',
    },
})

class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            like: false,
            likes: 0,
            comments: [],
        }
    }

    componentDidMount = () => {
        this.setState({
            like: this.checkLike(this.props.post.likes),
            likes: this.props.post.likes.length,
            comments: this.props.post.comments,
        })
    }

    // componentWillReceiveProps = props => {
    //     this.setState({
    //         like: this.checkLike(props.post.likes),
    //         likes: props.post.likes.length,
    //         //comments: props.post.comments,
    //     })
    // }

    updateComments = comments => {
        //console.log('comments updateComments: ', comments)
        this.setState({ comments })
    }

    checkLike = likes => {
        const jwt = auth.isAuthenticated()
        let match = likes.indexOf(jwt.user._id) !== -1
        return match
    }

    likePost = () => {
        const jwt = auth.isAuthenticated()
        like(
            {
                userId: jwt.user._id,
            },
            {
                t: jwt.token,
            },
            this.props.post._id
        )
            .then(response => {
                //console.log(response.data)
                const checkForUserRedundancy = response.data.likes.some(
                    like => {
                        return like._id === jwt.user._id
                    }
                )
                if (!checkForUserRedundancy) {
                    this.setState({
                        like: true,
                        likes: response.data.likes.length,
                    })
                }
            })
            .catch(error => {
                console.log(error.response.data.error)
            })
    }

    unlikePost = () => {
        const jwt = auth.isAuthenticated()
        unlike(
            {
                userId: jwt.user._id,
            },
            {
                t: jwt.token,
            },
            this.props.post._id
        )
            .then(response => {
                //console.log(response.data)
                const checkForUserRedundancy = response.data.likes.some(
                    like => {
                        return like._id === jwt.user._id
                    }
                )
                if (!checkForUserRedundancy) {
                    this.setState({
                        like: false,
                        likes: response.data.likes.length,
                    })
                }
            })
            .catch(error => {
                console.log(error.response.data.error)
            })
    }

    deletePost = () => {
        const jwt = auth.isAuthenticated()
        remove(
            {
                postId: this.props.post._id,
            },
            {
                t: jwt.token,
            }
        )
            .then(() => {
                this.props.onRemove(this.props.post)
                //console.log(response.data)
            })
            .catch(error => {
                console.log(error.response.data.error)
            })
    }

    render() {
        const { classes } = this.props
        const { _id, text, created, postedBy } = this.props.post
        return (
            <Grid container spacing={3}>
                <Grid item xs={12} sm={2}>
                    <Avatar
                        className={classes.mediumAvatar}
                        alt={postedBy.name}
                        src={
                            postedBy.image_data
                                ? '/' + slash(postedBy.image_data)
                                : ''
                        }
                    />
                    <Typography
                        variant="subtitle1"
                        className={classes.centerText}
                        gutterBottom
                    >
                        <Link to={'/user/' + postedBy._id}>
                            {postedBy.name}
                        </Link>
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        className={classes.centerText}
                        gutterBottom
                    >
                        {new Date(created).toDateString()}
                    </Typography>
                    {postedBy._id === auth.isAuthenticated().user._id && (
                        <IconButton
                            onClick={this.deletePost}
                            className={classes.buttonCenter}
                        >
                            <DeleteIcon />
                        </IconButton>
                    )}
                </Grid>
                <Grid item xs={12} sm={10}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography
                                variant="h4"
                                gutterBottom
                                className={classes.text}
                            >
                                {text}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Box
                                display="flex"
                                flexDirection="row"
                                alignItems="center"
                            >
                                {this.state.like ? (
                                    <IconButton
                                        onClick={this.unlikePost}
                                        aria-label="Like"
                                        color="secondary"
                                    >
                                        <FavoriteIcon />
                                    </IconButton>
                                ) : (
                                    <IconButton
                                        onClick={this.likePost}
                                        aria-label="Unlike"
                                        color="secondary"
                                    >
                                        <FavoriteBorderIcon />
                                    </IconButton>
                                )}
                                <Typography variant="h6">
                                    {this.state.likes} Likes
                                </Typography>
                            </Box>
                        </Grid>
                        <Divider />
                        <Comments
                            postId={_id}
                            comments={this.state.comments}
                            updateComments={this.updateComments}
                        />
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

Post.propTypes = {
    classes: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired,
    onRemove: PropTypes.func.isRequired,
}

export default withStyles(styles)(Post)
