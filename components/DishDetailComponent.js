import React, { Component } from 'react';
import { Card } from 'react-native-elements';
import { Text, View } from 'react-native';
import { DISHES } from '../shared/dishes';

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        }
    }

    static navigationOptions = {
        title: 'Dish Details'
    };
    
    render() {
        const dishId = this.props.navigation.getParam('dishId',0);

        return (
            <RenderDish dish={this.state.dishes[+dishId]} />
        );
    }
}
function RenderDish(props) {
    const dish = props.dish;

    if (dish != null)
    return (
        <Card
            featuredTitle={dish.name}
            image={require('./images/uthappizza.png')}
            >
            <Text style={{margin: 10}}>
                {dish.description}
            </Text>
        </Card>
    );

    return (
        <View>
            <Text>
                No Dish Found
            </Text>
        </View>
    );
}

export default DishDetail;
