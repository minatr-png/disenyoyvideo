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
import { Bet } from '../../components/bet/Bet';
import { Find } from '../../components/find/Find';

class Admin extends Component {
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
        <Find></Find>
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

export default Admin;