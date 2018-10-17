import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import CircleButton from '../elements/CircleButton';
import firebase from 'firebase';

class MemoEditScreen extends React.Component {
    state = {
        memo: {},
    }

    componentWillMount() {
        const { params } = this.props.navigation.state;
        this.setState({ memo: params.memo });
    }

    handlePress() {
        console.log('pressed');
        const { currentUser } = firebase.auth();
        const db = firebase.firestore();
        db.collection(`users/${currentUser.uid}/memos`).doc(this.state.memo.key)
            .update({
                body: this.state.memo.body,
            })
            .then(() => {
                console.log('success!');
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.memoEditInput}
                    multiline
                    value={this.state.memo.body}
                    onChangeText={(text) => { this.setState({ memo: {body: text } }); }}
                />
                <CircleButton onPress={()=>{this.handlePress.bind(this);}}>
                    {'\uf00c'}
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
    memoEditInput: {
        backgroundColor: '#fff',
        flex: 1,
        paddingTop: 32,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16,
        fontSize: 16,
    },
});

export default MemoEditScreen;
