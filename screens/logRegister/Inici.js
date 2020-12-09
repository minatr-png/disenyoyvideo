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
import { Button } from 'react-native-elements';

class Inici extends Component {
  render() {
    return (
      <View style={styles.contenidor}>
          <Image 
            style={{ transform: [{ scale: 0.5 }], alignSelf:'center' }}
            source={require('../../assets/Logo.png')}
          />
          <View>
            <Text style={styles.text}>Bet with the easiest and most secure app</Text>
            <Text style={styles.text}>With acces to every high level football match</Text>
          </View>
          <View>
            <Button  
              buttonStyle={styles.button}
              title="Log in"
            />
            <Button  
              buttonStyle={styles.button}
              title="Sign up"
            />
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
    justifyContent: 'space-around'
  },
  text: {
    textAlign: 'center',
    color: '#797979',
  },
  button: {
    backgroundColor: '#F3C1BC',
    borderRadius: 7,
    borderColor: '#797979',
    borderWidth: 1,
    marginBottom: 20,
    width: '60%',
    alignSelf: 'center'
  },
});

export default Inici;