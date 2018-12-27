import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { DISHES } from '../shared/dishes';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = (state) => ({
    dishes: state.dishes
})
class Menu extends Component {

    static navigationOptions = {
        title: 'Menu'
    };


    render() {
        const { navigate } = this.props.navigation;

        const renderMenuItem = ({item, index}) => {
            return (
                <ListItem
                    key={index}
                    avatar={{uri: baseUrl + item.image}}
                    roundAvatar={true}
                    title={item.name}
                    onPress={() => navigate('DishDetail', { dishId: item.id })}
                    subtitle={item.description}
                    />
            );
        };
        return (
            <FlatList
                data={this.props.dishes.dishes}
                renderItem={renderMenuItem}
                keyExtractor={item => item.id.toString()}
                />
        );
    }
} 
export default connect(mapStateToProps)(Menu);
