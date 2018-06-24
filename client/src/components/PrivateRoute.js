import React from 'react';
import API from '../utils/API.js';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => {
        var path = props.location.pathname;
        if(API.isAuth()===false){
            return(<Redirect to='/' />)
        }
        else{
            return( <Component {...props} /> )
        }
    }} />
)
