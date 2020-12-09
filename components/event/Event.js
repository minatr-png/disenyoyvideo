import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

export class Event extends Component {
    render() {
        return (
            <View style={styles.seccion}>
                <Text style={styles.sectionMatch}>COPA DEL REY</Text>
                <View style={styles.container}>
                    <Image
                        style={styles.shield}
                        source={require('../../assets/shields/Valencia.png')}
                    />
                    <Text style={styles.vs}>vs</Text>
                    <Image
                        style={styles.shield}
                        source={require('../../assets/shields/Madrid.png')}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: '100%',
        width: '100%',
    },
    seccion: {
        flex: 2,
        borderBottomWidth: 2,
        backgroundColor: '#E6D6D3',
        height: 240,
    },
    sectionMatch: {
        color: 'white',
        textAlign: 'center',
        fontSize: 32,
        fontFamily: 'Comfortaa',
        marginTop: '5%',
    },
    shield: {
        height: '60%',
        width: '37%',
        marginTop: '5%',
        marginLeft: '4%',
        marginRight: '4%',
    },
    vs: {
        color: 'white',
        textAlign: 'center',
        fontSize: 40,
        marginTop: '14%',
        fontFamily: 'Comfortaa',
    },
});