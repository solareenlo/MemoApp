import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

class MemoListScreen extends React.Component {
    state = {
        memoList: [],
    }
    componentWillMount() {
        const db = firebase.firestore();
        db.settings({ timestampsInSnapshots: true });
        const { currentUser } = firebase.auth();
        db.collection(`users/${currentUser.uid}/memos`)
            .onSnapshot((snapshot) => {
                const tempList = [];
                snapshot.forEach((doc) => {
                    tempList.push({ ...doc.data(), key: doc.id  });
                });
                this.setState({ memoList: tempList })
            });
            // .get()
            // .then((snapshot) => {
            //     const tempList = [];
            //     snapshot.forEach((doc) => {
            //         tempList.push({ ...doc.data(), key: doc.id  });
            //     });
            //     this.setState({ memoList: tempList })
            // })
            // .catch((error) => {
            //     console.log(error);
            // });
    }
    handlePress() {
        this.props.navigation.navigate('MemoCreate');
    }
    render() {
        return (
            <View style={styles.container}>
                <MemoList memoList={this.state.memoList} navigation={this.props.navigation}/>
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
