import React from 'react';
import { Card } from 'react-native-elements';
import { Text, View } from 'react-native';

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


function DishDetail(props) {
    return (
        <RenderDish dish={props.dish} />
    )
}
export default DishDetail;
