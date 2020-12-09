import React, { Component } from 'react';
import { View } from 'react-native';

export class Line extends Component {
    render() {
        return (
            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    width: '80%',
                    alignSelf: 'center',
                    borderBottomColor: '#797979',
                }}
            />
        );
    }
}