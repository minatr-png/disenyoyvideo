import { Icon, Button } from 'react-native-elements';
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export class Navegacio extends Component {
    render() {
        return (
            <View>
                <View style={styles.container}>
                    <Button
                        icon={
                            <Icon
                                name='grade'
                                size={20}
                                color='black'
                            />
                        }
                        buttonStyle={styles.button}
                        titleStyle={styles.buttonText}
                        title="Events"
                    />
                    <Button
                        icon={
                            <Icon
                                name='home'
                                size={20}
                                color='black'
                            />
                        }
                        buttonStyle={styles.button}
                        titleStyle={styles.buttonText}
                        title="Home"
                    />
                    <Button
                        icon={
                            <Icon
                                name='euro'
                                size={20}
                                color='black'
                            />
                        }
                        buttonStyle={styles.button}
                        titleStyle={styles.buttonText}
                        title="Bets"
                    />
                </View>
                <View style={{ height: 60 }}>
                    {/* Este view sirve para que  el último evento no se corte */}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'column',
        backgroundColor: '#F3C1BC',
        borderColor: 'black',
        borderRightWidth: 1,
        borderRadius: 0,
        width: 132,
    },
    buttonText: {
        color: 'black',
    },
    container: {
        flex: 0.5,
        backgroundColor: '#F3C1BC',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        borderTopColor: 'black',
        borderTopWidth: 2,
    },
});