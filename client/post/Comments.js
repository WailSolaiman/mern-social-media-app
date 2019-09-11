import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import slash from 'slash'
import { withStyles } from '@material-ui/core'
import {
    Grid,
    Box,
    Typography,
    TextField,
    Avatar,
    Divider,
} from '@material-ui/core'
import MessageIcon from '@material-ui/icons/Message'
import DeleteIcon from '@material-ui/icons/Delete'
import auth from '../auth/auth-helper'
import { comment, uncomment } from './api-post.js'

const styles = theme => ({
    smallAvatar: {
        width: '50%',
        height: 'auto',
        margin: '0 auto',
    },
    commentDate: {
        display: 'block',
        color: 'gray',
        fontSize: '0.8em',
    },
    margin: {
        width: '100%',
        margin: theme.spacing(1),
        marginTop: 0,
        marginBottom: 30,
    },
    flex: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    divider: {
        marginTop: 5,
    },
})

class Comments extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
        }
    }

    handleChangeText = event => {
        this.setState({ text: event.target.value })
    }

    addComment = event => {
        if (event.keyCode == 13 && event.target.value) {
            event.preventDefault()
            const jwt = auth.isAuthenticated()
            comment(
                {
                    userId: jwt.user._id,
                },
                {
                    t: jwt.token,
                },
                this.props.postId,
                { text: this.state.text }
            )
                .then(response => {
                    console.log('response: ', response.data)
                    this.setState({
                        text: '',
                    })
                    this.props.updateComments(response.data.comments)
                })
                .catch(error => {
                    console.log(error.response.data.error)
                })
        }
    }

    deleteComment = comment => {
        const jwt = auth.isAuthenticated()
        uncomment(
            {
                userId: jwt.user._id,
            },
            {
                t: jwt.token,
            },
            this.props.postId,
            comment
        )
            .then(response => {
                this.props.updateComments(response.data.comments)
            })
            .catch(error => {
                console.log(error.response.data.error)
            })
    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.margin}>
                <TextField
                    id="standard-full-width"
                    label="Comment"
                    className={classes.margin}
                    placeholder=""
                    helperText="Leave a comment!"
                    onKeyDown={this.addComment}
                    multiline
                    value={this.state.text}
                    onChange={this.handleChangeText}
                />
                {this.props.comments.map((comment, i) => {
                    const { name, image_data } = comment.postedBy
                    return (
                        <Grid
                            container
                            spacing={3}
                            key={i}
                            display="flex"
                            flexdirection="column"
                            alignItems="flex-start"
                        >
                            <Grid item xs={12} md={3}>
                                <Avatar
                                    className={classes.smallAvatar}
                                    alt={name}
                                    src={
                                        image_data
                                            ? '/' + slash(image_data)
                                            : ''
                                    }
                                />
                                <Box className={classes.flex}>
                                    <Typography variant="subtitle1">
                                        <Link
                                            to={'/user/' + comment.postedBy._id}
                                        >
                                            {name}
                                        </Link>
                                    </Typography>
                                    <Typography
                                        variant="subtitle2"
                                        gutterBottom
                                        className={classes.commentDate}
                                    >
                                        {new Date(
                                            comment.created
                                        ).toDateString()}
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={11} md={8}>
                                <Typography variant="h5" gutterBottom>
                                    {comment.text}
                                </Typography>
                            </Grid>
                            <Grid item xs={1}>
                                {auth.isAuthenticated().user._id ===
                                    comment.postedBy._id && (
                                    <DeleteIcon
                                        onClick={() =>
                                            this.deleteComment(comment)
                                        }
                                    />
                                )}
                            </Grid>
                            <Grid item xs={12}>
                                <Divider className={classes.divider} />
                            </Grid>
                        </Grid>
                    )
                })}
            </div>
        )
    }
}

Comments.propTypes = {
    classes: PropTypes.object.isRequired,
    comments: PropTypes.array.isRequired,
    updateComments: PropTypes.func.isRequired,
    postId: PropTypes.string.isRequired,
}

export default withStyles(styles)(Comments)
