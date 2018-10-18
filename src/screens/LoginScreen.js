import React from 'react';
import Expo from 'expo';
import { StyleSheet, View, Text, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import { StackActions, NavigationActions } from 'react-navigation';
import Loading from '../elements/Loading';

class LoginScreen extends React.Component {
    state = {
        email: '',
        password: '',
    }

    async componentDidMount() {
        const email = await Expo.SecureStore.getItemAsync('email');
        const password = await Expo.SecureStore.getItemAsync('password');
        // firebase.auth().signInWithEmailAndPassword(email, password)
        //     .then(() => {
        //         this.navigateToHome();
        //     });
    }

    navigateToHome() {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Home' }),
            ],
        });
        this.props.navigation.dispatch(resetAction);
    }

    handleSubmit() {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                Expo.SecureStore.setItemAsync('email', this.state.email);
                Expo.SecureStore.setItemAsync('password', this.state.password);
                this.navigateToHome();
            })
            .catch(() => {
            });
    }

    handlePress() {
        this.props.navigation.navigate('Signup');
    }

    render() {
        return (
            <View style={styles.container}>
                <Loading text="ログイン中" ifLoading={true} />
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
                    underlineColorAndroid="transparent"
                />
                <TextInput
                    value={this.state.password}
                    onChangeText={(text) => { this.setState({password: text}); }}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Password"
                    secureTextEntry={true}
                    style={styles.imput}
                    underlineColorAndroid="transparent"
                />
                <TouchableHighlight
                    onPress={this.handleSubmit.bind(this)}
                    style={styles.button}
                    underlayColor="#C70F66"
                >
                    <Text style={styles.buttonTitle}>ログインする</Text>
                </TouchableHighlight>
                <TouchableOpacity
                    onPress={this.handlePress.bind(this)}
                    style={styles.signup}
                >
                    <Text style={styles.signupText}>メンバー登録する</Text>
                </TouchableOpacity>
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
    signup: {
        marginTop: 16,
        alignSelf: 'center',
    },
    signupText: {
        fontSize: 16,
    }
});

export default LoginScreen;
