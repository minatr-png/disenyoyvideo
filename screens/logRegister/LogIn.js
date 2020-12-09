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
  TextInput,
} from 'react-native';
import { Icon, Button } from 'react-native-elements';

class LogIn extends Component {
  render() {
    return (
      <View style={styles.contenidor}>
          <Image 
            style={styles.logo}
            source={require('../../assets/Logo.png')}
          />
          <View style={styles.buttonsAndLink}>
            <TextInput
              style={styles.textInput}
              placeholder='  Email'
              placeholderTextColor='white'
            />
            <TextInput
              style={styles.textInput}
              placeholder='  Password'
              placeholderTextColor='white'
              secureTextEntry={true}
            />
            <Text style={styles.link}>Forgot password</Text>
          </View>
          <Button  
            buttonStyle={styles.button}
            icon={
              <Icon 
                  name='forward'
                  size={20}
                  color='white'
              />
            }
          />
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
    width: '12%',
    alignSelf: 'center',
    aspectRatio: 1,
  },
  buttonsAndLink: {
    width:'70%',
    alignSelf:'center',
    marginTop: '6%',
    marginBottom: '8%',
  },
  contenidor: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F7F0E8',
    justifyContent: 'center'
  },
  link: {
    color: '#883F39',
    textDecorationLine: 'underline'
  },
  logo: {
    transform: [{ scale: 0.55 }],
    alignSelf:'center'
  },
  text: {
    textAlign: 'center',
    color: '#797979',
  },
  textInput: {
    width: '100%',
    backgroundColor: '#F3C1BC',
    borderColor: '#797979',
    borderWidth: 1,
    borderRadius: 7,
    color: 'white',
    alignSelf: 'center',
    marginBottom: 10
  },
});

export default LogIn;