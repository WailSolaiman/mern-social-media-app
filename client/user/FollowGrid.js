import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import slash from 'slash'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import { Avatar, GridList, GridListTile, Typography } from '@material-ui/core'

const styles = theme => ({
    root: {
        paddingTop: theme.spacing(2),
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        background: theme.palette.background.paper,
    },
    bigAvatar: {
        width: 60,
        height: 60,
        margin: 'auto',
    },
    gridList: {
        width: 500,
        height: 220,
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
            <div className={classes.root}>
                <GridList
                    cellHeight={160}
                    className={classes.gridList}
                    cols={4}
                >
                    {this.props.people.map((person, i) => {
                        return (
                            <GridListTile style={{ height: 120 }} key={i}>
                                <Link to={'/user/' + person._id}>
                                    <Avatar
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
            </div>
        )
    }
}

FollowGrid.propTypes = {
    classes: PropTypes.object.isRequired,
    people: PropTypes.array.isRequired,
}

export default withStyles(styles)(FollowGrid)
