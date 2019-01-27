import React, { Component} from 'react';
import DishDetail from './DishDetailComponent';
import { createStackNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import { Icon } from 'react-native-elements';
import { ScrollView, SafeAreaView, StyleSheet, View, Image, Text } from 'react-native';
import { Dimensions } from 'react-native';
import { fetchPromos, fetchComments, fetchDishes, fetchLeaders } from '../redux/ActionCreator';
import { connect } from 'react-redux';
import Reservation from './ReservationComponent';
import Login from './LoginComponent';

const mapStateToProps = state => ({ });
const mapDispatchToProps = dispatch => ({
    fetchDishes: () => dispatch(fetchDishes()),
    fetchComments: () => dispatch(fetchComments()),
    fetchPromos: () => dispatch(fetchPromos()),
    fetchLeaders: () => dispatch(fetchLeaders()),
})

const LoginNavigator = createStackNavigator({
    Login: { screen: Login }
  }, {
  navigationOptions: ({ navigation }) => ({
    headerStyle: {
        backgroundColor: "#512DA8"
    },
    headerTitleStyle: {
        color: "#fff"
    },
    headerTintColor: "#fff",
    headerLeft: <Icon name="menu" size={24}
      iconStyle={{ color: 'white' }}
      onPress={ () => navigation.toggleDrawer() } />
  })
});

const MenuNavigator = createStackNavigator({
    Menu: {
        screen: Menu,
        navigationOptions: ({ navigation }) => ({
            headerLeft: <Icon name='menu' size={24} color={'white'} onPress={() => navigation.toggleDrawer()} />
        })
    },
    DishDetail: { screen: DishDetail }
}, {
    initialRouteName: 'Menu',
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff"
        }
    }
});

const ContactNavigator = createStackNavigator({
    Contact: { screen: Contact }
},
{
    initialRouteName: 'Contact',
    navigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff"
        },
        headerLeft: <Icon name='menu' size={24} color={'white'} onPress={() => navigation.toggleDrawer()} />

})
}
);

const ReservationtNavigator = createStackNavigator({
    Reservation: { screen: Reservation }
},
{
    initialRouteName: 'Reservation',
    navigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff"
        },
        headerLeft: <Icon name='menu' size={24} color={'white'} onPress={() => navigation.toggleDrawer()} />

})
}
);

const AboutNavigator = createStackNavigator({
    About: { screen: About }
},
{
    initialRouteName: 'About',
    navigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff"
        },
        headerLeft: <Icon name='menu' size={24} color={'white'} onPress={() => navigation.toggleDrawer()} />

})
}
);

const HomeNavigator = createStackNavigator({
    Home: { screen: Home }
},
{
    initialRouteName: 'Home',
    navigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff"
        },
        headerLeft: <Icon name='menu' size={24} color={'white'} onPress={() => navigation.toggleDrawer()} />

})
}
);

const MainNavigator = createDrawerNavigator({
    Login: { screen: LoginNavigator,
        navigationOptions: {
            title: 'Login',
            drawerLabel: 'Login',
            drawerIcon: ({ tintColor, focused }) => (
                <Icon
                    name='sign-in'
                    type='font-awesome'
                    size={24}
                    iconStyle={{ color: tintColor }}
                    />
            ),
        }
    },
    Home: {
        screen: HomeNavigator,
        navigationOptions: {
            title: 'Home',
            drawerLabel: 'Home',
            drawerIcon: ({ tintColor }) =>
            <Icon
                name='home'
                type='font-awesome'
                size={24}
                color={tintColor}
                />
        }
    },
    About: {
        screen: AboutNavigator,
        navigationOptions: {
            title: 'About Us',
            drawerLabel: 'About Us',
            drawerIcon: ({ tintColor }) =>
            <Icon
                name='info-circle'
                type='font-awesome'
                size={24}
                color={tintColor}
                />
        }
    },
    Menu: {
        screen: MenuNavigator,
        navigationOptions: {
            title: 'Menu',
            drawerLabel: 'Menu',
            drawerIcon: ({ tintColor }) =>
            <Icon
                name='list'
                type='font-awesome'
                size={24}
                color={tintColor}
                />
        }
    },
    Contact: {
        screen: ContactNavigator,
        navigationOptions: {
            title: 'Contact Us',
            drawerLabel: 'Contact Us',
            drawerIcon: ({ tintColor }) =>
            <Icon
                name='address-card'
                type='font-awesome'
                size={24}
                color={tintColor}
                />
        }
    },
    Reservation: {
        screen: ReservationtNavigator,
        navigationOptions: {
            title: 'Reserve Table',
            drawerLabel: 'Reserve Table',
            drawerIcon: ({ tintColor }) =>
            <Icon
                name='cutlery'
                type='font-awesome'
                size={24}
                color={tintColor}
                />
        }
    }
}, {
    drawerBackgroundColor: 'white',
    contentComponent: CustomDrawerContentComponent
});


function CustomDrawerContentComponent(props) {
    return (
        <ScrollView>
            <SafeAreaView
                forceInset={{ top: 'always', horizontal: 'never' }} />
            <View style={styles.drawerHeader}>
                <View style={{flex: 1}}>
                    <Image
                        source={require('./images/alberto.png')}
                        style={styles.drawerImage}
                        />
                </View>
                <View style={{ flex: 2 }}>
                    <Text style={styles.drawerHeaderText}>
                        Alberto Somayya
                    </Text>
                </View>
            </View>
            <DrawerItems
                { ...props }
                />
        </ScrollView>
    );
}
class Main extends Component {

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();

        this.props.fetchLeaders();
        this.props.fetchPromos();
    }
    render() {
        return (
            <MainNavigator style={{flex: 1}} />
        );
    }
}

const styles = StyleSheet.create({
    drawerHeader: {
        backgroundColor: '#512dab',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
    },
    drawerHeaderText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    drawerImage: {
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        margin: 10,
        width: 60,
        height: 60
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(Main);
