import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.appbar}>
            <View>
                <Text style={styles.appbarTitle}>MEMODASU</Text>
            </View>
        </View>

        <View style={styles.memoList}>
            <View style={styles.memoListItem}>
                <Text style={styles.memoTitle}>アプリのアイディア</Text>
                <Text style={styles.memoDate}>2018.10.10</Text>
            </View>

            <View style={styles.memoListItem}>
                <Text style={styles.memoTitle}>アプリのアイディア</Text>
                <Text style={styles.memoDate}>2018.10.10</Text>
            </View>

            <View style={styles.memoListItem}>
                <Text style={styles.memoTitle}>アプリのアイディア</Text>
                <Text style={styles.memoDate}>2018.10.10</Text>
            </View>

            <View style={styles.memoListItem}>
                <Text style={styles.memoTitle}>アプリのアイディア</Text>
                <Text style={styles.memoDate}>2018.10.10</Text>
            </View>

            <View style={styles.memoListItem}>
                <Text style={styles.memoTitle}>アプリのアイディア</Text>
                <Text style={styles.memoDate}>2018.10.10</Text>
            </View>
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
    memoList: {
        width: '100%',
        flex: 1,
        //backgroundColor: '#eee',
    },
    memoListItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#aaa',
        backgroundColor: '#fff',
    },
    memoTitle: {
        fontSize: 18,
        marginBottom: 4,
    },
    memoDate: {
        fontSize: 12,
        color: '#a2a2a2',
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
});
