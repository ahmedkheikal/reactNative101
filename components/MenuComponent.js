import React from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

function Menu(props) {
    const renderMenuItem = ({item, index}) => {
        return (
            <ListItem
                key={index}
                avatar={require('./images/uthappizza.png')}
                roundAvatar={true}
                title={item.name}
                onPress={() => props.onPress(item.id)}
                subtitle={item.description}
                />
        );
    }
    return (
        <FlatList
            data={props.dishes}
            renderItem={renderMenuItem}
            keyExtractor={item => item.id.toString()}
            />
    );
}
export default Menu;
