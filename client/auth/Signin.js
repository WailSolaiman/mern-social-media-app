import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { signin } from './api-auth.js'
import { withStyles } from '@material-ui/core'
import {
    Card,
    CardActions,
    CardContent,
    Button,
    TextField,
    Typography,
    Icon,
} from '@material-ui/core'
import auth from './../auth/auth-helper'

const styles = theme => ({
    card: {
        maxWidth: 600,
        margin: 'auto',
        textAlign: 'center',
        marginTop: theme.spacing(5),
        paddingBottom: theme.spacing(2),
    },
    error: {
        verticalAlign: 'middle',
    },
    title: {
        marginTop: theme.spacing(2),
        color: theme.palette.openTitle,
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

class Signin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            error: '',
            redirectToReferrer: false,
        }
    }

    clickSubmit = e => {
        e.preventDefault()
        const user = {
            email: this.state.email || undefined,
            password: this.state.password || undefined,
        }

        signin(user).then(data => {
            if (data.error) {
                this.setState({ error: data.error })
            } else {
                auth.authenticate(data, () => {
                    this.setState({ redirectToReferrer: true })
                })
            }
        })
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value })
    }

    render() {
        const { classes } = this.props
        const { from } = this.props.location.state || {
            from: {
                pathname: '/',
            },
        }
        const { redirectToReferrer } = this.state
        if (redirectToReferrer) {
            return <Redirect to={from} />
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
                            Sign In
                        </Typography>
                        <TextField
                            id="email"
                            type="email"
                            label="Email"
                            className={classes.textField}
                            value={this.state.email}
                            onChange={this.handleChange('email')}
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
                            onChange={this.handleChange('password')}
                            margin="normal"
                            autoComplete="password"
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
                            type="submit"
                            className={classes.submit}
                            variant="contained"
                            color="primary"
                        >
                            Submit
                        </Button>
                    </CardActions>
                </Card>
            </form>
        )
    }
}

Signin.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Signin)
