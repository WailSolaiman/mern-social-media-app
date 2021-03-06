import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Card,
    CardActions,
    CardContent,
    Button,
    TextField,
    Typography,
    Icon,
    withStyles,
} from '@material-ui/core'
import { create } from './api-user.js'

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

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            password: '',
            email: '',
            about: '',
            open: false,
            error: '',
        }
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value })
    }

    closeDialog = () => {
        this.setState({ errorOpen: false })
    }

    clickSubmit = e => {
        e.preventDefault()
        const user = {
            name: this.state.name || undefined,
            about: this.state.about,
            email: this.state.email || undefined,
            password: this.state.password || undefined,
        }
        create(user)
            .then(() => {
                this.setState({ error: '', open: true })
            })
            .catch(error => {
                this.setState({
                    error: error.response.data.error,
                })
            })
    }

    render() {
        const { classes } = this.props
        return (
            <form onSubmit={this.clickSubmit}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography
                            type="headline"
                            component="h2"
                            className={classes.title}
                        >
                            Sign Up
                        </Typography>
                        <TextField
                            id="name"
                            label="Name"
                            type="text"
                            className={classes.textField}
                            value={this.state.name}
                            onChange={this.handleChange('name')}
                            margin="normal"
                            autoComplete="text"
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
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            Submit
                        </Button>
                    </CardActions>
                </Card>
                <Dialog open={this.state.open} disableBackdropClick={true}>
                    <DialogTitle>New Account</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            New account successfully created.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Link to="/signin">
                            <Button
                                type="submit"
                                className={classes.submit}
                                color="primary"
                                autoFocus="autoFocus"
                                variant="contained"
                            >
                                Sign In
                            </Button>
                        </Link>
                    </DialogActions>
                </Dialog>
            </form>
        )
    }
}

Signup.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Signup)
