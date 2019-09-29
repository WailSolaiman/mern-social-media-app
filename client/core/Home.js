import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
    Container,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Typography,
    withStyles,
} from '@material-ui/core'
import UsersImg from '../assets/images/users.jpg'
import NewsfeedImg from '../assets/images/newsfeed.jpg'

const styles = theme => ({
    container: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        backgroundColor: 'white',
    },
    card: {
        maxWidth: 600,
        margin: 'auto',
        marginTop: theme.spacing(5),
    },
    title: {
        padding: `${theme.spacing(1)}px 
            ${theme.spacing(1)}px 
            ${theme.spacing(1)}px`,
    },
    media: {
        minHeight: 330,
    },
    center: {
        textAlign: 'center',
        marginTop: '5rem',
    },
})

class Home extends Component {
    sections = [
        { title: 'Users', url: '/users', image: UsersImg },
        { title: 'Newsfeed', url: '/newsfeed', image: NewsfeedImg },
    ]

    render() {
        const { classes } = this.props
        return (
            <Container maxWidth="lg" className={classes.container}>
                <Typography variant="h3" className={classes.center}>
                    Welcome to the MERN Social Media.
                </Typography>
                <Grid container spacing={3}>
                    {this.sections.map((section, index) => {
                        return (
                            <Grid key={index} item sm={12} md={6}>
                                <Link
                                    to={section.url}
                                    style={{ textDecoration: 'none' }}
                                >
                                    <Card className={classes.card}>
                                        <CardMedia
                                            className={classes.media}
                                            image={section.image}
                                            title="Unicorn Shells"
                                        />
                                        <CardContent>
                                            <Typography
                                                variant="h5"
                                                className={classes.title}
                                            >
                                                {section.title}
                                            </Typography>
                                        </CardContent>
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

Home.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Home)
