import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';

export class Teams extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ alignSelf: 'center', flexDirection: 'row' }}>
                    <Image
                        style={styles.shield}
                        source={require('../../assets/shields/Beti.png')}
                    />
                    <Text style={styles.vs}>vs</Text>
                    <Image
                        style={styles.shield}
                        source={require('../../assets/shields/Valencia.png')}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderBottomWidth: 2,
        backgroundColor: '#E6D6D3',
        borderBottomColor: '#797979',
        justifyContent: 'center',
    },
    shield: {
        aspectRatio: 1,
        width: '25%',
    },
    vs: {
        color: 'white',
        textAlign: 'center',
        fontSize: 35,
        marginTop: '8%',
        marginLeft: '9%',
        marginRight: '9%',
        fontFamily: 'Comfortaa',
    },
});