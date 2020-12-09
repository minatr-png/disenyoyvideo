import { Icon, Button } from 'react-native-elements';
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export class Find extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button
                    icon={
                        <Icon
                            name='search'
                            size={30}
                            color='black'
                        />
                    }
                    buttonStyle={styles.button}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#F3C1BC',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 99,
        width: 50,
        aspectRatio: 1,
    },
    container: {
        position: 'absolute',
        bottom: 10,
        right: 10,
    },
});