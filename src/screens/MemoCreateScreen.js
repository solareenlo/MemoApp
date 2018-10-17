import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import CircleButton from '../elements/CircleButton';
import firebase from 'firebase';

class MemoCreateScreen extends React.Component {
    state = {
        body: '',
    }
    handlePress() {
        const db = firebase.firestore();
        const { currentUser } = firebase.auth();
        db.settings({ timestampsInSnapshots: true });
        db.collection(`users/${currentUser.uid}/memos`).add({
            body: this.state.body,
            createdOn: new Date(),
        })
            .then(() => {
                this.props.navigation.goBack();
            })
            .catch(() => {
            });
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.memoCreateInput}
                    multiline
                    value={this.state.body}
                    onChangeText={(text) => { this.setState({ body: text}); }}
                />
                <CircleButton onPress={this.handlePress.bind(this)}>
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
    memoCreateInput: {
        backgroundColor: '#fff',
        flex: 1,
        paddingTop: 32,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16,
        fontSize: 16,
    },
});

export default MemoCreateScreen;
