import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import {
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText,
    Avatar,
    Button,
    IconButton,
} from '@material-ui/core'
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
        this.state = {
            photoSrc: '',
        }
    }

    componentDidMount() {
        this.loadUserImage()
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
                this.setState({ photoSrc: image })
            })
            .catch(error => console.log(error.response))
    }

    render() {
        const { classes } = this.props
        const { _id, name } = this.props.user
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
                        onClick={this.clickFollow.bind(this, user, i)}
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
}

export default withStyles(styles)(FindPerson)
