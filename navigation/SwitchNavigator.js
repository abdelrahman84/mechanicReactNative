import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import Login from '../components/Login'
import Signup from '../components/Signup'
import Profile from '../components/Profile'

const SwitchNavigator = createSwitchNavigator(
    {
        Login: {
            screen: Login
        },
        Signup: {
            screen: Signup
        },
        Profile: {
            screen: Profile
        }
    },
    {
        initialRouteName: 'Login'
    }
)

export default createAppContainer(SwitchNavigator)