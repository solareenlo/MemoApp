import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

class MemoListScreen extends React.Component {
    componentWillMount() {
        const firestore = firebase.firestore();
        firestore.settings({ timestampsInSnapshots: true });
        const { currentUser } = firebase.auth();
        firestore.collection(`users/${currentUser.uid}/memos`);
    }
    handlePress() {
        this.props.navigation.navigate('MemoCreate');
    }
    render() {
        return (
            <View style={styles.container}>
                <MemoList navigation={this.props.navigation}/>
                <CircleButton onPress={this.handlePress.bind(this)}>
                    {'\uf067'}
                </CircleButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFFDF6',
    },
});

export default MemoListScreen;
