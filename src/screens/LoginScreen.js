import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';
import firebase from 'firebase';

class LoginScreen extends React.Component {
    state = {
        email: '',
        password: '',
    }
    handleSubmit() {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((user) => {
                console.log('succeced', user);
                this.props.navigation.navigate('Home', {currentUser: user})
            })
            .catch((error) => {
                console.log('error', error);
            });
        // Log in!!
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    ログイン
                </Text>
                <TextInput
                    value={this.state.email}
                    onChangeText={(text) => { this.setState({email: text}); }}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Email Address"
                    style={styles.imput}
                />
                <TextInput
                    value={this.state.password}
                    onChangeText={(text) => { this.setState({password: text}); }}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Password"
                    secureTextEntry={true}
                    style={styles.imput}
                />
                <TouchableHighlight  onPress={this.handleSubmit.bind(this)} style={styles.button} >
                    <Text style={styles.buttonTitle}>ログインする</Text>
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

export default LoginScreen;
