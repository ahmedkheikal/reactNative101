import React, { Component } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Card, Text, Divider } from 'react-native-elements';

function ContactInformation(props) {
    return(
        <View>
            <Text style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 17,
                    paddingBottom: 20
                }}>
                Contact Information
            </Text>
            <Divider style={{ backgroundColor: '#999' }} />
            <Text style={{lineHeight: 50}}>
                121, Clear Water Bay Road
            </Text>
            <Text style={{lineHeight: 50}}>
                Clear Water Bay, Kowloon
            </Text>
            <Text style={{lineHeight: 50}}>
                HONG KONG
            </Text>
            <Text style={{lineHeight: 50}}>
                Tel: +852 1234 5678
            </Text>
            <Text style={{lineHeight: 50}}>
                Fax: +852 8765 4321
            </Text>
            <Text style={{lineHeight: 50}}>
                Email:confusion@food.net
            </Text>
        </View>

    );
}

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'About Us'
        }
    }


    static navigationOptions = {
        title: 'Contact Us'
    };

    render() {
        return(
            <ScrollView>
                <Card
                    dividerStyle={{backgroundColor: '#f2f2f2'}}
                    featuredTitle={this.state.title}
                    >
                    <ContactInformation />
                </Card>
            </ScrollView>
        );

    }
}

export default Contact;
