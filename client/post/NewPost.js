import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    Grid,
    TextField,
    Avatar,
    Icon,
    Button,
    Typography,
    withStyles,
} from '@material-ui/core'
import { read, getProfileImage } from '../user/api-user'
import { create } from './api-post.js'
import auth from '../auth/auth-helper'

const styles = theme => ({
    root: {
        backgroundColor: '#efefef',
        padding: `${theme.spacing(3)}px 0px 1px`,
    },
    mediumAvatar: {
        width: 100,
        height: 100,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    photoButton: {
        height: 30,
        marginBottom: 5,
    },
    input: {
        display: 'none',
    },
    textField: {
        marginBottom: 0,
        width: '100%',
    },
    filename: {
        verticalAlign: 'super',
    },
})

class NewPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            error: '',
            user: {},
            userAvatarPhotoSrc: '',
        }
    }

    componentDidMount() {
        this.readUserData()
    }

    readUserData = () => {
        const jwt = auth.isAuthenticated()
        read({ userId: jwt.user._id }, { t: jwt.token })
            .then(response => {
                this.setState(
                    () => {
                        return { user: response.data }
                    },
                    () => {
                        this.loadUserImage()
                    }
                )
            })
            .catch(error => {
                console.log(error.response.data.error)
            })
    }

    loadUserImage = () => {
        const jwt = auth.isAuthenticated()
        getProfileImage({ userId: jwt.user._id }, { t: jwt.token })
            .then(response => {
                const base64 = btoa(
                    new Uint8Array(response.data).reduce(
                        (data, byte) => data + String.fromCharCode(byte),
                        ''
                    )
                )
                const image = `data:jpg;base64,${base64}`
                this.setState({ userAvatarPhotoSrc: image })
            })
            .catch(error => console.log(error.response))
    }

    handleChangeText = event => {
        this.setState({ text: event.target.value })
    }

    clickPost = () => {
        const jwt = auth.isAuthenticated()
        const postData = { text: this.state.text }
        create({ userId: jwt.user._id }, { t: jwt.token }, postData)
            .then(response => {
                this.setState({ text: '', photo: '' })
                this.props.addUpdate(response.data)
            })
            .catch(error => {
                this.setState({ error: error.response.data.error })
            })
    }

    render() {
        const { classes } = this.props
        return (
            <Grid container spacing={3}>
                <Grid item xs={12} sm={2}>
                    {this.state.userAvatarPhotoSrc ? (
                        <Avatar
                            src={this.state.userAvatarPhotoSrc}
                            alt={this.state.user.name}
                            className={classes.mediumAvatar}
                        />
                    ) : (
                        <span></span>
                    )}
                </Grid>
                <Grid item xs={12} sm={10}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                placeholder={`Share your thoughts ${this.state.user.name}!`}
                                multiline
                                rows="5"
                                value={this.state.text}
                                onChange={this.handleChangeText}
                                className={classes.textField}
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            {this.state.error && (
                                <Typography component="p" color="error">
                                    <Icon
                                        color="error"
                                        className={classes.error}
                                    >
                                        error
                                    </Icon>
                                    {this.state.error}
                                </Typography>
                            )}
                            <Button
                                color="primary"
                                disabled={
                                    this.state.text === '' ||
                                    this.state.text.length < 5
                                }
                                onClick={this.clickPost}
                            >
                                Post
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

NewPost.propTypes = {
    classes: PropTypes.object.isRequired,
    addUpdate: PropTypes.func.isRequired,
}

export default withStyles(styles)(NewPost)
