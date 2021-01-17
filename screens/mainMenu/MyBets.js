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
  FlatList
} from 'react-native';
import { Navegacio } from '../../components/navegacio/Navegacio';
import { Bet } from '../../components/bet/Bet';

const DATA = [
  {
    id: '1',
  },
  {
    id: '2',
  },
  {
    id: '3',
  },
  {
    id: '4',
  },
  {
    id: '5',
  },
  {
    id: '6',
  },
  {
    id: '7',
  },
];

class MyBets extends Component {
  render() {
    const renderItem = () => (
      <Bet></Bet>
    );
    return (
      <View style={styles.contenidor}>
        <ScrollView>
          <FlatList
            data={DATA}
            keyExtractor={item => item.id}
            renderItem={renderItem}
          />
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