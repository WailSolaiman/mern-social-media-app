import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    withStyles,
} from '@material-ui/core'
import seashellImg from '../assets/images/seashell.jpeg'

const styles = theme => ({
    card: {
        maxWidth: 600,
        margin: 'auto',
        marginTop: theme.spacing(5),
    },
    title: {
        padding: `${theme.spacing(3)}px 
            ${theme.spacing(2.5)}px 
            ${theme.spacing(2)}px`,
        color: theme.palette.text.secondary,
    },
    media: {
        minHeight: 330,
    },
})

class Home extends Component {
    render() {
        const { classes } = this.props
        return (
            <Card className={classes.card}>
                <Typography
                    type="headline"
                    component="h2"
                    className={classes.title}
                >
                    Home Page
                </Typography>
                <CardMedia
                    className={classes.media}
                    image={seashellImg}
                    title="Unicorn Shells"
                />
                <CardContent>
                    <Typography type="body1" component="p">
                        Welcome to the MERN Skeleton home page.
                    </Typography>
                    <Link to="/users">Users</Link>
                </CardContent>
            </Card>
        )
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Home)
