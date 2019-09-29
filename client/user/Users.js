import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, Grid, withStyles } from '@material-ui/core'
import { list } from './api-user.js'
import User from './User'
import LoadingSpinners from '../core/LoadingSpinners'

const styles = theme => ({
    container: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        backgroundColor: 'white',
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
                this.setState(
                    () => {
                        return { users: response.data }
                    },
                    () => {
                        setTimeout(() => {
                            this.setState({ loading: false })
                        }, 1000)
                    }
                )
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
                    {this.state.users.map((user, i) => {
                        return <User key={i} user={user} />
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
