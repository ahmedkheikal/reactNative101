import React, { Component } from 'react';
import { Card, Icon } from 'react-native-elements';
import { Text, FlatList, View, ScrollView } from 'react-native';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments
    }
}

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favorites: []
        }
    }

    static navigationOptions = {
        title: 'Dish Details'
    };

    markFavorite(dishId) {
        this.setState({
            favorites: this.state.favorites.concat(dishId)
        })
    }

    render() {

        const dishId = this.props.navigation.getParam('dishId',0);

        return (
            <ScrollView>
                <RenderDish 
                    favorite={this.state.favorites.some(el => el === dishId)}
                    onPress={() => this.markFavorite(dishId)} 
                    dish={this.props.dishes.dishes[+dishId]} />
                <RenderComments comments={this.props.comments.comments.filter(item => item.dishId == dishId)} />
            </ScrollView>

        );
    }
}

function RenderComments(props) {
    const comments = props.comments;

    const commentItem = ({ item, index }) =>
    <View key={index} style={{margin: 10, paddingBottom: 20}}>
        <Text style={{ fontSize: 15 }}>{item.comment}</Text>
        <Text style={{ fontSize: 12 }}>{item.rating + ' stars'}</Text>
        <Text style={{ fontSize: 12 }}>{ '-- ' + item.author+ ', ' +item.date} </Text>
    </View>;
    return (
        <Card>
            <FlatList
                data={comments}
                renderItem={commentItem}
                keyExtractor={item => item.id.toString()}
                />
        </Card>
    )
}

function RenderDish(props) {
    const dish = props.dish;

    if (dish != null)
    return (
        <Card
            featuredTitle={dish.name}
            image={{uri: baseUrl + dish.image}}
            >
            <Text style={{margin: 10}}>
                {dish.description}
            </Text>
            <Icon 
                raised
                reverse
                name={props.favorite ? 'heart' : 'heart-o'}
                type='font-awesome'
                color='#f50'
                onPress={() => props.favorite ? console.log('Already Favorite') : props.onPress()}
                />
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

export default connect(mapStateToProps)(DishDetail);