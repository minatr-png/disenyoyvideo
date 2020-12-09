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
} from 'react-native';
import { Button } from 'react-native-elements';
import { Navegacio } from '../../components/navegacio/Navegacio';
import { Markets } from '../../components/markets/Markets';
import { Teams } from '../../components/teams/Teams';

class Details extends Component {
  render() {
    return (
      <View style={styles.contenidor}>
        <Teams></Teams>
        <View style={styles.information}>
          <Text style={styles.date}>Date: 13/2/2020 17:00</Text>
          <View style={styles.market}>
            <Text style={styles.marketTitle}>Market</Text>
            <Markets></Markets>
          </View>
          <Button
            buttonStyle={styles.button}
            titleStyle={styles.btnText}
            title="Bet"
          />
        </View>
        <Navegacio></Navegacio>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  btnText: {
    fontSize: 27,
    fontFamily: 'Comfortaa',
  },
  button: {
    backgroundColor: '#F3C1BC',
    borderRadius: 7,
    borderColor: '#797979',
    borderWidth: 1,
    width: '22%',
    alignSelf: 'center',
    marginTop: '35%',
  },
  contenidor: {
    flex: 1,
    flexDirection: 'column',
  },
  date: {
    color: 'rgb(136, 63, 57)',
    textAlign: 'center',
    fontSize: 27,
    fontFamily: 'Comfortaa',
    marginBottom: '10%',
  },
  information: {
    flex: 5,
    justifyContent: 'center',
    backgroundColor: '#F7F0E8',
  },
  market: {
    width: '70%',
    height: '30%',
    alignSelf: 'center',
  },
  marketTitle: {
    color: 'rgb(136, 63, 57)',
    textAlign: 'left',
    fontSize: 30,
    fontFamily: 'Comfortaa',
    marginBottom: '3%',
  },
});

export default Details;