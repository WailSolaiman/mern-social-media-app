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
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Button,
    Typography,
} from '@material-ui/core'

import { list } from './api-user.js'

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
    link: {
        textDecoration: 'none',
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
        }
    }

    componentDidMount() {
        list()
            .then(response => {
                this.setState({ users: response.data })
            })
            .catch(error => {
                console.log(error.response.data.error)
            })
    }

    render() {
        const { classes } = this.props
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
                                    className={classes.link}
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
