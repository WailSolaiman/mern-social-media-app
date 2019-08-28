import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import {
    List,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText,
    Paper,
    Avatar,
    IconButton,
    Typography,
} from '@material-ui/core'
import { ArrowForward, Person } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { list } from './api-user.js'

const styles = theme => ({
    root: theme.mixins.gutters({
        padding: theme.spacing(5),
        margin: theme.spacing(5),
    }),
    title: {
        margin: `${theme.spacing(4)}px 0 ${theme.spacing(2)}px`,
        color: theme.palette.openTitle,
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
                console.log(error)
            })
    }
    render() {
        const { classes } = this.props
        return (
            <Paper className={classes.root} elevation={4}>
                <Typography type="title" className={classes.title}>
                    All Users
                </Typography>
                <List dense>
                    {this.state.users.map((item, i) => {
                        return (
                            <Link to={'/user/' + item._id} key={i}>
                                <ListItem button>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <Person />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={item.name} />
                                    <ListItemSecondaryAction>
                                        <IconButton>
                                            <ArrowForward />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            </Link>
                        )
                    })}
                </List>
            </Paper>
        )
    }
}

Users.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Users)