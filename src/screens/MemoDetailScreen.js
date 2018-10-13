import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

import CircleButton from '../elements/CircleButton';

class MemoDetailScreen extends React.Component {
    render() {
        return (
            <View>
                <View style={styles.memoHeader}>
                    <Text style={styles.memoHeaderTitle}>アプリのアイディア</Text>
                    <Text style={styles.memoHeaderDate}>2018.10.10</Text>
                </View>

                <View style={styles.memoContent}>
                    <Text>
                        これはスマホアプリのアイディアです。
                    </Text>
                </View>

                <CircleButton>+</CircleButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    memoHeader: {
    },
    memoHeaderTitle: {
    },
    memoHeaderDate: {
    },
});

export default MemoDetailScreen;
