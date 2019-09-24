import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import { Avatar, GridListTile, Typography } from '@material-ui/core'

const styles = theme => ({
    bigAvatar: {
        width: '75%',
        height: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    tileText: {
        textAlign: 'center',
        marginTop: 10,
    },
})

class FollowGridItem extends Component {
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
        getProfileImage({ userId: this.props.person._id }, { t: jwt.token })
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
        const { person, classes } = this.props
        return (
            <GridListTile>
                <Link to={'/user/' + person._id}>
                    <Avatar
                        alt={person.name}
                        src={this.state.photoSrc}
                        className={classes.bigAvatar}
                    />
                    <Typography className={classes.tileText}>
                        {person.name}
                    </Typography>
                </Link>
            </GridListTile>
        )
    }
}

FollowGrid.propTypes = {
    classes: PropTypes.object.isRequired,
    person: PropTypes.object,
}

export default withStyles(styles)(FollowGridItem)
