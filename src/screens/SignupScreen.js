import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';

class SignupScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    メンバー登録
                </Text>
                <TextInput value="Email Address" style={styles.imput} />
                <TextInput value="Password" style={styles.imput} />
                <TouchableHighlight  onPress={()=>{}} style={styles.button} underlayColor="#C70F66" >
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
