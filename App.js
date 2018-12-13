import React from 'react';
import { Text, StatusBar, View, StyleSheet } from 'react-native';
import Main from "./components/MainComponent";

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Main />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green'
    }
})
