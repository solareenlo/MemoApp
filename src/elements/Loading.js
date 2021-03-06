import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';

const Loading = (props) => {
    const { text, ifLoading } = props;

    if(!ifLoading) {
        return null;
    }

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" />
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        zIndex: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
    },
    text: {
        fontSize: 24,
        margin: 40,
    },
});

export default Loading;
