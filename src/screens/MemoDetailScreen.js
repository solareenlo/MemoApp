import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

import CircleButton from '../elements/CircleButton';

class MemoDetailScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.memoHeader}>
                    <View>
                        <Text style={styles.memoHeaderTitle}>アプリのアイディア</Text>
                        <Text style={styles.memoHeaderDate}>2018.10.10</Text>
                    </View>
                </View>

                <View style={styles.memoContent}>
                    <Text>
                        これはスマホアプリのアイディアです。
                    </Text>
                </View>

                <CircleButton color='white' style={styles.editButton}>
                    {'\uf303'}
                </CircleButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    memoHeader: {
        height: 100,
        backgroundColor: '#948484',
        justifyContent: 'center',
        padding: 10,
    },
    memoHeaderTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 4,
    },
    memoHeaderDate: {
        fontSize: 12,
        color: '#fff',
    },
    memoContent: {
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        backgroundColor: '#fff',
        flex: 1,
    },
    editButton: {
        top: 77,
    },
});

export default MemoDetailScreen;
