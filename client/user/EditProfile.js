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
    Typography,
} from '@material-ui/core'
import auth from './../auth/auth-helper'
import { read, update } from './api-user.js'

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
})

class EditProfile extends Component {
    constructor({ match }) {
        super()
        this.state = {
            userId: '',
            name: '',
            email: '',
            password: '',
            redirectToProfile: false,
            error: '',
        }
        this.match = match
    }

    componentDidMount = () => {
        const jwt = auth.isAuthenticated()
        read(
            {
                userId: this.match.params.userId,
            },
            { t: jwt.token }
        )
            .then(response => {
                this.setState({
                    name: response.data.name,
                    email: response.data.email,
                })
            })
            .catch(error => {
                this.setState({ error: error.response.data.error })
            })
    }
    clickSubmit = () => {
        const jwt = auth.isAuthenticated()
        const user = {
            name: this.state.name || undefined,
            email: this.state.email || undefined,
            password: this.state.password || undefined,
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
            .then(response => {
                this.setState({
                    userId: response.data._id,
                    redirectToProfile: true,
                })
            })
            .catch(error => {
                this.setState({ error: error.response.data.error })
            })
    }
    handleChange = name => event => {
        this.setState({ [name]: event.target.value })
    }
    render() {
        const { classes } = this.props
        if (this.state.redirectToProfile) {
            return <Redirect to={'/user/' + this.state.userId} />
        }
        return (
            <Card className={classes.card}>
                <CardContent>
                    <Typography
                        type="headline"
                        component="h2"
                        className={classes.title}
                    >
                        Edit Profile
                    </Typography>
                    <TextField
                        id="name"
                        label="Name"
                        className={classes.textField}
                        value={this.state.name}
                        onChange={this.handleChange('name')}
                        margin="normal"
                    />
                    <br />
                    <TextField
                        id="email"
                        type="email"
                        label="Email"
                        className={classes.textField}
                        value={this.state.email}
                        onChange={this.handleChange('email')}
                        margin="normal"
                    />
                    <br />
                    <TextField
                        id="password"
                        type="password"
                        label="Password"
                        className={classes.textField}
                        value={this.state.password}
                        onChange={this.handleChange('password')}
                        margin="normal"
                    />
                    <br />{' '}
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
                        color="primary"
                        variant="contained"
                        onClick={this.clickSubmit}
                        className={classes.submit}
                    >
                        Submit
                    </Button>
                </CardActions>
            </Card>
        )
    }
}

EditProfile.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(EditProfile)
