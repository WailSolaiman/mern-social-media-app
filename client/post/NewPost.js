import React, { Component } from 'react'
import slash from 'slash'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import {
    Grid,
    TextField,
    Avatar,
    Icon,
    IconButton,
    Button,
    Typography,
} from '@material-ui/core'
import { PhotoCamera } from '@material-ui/icons'
import { read } from '../user/api-user'
import { create } from './api-post.js'
import auth from '../auth/auth-helper'

const styles = theme => ({
    root: {
        backgroundColor: '#efefef',
        padding: `${theme.spacing(3)}px 0px 1px`,
    },
    mediumAvatar: {
        width: '100%',
        height: 'auto',
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
            photo: '',
            error: '',
            user: {},
        }
    }

    componentDidMount() {
        const jwt = auth.isAuthenticated()
        read({ userId: jwt.user._id }, { t: jwt.token })
            .then(response => {
                //console.log(response.data)
                this.setState({ user: response.data })
            })
            .catch(error => {
                console.log(error.response.data.error)
            })
    }

    handleChangeText = event => {
        //console.log('text ', event.target.value)
        this.setState({ text: event.target.value })
    }

    handleChangePhoto = event => {
        //console.log('photo ', event.target.files[0])
        this.setState({ photo: event.target.files[0] })
    }

    clickPost = () => {
        const jwt = auth.isAuthenticated()
        const newPost = {
            text: this.state.text,
        }
        create({ userId: jwt.user._id }, { t: jwt.token }, newPost)
            .then(response => {
                this.setState({ text: '', photo: '' })
                this.props.addUpdate(response.data)
                //console.log(response.data)
            })
            .catch(error => {
                this.setState({ error: error.response.data.error })
                console.log(error.response.data.error)
            })
    }

    render() {
        const { classes } = this.props
        return (
            <Grid container spacing={3}>
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
                        <Grid item xs={12}>
                            <TextField
                                placeholder="Share your thoughts ..."
                                multiline
                                rows="5"
                                value={this.state.text}
                                onChange={this.handleChangeText}
                                className={classes.textField}
                                margin="normal"
                            />
                            <input
                                accept="image/*"
                                onChange={this.handleChangePhoto}
                                className={classes.input}
                                id="icon-button-file"
                                type="file"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <label htmlFor="icon-button-file">
                                <IconButton
                                    color="secondary"
                                    className={classes.photoButton}
                                    component="span"
                                >
                                    <PhotoCamera />
                                </IconButton>
                            </label>{' '}
                            <span className={classes.filename}>
                                {this.state.photo ? this.state.photo.name : ''}
                            </span>
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
                                Post your comment!
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
