import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import PrivateRoute from './auth/PrivateRoute'
import Menu from './core/Menu'
import Home from './core/Home'
import Users from './user/Users'
import Signup from './user/Signup'
import Signin from './auth/Signin'
import Profile from './user/Profile'
import EditProfile from './user/EditProfile'
import Newsfeed from './post/Newsfeed'
import Footer from './core/Footer'

class MainRouter extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { location } = this.props
        return (
            <div style={{ position: 'relative', minHeight: '100vh' }}>
                <Menu />
                <div style={{ paddingBottom: '2.5rem' }}>
                    <Switch location={location}>
                        <Route exact path="/" component={Home} />
                        <Route path="/users" component={Users} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/signin" component={Signin} />
                        <PrivateRoute
                            path="/user/edit/:userId"
                            component={EditProfile}
                        />
                        <PrivateRoute path="/newsfeed" component={Newsfeed} />
                        <Route
                            path={'/user/:userId'}
                            render={props => (
                                <Profile
                                    {...props}
                                    key={props.match.params.userId}
                                />
                            )}
                        />
                    </Switch>
                </div>
                <Footer />
            </div>
        )
    }
}

export default withRouter(MainRouter)
