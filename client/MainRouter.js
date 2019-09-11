import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from './auth/PrivateRoute'
import Menu from './core/Menu'
import Home from './core/Home'
import Users from './user/Users'
import Signup from './user/Signup'
import Signin from './auth/Signin'
import Profile from './user/Profile'
import EditProfile from './user/EditProfile'
import Newsfeed from './post/Newsfeed'

class MainRouter extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Menu />
                <Switch>
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
        )
    }
}

export default MainRouter
