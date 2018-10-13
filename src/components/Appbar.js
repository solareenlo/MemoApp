import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

class Appbar extends React.Component {
    render() {
        return (
            <View style={styles.appbar}>
                <View>
                    <Text style={styles.appbarTitle}>MEMODASU</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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

export default Appbar;
