import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker';
import { Modal, Text, Picker, Switch, StyleSheet, ScrollView, View } from 'react-native';
import { Button, Card } from 'react-native-elements';

export default class Reservation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guests: 1,
            smoking: false,
            date: '',
            showModal: false
        }
    }

    static navigationOptions = {
        title: 'Reserve Table'
    }

    toggleModal() {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    handleReservation() {
        console.log(JSON.stringify(this.state));
        this.setState({
            guests: 1,
            smoking: false,
            date: ''
        })
    }
    render() {
        return  (
            <ScrollView>
                <Card>
                    <View style={styles.formRow}>

                        <Text style={styles.formLabel}>
                            Number Of Guests
                        </Text>
                        <Picker
                            style={styles.formItem}
                            defaultValue={this.state.guests}
                            onValueChange={(itemValue, itemIndex) => this.setState({ guests: itemValue })}>
                            <Picker.Item label="1" value="1" />
                            <Picker.Item label="2" value="2" />
                            <Picker.Item label="3" value="3" />
                            <Picker.Item label="4" value="4" />
                            <Picker.Item label="5" value="5" />
                            <Picker.Item label="6" value="6" />
                        </Picker>
                    </View>

                    <View style={styles.formRow}>
                        <Text style={styles.formLabel}>
                            Smoking
                        </Text>
                        <Switch
                            style={styles.formItem}
                            value={this.state.smoking}
                            trackColor="#512da8"
                            onValueChange={(value) => this.setState({ smoking: value })}>

                        </Switch>
                    </View>

                    <View style={styles.formRow}>
                        <Text style={styles.formLabel}>
                            Date and Time
                        </Text>
                        <DatePicker
                            style={{ flex: 2, marginRight: 20, }}
                            date={this.state.date}
                            format=''
                            mode='datetime'
                            placeholder="Select Date and Time"
                            minDate={new Date()}
                            confirmBtnText="تأكيد"
                            cancelBtnText="إلغاء"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0,
                                },
                                dateInput: {
                                    marginLeft: 36,
                                }
                            }}
                            onDateChange={(date) => this.setState({ date: date })}
                            />
                    </View>

                    <View style={styles.formRow}>
                        <Button
                            title="Reserve"
                            color="#512da8"
                            onPress={() => this.handleReservation()}
                            accessibilityLabel="Learn More about this one "
                            />
                    </View>

                </Card>


            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    formRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
    },
    formLabel: {
        fontSize: 18,
        flex: 2,
    },
    formItem: {
        flex: 1,
    }
})
