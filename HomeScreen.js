import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-material-ui';
import axios from 'axios'
// import console = require('console');
// import console = require('console');



class HomeScreen extends React.Component {
    // const {navigate} = this.props.navigation;
    constructor() {
        super();
        this.state = {
            complaints: [

            ],
            token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTc2NDY4OTA5LCJqdGkiOiIxOGMwOTE0NzkwZDU0Y2UyOTM3YWRiYjRhZWY1ZjUyYiIsInVzZXJfaWQiOiJuZWVyYWo0In0.j9uwSGOLCYYLzdk3HPSEaydDs1kWzknq1fSbqsPWfdc'
        }
    }

    fetchComplaints() {
        const headers = {
            'Authorization': 'Bearer ' + this.state.token
        }
        axios({
            method: 'GET',
            url: 'https://201751025.pythonanywhere.com/complaint/',
            headers: headers,
            }).then((response) => {
            console.log('resp', response.data)
            this.setState({
                complaints: response.data
            })
            }).catch((error) => {
                console.log('error')
            });        
    }

    componentDidMount() {
        this.fetchComplaints();
    }

    addComplaint() {
        console.log(this.state)
        let newComplaints = this.state.complaints
        const newComplaint = {
            'id': newComplaints.length + 1,
            'title': 'New Complaint',
            'author': '',
            'content': ''
        }
        newComplaints = [
            ...newComplaints,
            newComplaint
        ]
        this.setState({
            complaints: newComplaints
        })

        this.props.navigation.navigate('editCView', newComplaint)
    }

    render() {
        // console.log(this.state)
        complaints = this.state.complaints.map(
            c => (
                <Button
                    onPress={() => this.props.navigation.navigate('editCView',
                        {
                            'id': c.id,
                            'title': c.title,
                            'content': c.description
                        }
                    )}
                    text={c.title}
                    style={styles.button}
                    key={c.id}
                />
            )
        )
        return (

            <View style={styles.container}>
                {complaints}
                <View
                    style={styles.circleButton}
                >
                    <Button style={styles.createButton} raised primary text="+" onPress={() => this.props.navigation.navigate('Create_complaint')} title="Create_complaint" />
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    button: {
        width: 200,
        height: 70,
        backgroundColor: 'blue',
        marginTop: 150,
        marginLeft: 100,
    },
    circleButton: {
        padding: 5,
        height: 50,
        width: 50,
        borderRadius: 400,
        right: 60,
        bottom: 80,
        position: "absolute",
    },
    createButton: {
        borderRadius:   1000,
    }
});

export default HomeScreen;
