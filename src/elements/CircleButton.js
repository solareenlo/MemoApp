import React from 'react';
import { Font } from 'expo';
import { StyleSheet, View, Text} from 'react-native';
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
        const { style, color } = this.props;
        let bgColor = '#ff5976';
        let textColor = '#fff';

        if(color === 'white') {
            bgColor = '#fff';
            textColor = '#ff5976';
        }

        return (
            <View style={[styles.circleButton, style, { backgroundColor: bgColor }]}>
                {
                    this.state.fontLoaded ? (
                        <Text style={[styles.circleButtonTitle, { color: textColor }]}>
                            {this.props.children}
                        </Text>
                    ) : null
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    circleButton: {
        position: 'absolute',
        bottom: 32,
        right: 32,
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
    },
    circleButtonTitle: {
        fontFamily: 'FontAwesome',
        fontSize: 24,
        lineHeight: 24,
    },
});

export default CircleButton;
