import React, { Component} from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishDetailComponent';
import { View, ScrollView } from 'react-native';
// import { ScrollView } from 'native-base';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }

    onDishSelect(dishId) {
        this.setState({
            selectedDish: dishId
        });
    }

    render() {
        return (
            <ScrollView>
            <Menu
                dishes={this.state.dishes}
                onPress={dishId => this.onDishSelect(dishId)}
                />
            <DishDetail
                dish={ this.state.dishes.filter(dish => dish.id === this.state.selectedDish)[0] }
                />
            </ScrollView>

        );
    }
}
