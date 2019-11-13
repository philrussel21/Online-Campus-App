import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Button,
    Text,
    TextInput,
    StatusBar,
    KeyboardAvoidingView
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-material-ui';
import { TextField } from 'react-native-materialui-textfield';


class Login extends React.Component {

    render() {
        return (
            <View KeyboardAvoidingView behaviour="padding" style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                />
                <TextField 
                    style = {styles.input}
                    label="email"
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <TextInput 
                    style = {styles.input}
                    placeholder="password"
                    secureTextEntry
                    returnKeyType="go"
                    placeholderTextColor='rgba(255,255,255,0.7)'
                    ref = {(input) => this.passwordInput=input}
                />
                {/* <TouchableOpacity
                    style={styles.buttonContainer}
                >
                    <Text style={styles.button}> 
                        Login
                    </Text>
                </TouchableOpacity> */}
                <Button primary raised text="Login" />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(99, 110, 114)',
        padding: 20
    },
    // buttonContainer: {
    //     backgroundColor: 'rgb(45, 52, 54)',
    //     height: 40,
    //     marginTop: 10,
    //     paddingTop: 10
    // },
    // button: {
    //     textAlign: 'center',
    //     color: 'white',
        
    // },
    // input: {
    //     backgroundColor: 'rgba(255,255,255,0.2)',
    //     height: 40,
    //     color: 'white',
    //     paddingHorizontal: 10,
    //     marginBottom: 10
    // }
});

export default (Login);

