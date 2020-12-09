/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
} from 'react-native';
import { Button, Icon, CheckBox } from 'react-native-elements';
import { Navegacio } from '../../components/navegacio/Navegacio';
import { Teams } from '../../components/teams/Teams';

class Bet extends Component {
    render() {
        return (
            <View style={styles.contenidor}>
                <Teams></Teams>
                <View style={styles.information}>
                    <View style={styles.data}>
                        <View style={styles.sections}>
                            <Text style={styles.titles}>Market</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder='    1.5'
                                placeholderTextColor='white'
                            />
                        </View>
                        <View style={styles.checkboxes}>
                            <CheckBox
                                checkedIcon='dot-circle-o'
                                checked={true}
                            />
                            <Text style={styles.overUnder}>Over</Text>
                            <CheckBox
                                checkedIcon='circle-o'
                                checked={true}
                            />
                            <Text style={styles.overUnder}>Under</Text>
                        </View>
                        <View style={styles.sections}>
                            <Text style={styles.titles}>Cantidad</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder='  0€'
                                placeholderTextColor='white'
                                secureTextEntry={true}
                            />
                        </View>
                    </View>
                    <Button
                        buttonStyle={styles.button}
                        icon={
                            <Icon
                                name='forward'
                                size={25}
                                color='white'
                            />
                        }
                    />
                </View>
                <Navegacio></Navegacio>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#F3C1BC',
        borderRadius: 7,
        borderColor: '#797979',
        borderWidth: 1,
        width: '13%',
        aspectRatio: 1,
        alignSelf: 'center',
    },
    checkboxes: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '3.5%',
    },
    contenidor: {
        flex: 1,
        flexDirection: 'column',
    },
    data:{
        height:'58%',
    },
    information: {
        flex: 5,
        justifyContent: 'center',
        backgroundColor: '#F7F0E8',
    },
    overUnder: {
        alignSelf: 'center',
        color: '#883F39',
        fontSize: 25
    },
    sections: {
        width: '70%',
        height: '30%',
        alignSelf: 'center',
    },
    titles: {
        color: '#883F39',
        textAlign: 'left',
        fontSize: 30,
        fontFamily: 'Comfortaa',
        marginBottom: '3%',
    },
    textInput: {
        width: '100%',
        backgroundColor: '#F3C1BC',
        borderColor: '#797979',
        borderWidth: 1,
        borderRadius: 7,
        color: 'white',
        alignSelf: 'center',
    },
});

export default Bet;