import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import slash from 'slash'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import {
    Container,
    Grid,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
} from '@material-ui/core'
import { list } from './api-user.js'
import LoadingSpinners from '../core/LoadingSpinners'

const styles = theme => ({
    container: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
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

class Users extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            loading: true,
        }
    }

    componentDidMount() {
        list()
            .then(response => {
                this.setState({ users: response.data, loading: false })
            })
            .catch(error => {
                console.log(error.response.data.error)
            })
    }

    render() {
        const { classes } = this.props
        if (this.state.loading) {
            return <LoadingSpinners loading={this.state.loading} />
        }
        return (
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="h2" gutterBottom>
                            Users
                        </Typography>
                    </Grid>
                    {this.state.users.map((user, i) => {
                        return (
                            <Grid item xs={12} sm={6} md={3} key={i}>
                                <Link
                                    to={'/user/' + user._id}
                                    style={{ textDecoration: 'none' }}
                                >
                                    <Card className={classes.card}>
                                        <CardActionArea>
                                            <CardMedia
                                                className={classes.media}
                                                image={
                                                    user.image_data
                                                        ? '/' +
                                                          slash(user.image_data)
                                                        : ''
                                                }
                                                title={user.name}
                                            />
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
                    })}
                </Grid>
            </Container>
        )
    }
}

Users.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Users)
