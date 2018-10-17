import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';
import firebase from 'firebase';
import { StackActions, NavigationActions } from 'react-navigation';

class SignupScreen extends React.Component {
    state = {
        email: '',
        password: '',
    }
    handleSubmit() {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((user) => {
                const resetAction = StackActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({ routeName: 'Home' }),
                    ],
                });
                this.props.navigation.dispatch(resetAction);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    メンバー登録
                </Text>
                <TextInput
                    value={this.state.email}
                    onChangeText={(text) => {this.setState({email: text});}}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Email Address"
                    style={styles.imput}
                />
                <TextInput
                    value={this.state.password}
                    onChangeText={(text) => {this.setState({password: text});}}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Password"
                    secureTextEntry={true}
                    style={styles.imput}
                />
                <TouchableHighlight  onPress={this.handleSubmit.bind(this)} style={styles.button} underlayColor="#C70F66" >
                    <Text style={styles.buttonTitle}>送信する</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: 24,
        backgroundColor: '#fff',
    },
    title:{
        fontSize: 32,
        alignSelf: 'center',
        marginBottom: 24,
    },
    imput: {
        backgroundColor: '#ddd',
        height: 48,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#bbb',
        padding: 8,
    },
    button: {
        backgroundColor: '#ff5976',
        height: 36,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
        alignSelf: 'center',
    },
    buttonTitle: {
        color: '#fff',
        fontSize: 18,
    },
});

export default SignupScreen;
