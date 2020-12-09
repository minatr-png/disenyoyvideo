import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
  } from 'react-native';
import { Button, Icon } from 'react-native-elements';

export class Bet extends Component {
    render() {
        return (
            <View style={styles.bet}>
                <View width='80%'>
                    <View style={styles.shields}>
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
                    <View style={styles.info}>
                        <Text style={styles.price}>20€</Text>
                        <View>
                            <Text style={styles.moreInfo}>3.5</Text>
                            <Text style={styles.moreInfo}>Over</Text>
                        </View>
                    </View>
                </View>
                <View style={{ width: '20%' }}>
                    <Button
                        icon={
                            <Icon
                                name='delete'
                                size={30}
                                color='white'
                            />
                        }
                        buttonStyle={styles.button}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#E6D6D3',
        width: '100%',
        height: '100%',
        marginRight: 40,
        borderColor: '#797979',
        borderLeftWidth: 1,
        borderRadius: 10,
    },
    bet: {
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#E6D6D3',
        height: 125,
        width: '80%',
        alignSelf: 'center',
        marginTop: 13,
        marginBottom: 7,
        flexDirection: 'row',
    },
    info: {
        height: '60%',
        width: '40%',
        flexDirection: 'row',
    },
    moreInfo: {
        color: '#883F39',
        fontSize: 20,
        fontFamily: 'Comfortaa',
        marginLeft: '40%',
    },
    price: {
        color: '#883F39',
        textAlign: 'center',
        fontSize: 40,
        fontFamily: 'Comfortaa',
        width: '80%',
        marginLeft: '25%',
        marginRight: '10%',
    },
    shields: {
        flexDirection: 'row',
        height: '40%',
        marginTop: '5%',
        marginLeft: '5%',
    },
    shield: {
        width: 35,
        height: 35,
    },
    vs: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15,
        marginTop: '2%',
        fontFamily: 'Comfortaa',
        marginLeft: 10,
        marginRight: 10,
    },
});