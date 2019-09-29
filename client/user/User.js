import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
    Grid,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    withStyles,
} from '@material-ui/core'
import { getProfileImage } from './api-user.js'
import auth from '../auth/auth-helper'
import LoadingSpinners from '../core/LoadingSpinners'

const styles = theme => ({
    card: {
        width: '100%',
    },
    media: {
        height: 300,
    },
    text: {
        textAlign: 'center',
        textTransform: 'uppercase',
        color: `${theme.palette.secondary.light}`,
    },
})

class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            photoSrc: '',
            loading: true,
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
                this.setState(
                    () => {
                        return { photoSrc: image }
                    },
                    () => {
                        setTimeout(() => {
                            this.setState({ loading: false })
                        }, 50)
                    }
                )
            })
            .catch(error => console.log(error.response))
    }

    render() {
        const { classes } = this.props
        const { user } = this.props
        if (this.state.loading) {
            return <LoadingSpinners loading={this.state.loading} />
        }
        return (
            <Grid item xs={12} sm={6} md={3}>
                <Link
                    to={'/user/' + user._id}
                    style={{ textDecoration: 'none' }}
                >
                    <Card className={classes.card}>
                        <CardActionArea>
                            {this.state.photoSrc ? (
                                <CardMedia
                                    className={classes.media}
                                    image={this.state.photoSrc}
                                    title={user.name}
                                />
                            ) : (
                                <span></span>
                            )}
                            <CardContent>
                                <Typography
                                    variant="h6"
                                    className={classes.text}
                                >
                                    {user.name}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
            </Grid>
        )
    }
}

User.propTypes = {
    classes: PropTypes.object.isRequired,
    user: PropTypes.object,
}

export default withStyles(styles)(User)
