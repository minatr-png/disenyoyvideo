import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

export class Markets extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <View style={styles.box}></View>
                    <View style={styles.box}>
                        <Text style={{ textAlign: 'center' }}>Over</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={{ textAlign: 'center' }}>Under</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.box}>
                        <Text style={{ textAlign: 'center' }}>1.5</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={{ textAlign: 'center' }}>1.60</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={{ textAlign: 'center' }}>2.85</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.box}>
                        <Text style={{ textAlign: 'center' }}>1.5</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={{ textAlign: 'center' }}>2.5</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={{ textAlign: 'center' }}>3.5</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.box}>
                        <Text style={{ textAlign: 'center' }}>1.5</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={{ textAlign: 'center' }}>2.5</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={{ textAlign: 'center' }}>3.5</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    box: {
        width: '34%',
        height: '100%',
        justifyContent: 'center',
        borderLeftWidth: 1,
        borderColor: '#797979',
    },
    container: {
        backgroundColor: '#F3C1BC',
        borderWidth: 1,
        borderColor: '#797979',
        alignSelf: 'center'
    },
    row: {
        width: '100%',
        height: '25%',
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: '#797979',
    },
});