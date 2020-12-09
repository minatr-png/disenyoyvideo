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
} from 'react-native';
import { Line } from '../../components/line/Line';

class Help extends Component {
  render() {
    return (
      <View style={styles.contenidor}>
        <Text style={styles.tituloText}>Contact any of this</Text>
        <Text style={styles.tituloText}>associations for help</Text>
        <View style={styles.group}>
          <Image source={require('../../assets/associations/Larcama.png')} style={styles.image}/>
          <Text style={styles.information}>Tlf: 655 347 692</Text>
          <Text style={styles.information}>E-mail: toledo@larcama.com</Text>
          <Text style={styles.information}>Web: http://larcama.com/</Text>
        </View>
        <Line></Line>
        <View style={styles.group}>
          <Image source={require('../../assets/associations/Aserjer.png')} style={styles.image}/>
          <Text style={styles.information}>Tlf: 954 908 300</Text>
          <Text style={styles.information}>E-mail: presidencia@asejer.es</Text>
          <Text style={styles.information}>Web: http://www.asejer.es/</Text>
        </View>
        <Line></Line>
        <View style={styles.group}>
          <Image source={require('../../assets/associations/Acojer.png')} style={styles.image}/>
          <Text style={styles.information}>Tlf: 957 401 449</Text>
          <Text style={styles.information}>E-mail: acojer@andaluciajunta.es</Text>
          <Text style={styles.information}>Web: http://www.acojer.com/</Text>
        </View>
        <Line></Line>
        <View style={styles.group}>
          <Image source={require('../../assets/associations/Fejar.png')} style={styles.image}/>
          <Text style={styles.information}>Tlf: 957 401 449</Text>
          <Text style={styles.information}>E-mail: acojer@andaluciajunta.es</Text>
          <Text style={styles.information}>Web: https://fejar.org/</Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  contenidor: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F7F0E8',
    justifyContent: 'center',
  },
  group: {
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 15,
  },
  image: {
    marginBottom: 10,
  },
  information: {
    textAlign: 'center',
  },
  tituloText: {
    marginTop: 2,
    color: 'rgb(136, 63, 57)',
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'Comfortaa',
    fontSize: 30,
  },
});

export default Help;