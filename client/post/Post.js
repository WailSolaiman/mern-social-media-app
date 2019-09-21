import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import bootbox from 'bootbox'
import slash from 'slash'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import {
    Grid,
    Box,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Collapse,
    Avatar,
    IconButton,
    Divider,
    Typography,
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import MessageIcon from '@material-ui/icons/Message'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import auth from '../auth/auth-helper'
import { remove, like, unlike, loadImage } from './api-post.js'
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
            isListOpen: false,
            photoSrc: null,
        }
    }

    componentDidMount() {
        this.setState({
            like: this.checkLike(this.props.post.likes),
            likes: this.props.post.likes.length,
            comments: this.props.post.comments,
        })
        //this.loadPostImage()
    }

    UNSAFE_componentWillReceiveProps(props) {
        this.setState({
            like: this.checkLike(props.post.likes),
            likes: props.post.likes.length,
            comments: props.post.comments,
        })
    }

    loadPostImage = () => {
        console.log('this.props.post.photoId: ', this.props.post.photoId)
        const jwt = auth.isAuthenticated()
        loadImage({ t: jwt.token }, this.props.post._id)
            .then(response => {
                const base64 = btoa(
                    new Uint8Array(response.data).reduce(
                        (data, byte) => data + String.fromCharCode(byte),
                        ''
                    )
                )
                const image = `data:jpg;base64,${base64}`
                this.setState({ photoSrc: image })
                console.log('response: ', response.data)
            })
            .catch(error => console.log(error.response))
    }

    updateComments = comments => {
        this.setState({ comments })
        this.props.updatesPostInfos(this.props.post._id, this.state.comments)
    }

    checkLike = likes => {
        const jwt = auth.isAuthenticated()
        let match = likes.indexOf(jwt.user._id) !== -1
        return match
    }

    like = () => {
        let callApi = this.state.like ? unlike : like
        const jwt = auth.isAuthenticated()
        callApi(
            {
                userId: jwt.user._id,
            },
            {
                t: jwt.token,
            },
            this.props.post._id
        )
            .then(response => {
                this.setState({
                    like: !this.state.like,
                    likes: response.data.likes.length,
                })
                this.props.updatesPostInfos(
                    this.props.post._id,
                    null,
                    response.data.likes
                )
            })
            .catch(error => {
                console.log(error.response.data.error)
            })
    }

    deletePost = () => {
        bootbox.confirm({
            size: 'small',
            message: 'Delete selected Post?',
            callback: result => {
                if (result) {
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
                        })
                        .catch(error => {
                            console.log(error.response.data.error)
                        })
                }
            },
        })
    }

    handleListClick = () => {
        this.setState({ isListOpen: !this.state.isListOpen })
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
                            onClick={() => this.deletePost()}
                            className={classes.buttonCenter}
                        >
                            <DeleteIcon color="secondary" />
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

                            <Box>
                                <button
                                    color="primary"
                                    onClick={() => this.loadPostImage()}
                                >
                                    Load Image
                                </button>
                                {this.state.photoSrc ? (
                                    <img src={this.state.photoSrc} />
                                ) : (
                                    <span></span>
                                )}
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box
                                display="flex"
                                flexDirection="row"
                                alignItems="center"
                            >
                                {this.state.like ? (
                                    <IconButton
                                        onClick={this.like}
                                        aria-label="Like"
                                        color="secondary"
                                    >
                                        <FavoriteIcon />
                                    </IconButton>
                                ) : (
                                    <IconButton
                                        onClick={this.like}
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
                        <Grid item xs={12}>
                            <Divider />
                            <ListItem
                                button
                                onClick={() => this.handleListClick()}
                            >
                                <ListItemIcon>
                                    <MessageIcon color="secondary" />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Leave a comment!"
                                    secondary={`${this.state.comments.length} Comments`}
                                />
                                {this.state.isListOpen ? (
                                    <ExpandLess />
                                ) : (
                                    <ExpandMore />
                                )}
                            </ListItem>
                            <Collapse
                                in={this.state.isListOpen}
                                timeout="auto"
                                unmountOnExit
                            >
                                <List component="div" disablePadding>
                                    <Comments
                                        postId={_id}
                                        comments={this.state.comments}
                                        updateComments={this.updateComments}
                                    />
                                </List>
                            </Collapse>
                        </Grid>
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
    updatesPostInfos: PropTypes.func,
}

export default withStyles(styles)(Post)
