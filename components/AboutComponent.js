import React, { Component } from 'react';
import { Card, Text, Divider, ListItem } from 'react-native-elements';
import { ScrollView, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';

const mapStateToProps = state => {
    return {
        leaders: state.leaders
    }
}

class About extends Component {

    static navigationOptions = {
        title: 'About Us'
    }
    render() {
        const RenderLeader = ({item, index}) => {
            // onPress={() => navigate('DishDetail', { dishId: item.id })}

            return (

                <ListItem
                    key={index}
                    avatar={{uri: baseUrl + item.image}}
                    roundAvatar={true}
                    title={item.name}
                      subtitle={
                        <Text style={{paddingLeft: 15, color: '#999'}}>{item.description}</Text>
                    }
                    hideChevron={true}
                    />
            );
        };

        if (this.props.isLoading == true)
        return <Loading />


        return (
            <ScrollView>
                <Card
                    featuredTitle='About Us'
                    >
                    <Text style={{
                            textAlign: 'center',
                            fontWeight: 'bold',
                            fontSize: 17,
                            paddingBottom: 20
                        }}>
                        Our History
                    </Text>
                    <Divider style={{ backgroundColor: '#999' }} />
                    <Text style={{paddingTop: 20}}>
                        Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.
                        {"\n"}
                        {"\n"}
                        The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.
                    </Text>
                </Card>
                <Card
                    featuredTitle='About Us'
                    >
                    <Text style={{
                            textAlign: 'center',
                            fontWeight: 'bold',
                            fontSize: 17,
                            paddingBottom: 20
                        }}>
                        Corporate Leadership
                    </Text>
                    <Divider style={{ backgroundColor: '#999' }} />
                    <FlatList
                            data={this.props.leaders.leaders}
                            renderItem={RenderLeader}
                            keyExtractor={item => item.id.toString()}
                            />
                </Card>
            </ScrollView>

        );
    }
}
export default connect(mapStateToProps)(About);
