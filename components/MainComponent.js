import React, { Component} from 'react';
import DishDetail from './DishDetailComponent';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import Menu from './MenuComponent';
import Home from './HomeComponent';

 

const MenuNavigator = createStackNavigator({
    Home: { screen: Home },
    Menu: { screen: Menu },
    DishDetail: { screen: DishDetail }
},
{
    initialRouteName: 'Menu',
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff"            
        }
    }
}
);

const HomeNavigator = createStackNavigator({
    Home: { screen: Home }
},
{
    initialRouteName: 'Home',
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff"            
        }
    }
}
);

const MainNavigator = createDrawerNavigator({
    Home: {
        screen: HomeNavigator,
        navigationOptions: {
            title: 'Home',
            drawerLabel: 'Home'
        }
    },
    Menu: {
        screen: MenuNavigator,
        navigationOptions: {
            title: 'Menu',
            drawerLabel: 'Menu'
        }
    }
}, {
    drawerBackgroundColor: 'white'
});

export default class Main extends Component {

    render() {
        return (
            <MainNavigator style={{flex: 1}} />
        );
    }
}
