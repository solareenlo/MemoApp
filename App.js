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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
    },
    appbarTitle: {
        color: '#fff',
        fontSize: 24,
    },
});
