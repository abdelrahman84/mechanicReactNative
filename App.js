import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import SwitchNavigator from './navigation/SwitchNavigator'
import Login from './components/Login'
import reducer from './reducers'
import Signup from './components/Signup'
import Profile from './components/Profile'

const middleware = applyMiddleware(thunkMiddleware)
const store = createStore(reducer, middleware)


export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <SwitchNavigator />
            </Provider>
        )
    }
}