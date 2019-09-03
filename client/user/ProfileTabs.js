import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FollowGrid from './FollowGrid'
import { Tab, Tabs, AppBar, Typography } from '@material-ui/core'

class ProfileTabs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tab: 0,
        }
    }

    componentDidMount = () => {
        this.setState({ tab: 0 })
    }

    handleTabChange = (event, value) => {
        this.setState({ tab: value })
    }

    render() {
        return (
            <div>
                <AppBar position="static" color="default">
                    <Tabs
                        value={this.state.tab}
                        onChange={this.handleTabChange}
                        indicatorColor="primary"
                        textColor="primary"
                        fullwidth="true"
                    >
                        <Tab label="Following" />
                        <Tab label="Followers" />
                    </Tabs>
                </AppBar>
                {this.state.tab === 0 && (
                    <TabContainer>
                        <FollowGrid people={this.props.user.following} />
                    </TabContainer>
                )}
                {this.state.tab === 1 && (
                    <TabContainer>
                        <FollowGrid people={this.props.user.followers} />
                    </TabContainer>
                )}
            </div>
        )
    }
}

ProfileTabs.propTypes = {
    user: PropTypes.object.isRequired,
}

const TabContainer = props => {
    return <Typography component="div">{props.children}</Typography>
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
}

export default ProfileTabs
