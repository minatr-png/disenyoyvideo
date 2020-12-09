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
  ScrollView,
} from 'react-native';
import { Navegacio } from '../../components/navegacio/Navegacio';
import { Bet } from '../../components/bet/Bet';

class MyBets extends Component {
  render() {
    return (
      <View style={styles.contenidor}>
        <ScrollView>
          <Bet></Bet>
          <Bet></Bet>
          <Bet></Bet>
          <Bet></Bet>
          <Bet></Bet>
          <Bet></Bet>
          <Bet></Bet>
        </ScrollView>
        <Navegacio></Navegacio>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  contenidor: {
    flex: 1,
    backgroundColor: '#F7F0E8',
  },
});

export default MyBets;