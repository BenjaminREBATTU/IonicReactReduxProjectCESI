import React, { Component } from 'react'
import { IonReactRouter } from '@ionic/react-router'
import { Redirect, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import AuthService from "./Authentication";

const isLogged = true;

interface IProps {
    component: React.Component
}

const PrivateRoute = ({component: Component, ...rest}: IProps) =>
    (
        <Route {...rest} render={props =>
            isLogged ?
            (
            <Component {...props}/>
            ) : (
                <Redirect to={{
                    pathname: "/login",
                }}
            />
                )
        }
        />
    )

export default PrivateRoute
