import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

//this.props.navigation.navigate('MemoEdit');

class MemoListScreen extends React.Component {
    handlePress() {
        const db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
        });
        const uid = 'ここにFirebaseのユーザーのユーザーIDを入力';
        db.collection(`users/${uid}/memos`).add({
            body: 'test_memo',
            createdOn: '2018.10.10',
        })
            .then((docRef) => {
                console.log(docRef.id);
            })
            .catch((error) => {
                console.log(error);
            });
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
