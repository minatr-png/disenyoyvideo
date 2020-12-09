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
  Image,
  ScrollView,
} from 'react-native';
import { Button } from 'react-native-elements';
import { Navegacio } from '../../components/navegacio/Navegacio';
import { Event } from '../../components/event/Event';

class Events extends Component {
  render() {
    return (
      <View style={styles.contenidor}>
          <ScrollView>
            <View style={{backgroundColor:'#F7F0E8', height: 45, justifyContent: 'center'}}>
              <Button 
                buttonStyle={styles.filter}
                titleStyle={styles.filterText}
                title='Filter'
              />
            </View>
            <Event></Event>
            <Event></Event>
            <Event></Event>
            <Event></Event>
          </ScrollView>
          <Navegacio></Navegacio>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  contenidor: {
    flex: 1,
    flexDirection: 'column',
  },
  filter: {
    borderBottomWidth:2,
    backgroundColor: '#E6D6D3',
    borderBottomColor: '#797979',
    fontSize: 12,
    fontWeight: '600',
    color: '#F7F0E8',
    width: '97%',
    height: '90%',
    alignSelf: 'center',
  },
  filterText: {
    color: '#883F39',
    fontSize: 21,
  },
  sectionText: {
    marginTop: '20%',
  },
  sectionTextText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'Comfortaa',
  },
  tituloText: {
    marginTop: 2,
    color: 'rgb(136, 63, 57)',
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'Comfortaa',
  },
});

export default Events;