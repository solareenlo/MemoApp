import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';

class LoginScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    ログイン
                </Text>
                <TextInput value="Email Address" style={styles.imput} />
                <TextInput value="Password" style={styles.imput} />
                <TouchableHighlight  onPress={()=>{this.props.navigation.navigate('Home');}} style={styles.button} >
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
