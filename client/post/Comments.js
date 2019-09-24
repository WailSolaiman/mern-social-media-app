import React, { Component } from 'react'
import bootbox from 'bootbox'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import auth from '../auth/auth-helper'
import { comment, uncomment } from './api-post.js'
import Comment from './Comment'

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
    textField: {
        width: '99%',
    },
    flex: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    divider: {
        marginTop: 5,
    },
    nested: {
        paddingLeft: theme.spacing(4),
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
        bootbox.confirm({
            size: 'small',
            message: 'Delete selected Comment?',
            callback: result => {
                if (result) {
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
            },
        })
    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.margin}>
                <TextField
                    id="standard-full-width"
                    className={classes.textField}
                    label="Comment"
                    placeholder=""
                    helperText="Leave a comment!"
                    onKeyDown={this.addComment}
                    multiline
                    value={this.state.text}
                    onChange={this.handleChangeText}
                />
                {this.props.comments.map((comment, i) => {
                    return (
                        <Comment
                            comment={comment}
                            deleteComment={this.deleteComment}
                            key={i}
                        />
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
