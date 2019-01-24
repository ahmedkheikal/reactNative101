import React, { Component } from 'react';
import { Card, Icon, Rating, Button, FormInput } from 'react-native-elements';
import { Text, FlatList, View, ScrollView, Modal } from 'react-native';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments
    }
}
const mapDispatchToProps = dispatch => ({
    addComments: dispatch(addComments())
})

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            favorites: [],
            rating: 0,
            author: '',
            comment: ''
        }
    }

    static navigationOptions = {
        title: 'Dish Details'
    };

    toggleModal() {
        this.setState({
            modalVisible: !this.state.modalVisible
        })
    }

    markFavorite(dishId) {
        this.setState({
            favorites: this.state.favorites.concat(dishId)
        })
    }

    ratingCompleted(rating) {

    }

    handleRating() {
        this.props.addComments({comment});
        this.setState({
            rating: 0,
            author: '',
            comment: ''
        })
        this.toggleModal();
        Alert.alert('Rating added successfully')
    }






    render() {

        const RenderDish = (props) => {
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
                      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Icon
                            raised
                            reverse
                            name={props.favorite ? 'heart' : 'heart-o'}
                            type='font-awesome'
                            color='#f50'
                            onPress={() => props.favorite ? console.log('Already Favorite') : props.onPress()}
                            />
                        <Icon
                            reverse
                            raised
                            name='comment'
                            type='font-awesome'
                            color='#f50'
                            onPress={() => this.toggleModal()}
                            />
                    </View>

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



        const dishId = this.props.navigation.getParam('dishId',0);

        return (
            <ScrollView>
                <RenderDish
                    favorite={this.state.favorites.some(el => el === dishId)}
                    onPress={() => this.markFavorite(dishId)}
                    dish={this.props.dishes.dishes[+dishId]} />
                <RenderComments comments={this.props.comments.comments.filter(item => item.dishId == dishId)} />
                <Modal
                    animationType='slide'
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => this.toggleModal()}
                    >
                    <Rating
                        showRating
                        type="star"
                        fractions={1}
                        startingValue={3}
                        imageSize={40}
                        onFinishRating={this.ratingCompleted}
                        onStartRating={this.ratingStarted}
                        style={{ paddingVertical: 10 }} />
                    <FormInput
                        placeholder='Author'
                        leftIcon={
                            <Icon
                                name="user"
                                type="font-awesome"
                                size={17}
                                />
                        }
                        onValueChange={value => this.setState({author: value})}
                        />
                    <FormInput
                        placeholder='Comment'
                        leftIcon={
                            <Icon
                                name="comment"
                                type="font-awesome"
                                size={17}
                                />
                        }
                        onValueChange={value => this.setState({comment: value})}
                        />
                    <Button
                        onPress={() => this.handleRating()}
                        value="Add"
                        />

                </Modal>
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


export default connect(mapStateToProps)(DishDetail);
