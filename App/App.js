import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Welcome from "./Screen/Login/Welcome";
import Login from "./Screen/Login/Login";

const RootStack = createStackNavigator(
    {
        Welcome: Welcome , 
        Login: Login ,
    },
    {
        initialRouteName: 'Welcome',
    },
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}
