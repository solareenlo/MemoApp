import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

class MemoListScreen extends React.Component {
    componentWillMount() {
        const db = firebase.firestore();
        db.settings({ timestampsInSnapshots: true });
        const { currentUser } = firebase.auth();
        db.collection(`users/${currentUser.uid}/memos`)
            .get()
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    console.log(doc);
                })
            })
            .catch((error) => {
                console.log(error);
            });
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
