import React from 'react';
import { Font } from 'expo';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import fontAwesome from '../../assets/fonts/fa-solid-900.ttf';

class CircleButton extends React.Component {
    state = {
        fontLoaded: false,
    }
    async componentWillMount() {
        await Font.loadAsync({
        FontAwesome: fontAwesome,
        });
        this.setState({ fontLoaded: true });
    }

    render() {
        const { style, color, onPress } = this.props;
        let bgColor = '#ff5976';
        let textColor = '#fff';

        if(color === 'white') {
            bgColor = '#fff';
            textColor = '#ff5976';
        }

        return (
            <TouchableHighlight style={[styles.container, style]} onPress={onPress} underlayColor="transparent">
                <View style={[styles.circleButton, { backgroundColor: bgColor }]}>
                    {
                        this.state.fontLoaded ? (
                            <Text style={[styles.circleButtonTitle, { color: textColor }]}>
                                {this.props.children}
                            </Text>
                        ) : null
                    }
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 48,
        height: 48,
        position: 'absolute',
        bottom: 32,
        right: 32,
    },
    circleButton: {
        width: 48,
        height: 48,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.9,
        shadowRadius: 3,
        zIndex: 10,
        elevation: 4,
        margin: 1,
    },
    circleButtonTitle: {
        fontFamily: 'FontAwesome',
        fontSize: 24,
        lineHeight: 24,
    },
});

export default CircleButton;
