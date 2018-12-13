import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Text, Card } from 'react-native-elements';
import { DISHES } from '../shared/dishes';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

function RenderItem(props) {
    const item = props.item;
    if (item !== null)
    return (
        <Card
            featuredTitle={item.name}
            featuredSubtitle={item.designation}
            image={require('./images/uthappizza.png')}

            />
    );
}

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            promotions: PROMOTIONS,
            leaders: LEADERS
        }
    }
    
    static navigationOptions = {
        title: 'Home'
    }
    render() {
        return (
            <ScrollView>
                <RenderItem
                    item={this.state.dishes.filter(dish => dish.featured == true)[0] }
                    />
                <RenderItem
                    item={this.state.promotions.filter(promotion => promotion.featured == true)[0] }
                    />
                <RenderItem
                    item={this.state.leaders.filter(leader => leader.featured == true)[0] }
                    />
            </ScrollView>
        )
    }
}
export default Home;