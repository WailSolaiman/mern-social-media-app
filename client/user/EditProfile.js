import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import {
    Card,
    CardActions,
    CardContent,
    Button,
    TextField,
    Icon,
    Avatar,
    Typography,
} from '@material-ui/core'
import auth from './../auth/auth-helper'
import { read, update, saveProfileImage, getProfileImage } from './api-user.js'
import LoadingSpinners from '../core/LoadingSpinners'

const styles = theme => ({
    card: {
        maxWidth: 600,
        margin: 'auto',
        textAlign: 'center',
        marginTop: theme.spacing(5),
        paddingBottom: theme.spacing(2),
    },
    title: {
        margin: theme.spacing(2),
        color: theme.palette.protectedTitle,
    },
    error: {
        verticalAlign: 'middle',
    },
    textField: {
        marginLeft: theme.spacing(5),
        marginRight: theme.spacing(5),
        width: 300,
    },
    submit: {
        margin: 'auto',
        marginBottom: theme.spacing(2),
    },
    bigAvatar: {
        width: 150,
        height: 150,
        margin: 'auto',
    },
    input: {
        display: 'none',
    },
    filename: {
        marginLeft: '10px',
    },
})

class EditProfile extends Component {
    constructor({ match }) {
        super()
        this.state = {
            userId: '',
            name: '',
            email: '',
            password: '',
            about: '',
            photoId: '',
            photoSrc: '',
            redirectToProfile: false,
            error: '',
            loading: true,
        }
        this.match = match
    }
    componentDidMount = () => {
        this.readUserInfo()
        this.loadUserImage()
    }

    readUserInfo = () => {
        const jwt = auth.isAuthenticated()
        read(
            {
                userId: this.match.params.userId,
            },
            { t: jwt.token }
        )
            .then(response => {
                this.setState({
                    userId: response.data._id,
                    name: response.data.name,
                    email: response.data.email,
                    about: response.data.about,
                    loading: false,
                })
            })
            .catch(error => {
                this.setState({ error: error.response.data.error })
            })
    }

    handleChangeName = event => {
        this.setState({ name: event.target.value })
    }

    handleChangeAbout = event => {
        this.setState({ about: event.target.value })
    }

    handleChangeEmail = event => {
        this.setState({ email: event.target.value })
    }

    handleChangePassword = event => {
        this.setState({ password: event.target.value })
    }

    handleChangePhoto = event => {
        let imageFormData = new FormData()
        imageFormData.set('imageName', event.target.files[0].name)
        imageFormData.append('imageData', event.target.files[0])
        this.saveUserImage(imageFormData)
    }

    saveUserImage = imageFormData => {
        const jwt = auth.isAuthenticated()
        saveProfileImage({ userId: this.state.userId }, imageFormData, {
            t: jwt.token,
        })
            .then(response => {
                this.setState(
                    () => {
                        return {
                            photoId: response.data.photoId,
                        }
                    },
                    () => {
                        this.loadUserImage()
                    }
                )
            })
            .catch(error => console.log(error))
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
                this.setState({ photoSrc: image })
            })
            .catch(error => console.log(error.response))
    }

    clickSubmit = e => {
        e.preventDefault()
        const jwt = auth.isAuthenticated()
        const user = {
            name: this.state.name || undefined,
            email: this.state.email || undefined,
            password: this.state.password || undefined,
            about: this.state.about || undefined,
        }
        update(
            {
                userId: this.match.params.userId,
            },
            {
                t: jwt.token,
            },
            user
        )
            .then(() => {
                this.setState({
                    redirectToProfile: true,
                })
            })
            .catch(error => {
                this.setState({
                    error: error.response.data.error,
                })
            })
    }

    render() {
        const { classes } = this.props
        if (this.state.redirectToProfile) {
            return <Redirect to={'/user/' + this.state.userId} />
        }
        if (this.state.loading) {
            return <LoadingSpinners loading={this.state.loading} />
        }
        return (
            <form onSubmit={this.clickSubmit}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography
                            type="headline"
                            component="h2"
                            className={classes.title}
                        >
                            Edit Profile
                        </Typography>
                        {this.state.photoSrc ? (
                            <Avatar
                                src={this.state.photoSrc}
                                className={classes.bigAvatar}
                            />
                        ) : (
                            <span></span>
                        )}
                        <br />
                        <input
                            accept="image/*"
                            name="imageData"
                            onChange={this.handleChangePhoto}
                            className={classes.input}
                            id="icon-button-file"
                            type="file"
                        />
                        <label htmlFor="icon-button-file">
                            <Button
                                variant="contained"
                                color="default"
                                component="span"
                            >
                                Upload Image
                            </Button>
                        </label>
                        <br />
                        <TextField
                            id="name"
                            label="Name"
                            type="text"
                            className={classes.textField}
                            value={this.state.name}
                            onChange={this.handleChangeName}
                            margin="normal"
                            autoComplete="text"
                        />
                        <br />
                        <TextField
                            multiline
                            id="multiline-flexible"
                            label="About"
                            rows="4"
                            type="text"
                            className={classes.textField}
                            value={this.state.about}
                            onChange={this.handleChangeAbout}
                            autoComplete="text"
                        />
                        <br />
                        <TextField
                            id="email"
                            type="email"
                            label="Email"
                            className={classes.textField}
                            value={this.state.email}
                            onChange={this.handleChangeEmail}
                            margin="normal"
                            autoComplete="email"
                        />
                        <br />
                        <TextField
                            id="password"
                            type="password"
                            label="Password"
                            className={classes.textField}
                            value={this.state.password}
                            onChange={this.handleChangePassword}
                            margin="normal"
                            autoComplete="password"
                        />
                        <br />
                        {this.state.error && (
                            <Typography component="p" color="error">
                                <Icon color="error" className={classes.error}>
                                    error
                                </Icon>
                                {this.state.error}
                            </Typography>
                        )}
                    </CardContent>
                    <CardActions>
                        <Button
                            type="submit"
                            color="primary"
                            autoFocus="autoFocus"
                            variant="contained"
                            className={classes.submit}
                        >
                            Submit
                        </Button>
                    </CardActions>
                </Card>
            </form>
        )
    }
}

EditProfile.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(EditProfile)
