import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText,
    Avatar,
    Button,
    IconButton,
    withStyles,
} from '@material-ui/core'
import { getProfileImage } from './api-user'
import auth from '../auth/auth-helper'
import VisibilityIcon from '@material-ui/icons/Visibility'

const styles = theme => ({
    avatar: {
        marginRight: theme.spacing(2),
    },
    follow: {
        right: theme.spacing(2),
    },
    viewButton: {
        verticalAlign: 'middle',
    },
})

class FindPerson extends Component {
    constructor(props) {
        super(props)
        this._isMounted = false
        this.state = {
            user: this.props.user,
            photoSrc: '',
        }
    }

    componentDidMount() {
        this._isMounted = true
        this._isMounted && this.loadUserImage()
    }

    UNSAFE_componentWillReceiveProps(props) {
        this.setState(
            () => {
                return {
                    user: props.user,
                }
            },
            () => this.loadUserImage()
        )
    }

    componentWillUnmount() {
        this._isMounted = false
    }

    updateFindPeopleList = (user, index) => {
        this.props.clickFollow(user, index)
    }

    loadUserImage = () => {
        const jwt = auth.isAuthenticated()
        getProfileImage({ userId: this.props.user._id }, { t: jwt.token })
            .then(response => {
                const base64 = btoa(
                    new Uint8Array(response.data).reduce(
                        (data, byte) => data + String.fromCharCode(byte),
                        ''
                    )
                )
                const image = `data:jpg;base64,${base64}`
                this._isMounted && this.setState({ photoSrc: image })
            })
            .catch(error => console.log(error.response))
    }

    render() {
        const { classes, index } = this.props
        const { user } = this.state
        const { _id, name } = this.state.user
        return (
            <ListItem>
                <ListItemAvatar className={classes.avatar}>
                    <Avatar src={this.state.photoSrc} />
                </ListItemAvatar>
                <ListItemText primary={name} />
                <ListItemSecondaryAction className={classes.follow}>
                    <Link to={'/user/' + _id}>
                        <IconButton
                            variant="contained"
                            color="secondary"
                            className={classes.viewButton}
                        >
                            <VisibilityIcon />
                        </IconButton>
                    </Link>
                    <Button
                        aria-label="Follow"
                        variant="contained"
                        color="primary"
                        onClick={() => this.updateFindPeopleList(user, index)}
                    >
                        Follow
                    </Button>
                </ListItemSecondaryAction>
            </ListItem>
        )
    }
}

FindPerson.propTypes = {
    classes: PropTypes.object.isRequired,
    user: PropTypes.object,
    index: PropTypes.number,
    clickFollow: PropTypes.func,
}

export default withStyles(styles)(FindPerson)
