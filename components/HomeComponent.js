import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { baseUrl } from '../shared/baseUrl';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        promotions: state.promotions,
        leaders: state.leaders,
    }
}
function RenderItem(props) {
    const item = props.item;
    if (item !== null && item !== undefined)
    return (
        <Card
            featuredTitle={item.name}
            featuredSubtitle={item.designation}
            image={{ uri: baseUrl + item.image }}
            />
    );
    return null;
}

class Home extends Component {

    
    static navigationOptions = {
        title: 'Home'
    }
    render() {
        return (
            <ScrollView>
                <RenderItem
                    item={this.props.dishes.dishes.filter(dish => dish.featured == true)[0] }
                    />
                <RenderItem
                    item={this.props.promotions.promotions.filter(promotion => promotion.featured == true)[0] }
                    />
                <RenderItem
                    item={this.props.leaders.leaders.filter(leader => leader.featured == true)[0] }
                    />
            </ScrollView>
        )
    }
}
export default connect(mapStateToProps)(Home);