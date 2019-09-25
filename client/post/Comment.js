import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import {
    Grid,
    Box,
    ListItem,
    Typography,
    Avatar,
    Divider,
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import { getProfileImage } from '../user/api-user'
import auth from '../auth/auth-helper'

const styles = () => ({
    smallAvatar: {
        width: 60,
        height: 60,
        margin: '0 auto',
    },
    commentDate: {
        display: 'block',
        color: 'gray',
        fontSize: '0.8em',
    },
    flex: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    divider: {
        marginTop: 5,
    },
})

class Comment extends Component {
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
        getProfileImage(
            { userId: this.props.comment.postedBy._id },
            { t: jwt.token }
        )
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
        const { comment, deleteComment, classes } = this.props
        const { name } = this.props.comment.postedBy
        return (
            <ListItem>
                <Grid
                    container
                    spacing={3}
                    display="flex"
                    flexdirection="column"
                    alignItems="flex-start"
                >
                    <Grid item xs={12} md={3}>
                        <Avatar
                            className={classes.smallAvatar}
                            alt={name}
                            src={this.state.photoSrc}
                        />
                        <Box className={classes.flex}>
                            <Typography variant="subtitle1">
                                <Link to={'/user/' + comment.postedBy._id}>
                                    {name}
                                </Link>
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                gutterBottom
                                className={classes.commentDate}
                            >
                                {new Date(comment.created).toDateString()}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={11} md={8}>
                        <Typography variant="h5" gutterBottom>
                            {comment.text}
                        </Typography>
                    </Grid>
                    <Grid item xs={1}>
                        {auth.isAuthenticated().user._id ===
                            comment.postedBy._id && (
                            <DeleteIcon
                                onClick={() => deleteComment(comment)}
                            />
                        )}
                    </Grid>
                    <Grid item xs={12}>
                        <Divider className={classes.divider} />
                    </Grid>
                </Grid>
            </ListItem>
        )
    }
}

Comment.propTypes = {
    classes: PropTypes.object.isRequired,
    comment: PropTypes.object,
    deleteComment: PropTypes.func,
}

export default withStyles(styles)(Comment)
