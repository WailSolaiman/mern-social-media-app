import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, Grid, Typography, withStyles } from '@material-ui/core'
import { list } from './api-user.js'
import User from './User'
import LoadingSpinners from '../core/LoadingSpinners'

const styles = theme => ({
    container: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
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
        this.usersList()
    }

    usersList = () => {
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
                        return <User user={user} key={i} />
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
