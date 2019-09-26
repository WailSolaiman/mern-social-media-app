import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { GridList, withStyles } from '@material-ui/core'
import FollowGridItem from './FollowGridItem'

const styles = () => ({
    gridList: {
        width: '100%',
    },
})

class FollowGrid extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { classes } = this.props
        return (
            <GridList
                cellHeight={300}
                cols={2}
                spacing={2}
                className={classes.gridList}
            >
                {this.props.people.map((person, i) => {
                    return <FollowGridItem person={person} key={i} />
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
