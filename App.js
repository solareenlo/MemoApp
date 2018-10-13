import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MemoList from './src/components/MemoList';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.appbar}>
            <View>
                <Text style={styles.appbarTitle}>MEMODASU</Text>
            </View>
        </View>

        <MemoList />

        <View style={styles.memoAddButton}>
            <Text style={styles.memoAddButtonTitle}>+</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 90,
        backgroundColor: '#FFFDF6',
    },
    appbar: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 90,
        paddingTop: 30,
        backgroundColor: '#D8D8D8',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.9,
        shadowRadius: 3,
        zIndex: 10,
    },
    appbarTitle: {
        color: '#fff',
        fontSize: 24,
    },
    memoAddButton: {
        position: 'absolute',
        bottom: 32,
        right: 32,
        width: 48,
        height: 48,
        backgroundColor: '#ff5976',
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.9,
        shadowRadius: 3,
        zIndex: 10,
    },
    memoAddButtonTitle: {
        fontSize: 36,
        lineHeight: 36,
        color: '#fff',
    },
});
