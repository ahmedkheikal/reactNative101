import React, { Component} from 'react';
import DishDetail from './DishDetailComponent';
import { ScrollView } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Menu from './MenuComponent';

 

const MenuNavigator = createStackNavigator({
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



export default class Main extends Component {

    render() {
        return (
            <MenuNavigator style={{flex: 1}} />
        );
    }
}
