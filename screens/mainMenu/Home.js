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
import { Navegacio } from '../../components/navegacio/Navegacio';
import { Event } from '../../components/event/Event';

class Home extends Component {
  render() {
    return (
      <View style={styles.contenidor}>
          <View style={styles.titulo}>
              <Text style={styles.tituloText}>TAKE A LOOK</Text>
              <Text style={styles.tituloText}>TO THIS EVENT</Text>
          </View>
          <Event></Event>
          <View style={styles.titulo}>
            <Text style={styles.tituloText}>DO YOU FEEL IN</Text>
            <Text style={styles.tituloText}>NEED OF HELP?</Text>
          </View>
          <View style={styles.seccion}>
            <View style={styles.sectionText}>
              <Text style={styles.sectionTextText}>CLICK TO FIND</Text>
              <Text style={styles.sectionTextText}>SOME ASSOCIATIONS</Text>
              <Text style={styles.sectionTextText}>THAT WILL HELP YOU</Text>
            </View>
          </View>  
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
  titulo: {
    flex:0.6,
    borderBottomWidth:2,
    backgroundColor: '#F7F0E8',
    borderBottomColor: '#797979',
    fontSize: 12,
    fontWeight: '600',
    height: 90,
  },
  seccion: {
    flex:2,
    borderBottomWidth:2,
    backgroundColor: '#E6D6D3',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
    height: 240,
  },  
  tituloText: {
    marginTop: 2,
    color: 'rgb(136, 63, 57)',
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'Comfortaa',
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
});

export default Home;