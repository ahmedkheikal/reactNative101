import React, { Component } from 'react';
import { ScrollView, View, Alert, PanResponder } from 'react-native';
import { Card, Text } from 'react-native-elements';
import { baseUrl } from '../shared/baseUrl';
import { connect } from 'react-redux';
import { Loading } from './LoadingComponent';
import * as Animatable from 'react-native-animatable';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        promotions: state.promotions,
        leaders: state.leaders,
        isLoading: state.leaders.isLoading
    }
}

const recognizeDrag = ({ moveX, moveY, dx, dy }) => {
    if (dx < -200)
    return true;

};
const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (e, gestureState) => {
        return true;
    },
    onPanResponderEnd: (e, gestureState) => {
        if (recognizeDrag(gestureState))
        Alert.alert('gesture recognized')
        return true;

    }
});

function RenderItem(props) {
    const item = props.item;
    if (item !== null && item !== undefined)
    return (
        <Animatable.View
            animation="fadeInDown"
            {...panResponder.panHandlers}>
            <Card
                featuredTitle={item.name}
                featuredSubtitle={item.designation}
                image={{ uri: baseUrl + item.image }}
                />
        </Animatable.View>
    );
    return null;
}

class Home extends Component {


    static navigationOptions = {
        title: 'Home'
    }
    render() {
        if (this.props.isLoading)
        return (<Loading />);
        else if (this.props.leaders.errMess)
        return (
            <View style={{ justifyContent: 'center', flex: 1 }}>
                <Text style={{
                        textAlign: 'center',
                        justifyContent: 'center',
                        fontSize: 20
                    }}>{this.props.leaders.errMess}</Text>
                </View>
            )
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
