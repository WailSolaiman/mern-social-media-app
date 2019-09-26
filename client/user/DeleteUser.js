import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Button,
    IconButton,
} from '@material-ui/core'
import { remove } from './api-user.js'
import auth from './../auth/auth-helper'
import DeleteIcon from '@material-ui/icons/Delete'

class DeleteUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirect: false,
            open: false,
        }
    }

    clickButton = () => {
        this.setState({ open: true })
    }

    deleteAccount = () => {
        const jwt = auth.isAuthenticated()
        remove(
            {
                userId: this.props.userId,
            },
            { t: jwt.token }
        )
            .then(() => {
                auth.signout(() => console.log('deleted'))
                this.setState({ redirect: true })
            })
            .catch(error => {
                console.log(error.response.data.error)
            })
    }

    handleRequestClose = () => {
        this.setState({ open: false })
    }

    render() {
        const redirect = this.state.redirect
        if (redirect) {
            return <Redirect to="/" />
        }
        return (
            <span>
                <IconButton
                    aria-label="Delete"
                    onClick={this.clickButton}
                    color="secondary"
                >
                    <DeleteIcon />
                </IconButton>

                <Dialog
                    open={this.state.open}
                    onClose={this.handleRequestClose}
                >
                    <DialogTitle>{'Delete Account'}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Confirm to delete your account.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={this.handleRequestClose}
                            color="primary"
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={this.deleteAccount}
                            color="secondary"
                            autoFocus="autoFocus"
                        >
                            Confirm
                        </Button>
                    </DialogActions>
                </Dialog>
            </span>
        )
    }
}

DeleteUser.propTypes = {
    userId: PropTypes.string.isRequired,
}

export default DeleteUser
