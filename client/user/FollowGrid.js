import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import slash from 'slash'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import { Avatar, GridList, GridListTile, Typography } from '@material-ui/core'

const styles = theme => ({
    bigAvatar: {
        width: '75%',
        height: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    gridList: {
        width: '100%',
    },
    tileText: {
        textAlign: 'center',
        marginTop: 10,
    },
})
class FollowGrid extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { classes } = this.props
        return (
            <GridList cellHeight={300} className={classes.gridList} cols={4}>
                {this.props.people.map((person, i) => {
                    return (
                        <GridListTile key={i}>
                            <Link to={'/user/' + person._id}>
                                <Avatar
                                    alt={person.name}
                                    src={
                                        person.image_data
                                            ? '/' + slash(person.image_data)
                                            : ''
                                    }
                                    className={classes.bigAvatar}
                                />
                                <Typography className={classes.tileText}>
                                    {person.name}
                                </Typography>
                            </Link>
                        </GridListTile>
                    )
                })}
            </GridList>
        )
    }
}

FollowGrid.propTypes = {
    classes: PropTypes.object.isRequired,
    people: PropTypes.array.isRequired,
}

export default withStyles(styles)(FollowGrid)
