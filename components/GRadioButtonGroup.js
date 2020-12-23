import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

import styles from '@styles/styles'

class GRadioButtonGroup extends React.Component {
    constructor(props) {
        super(props),
            this.state = {
                selectedKey: 0
            }

        this.onPress = this.onPress.bind(this);
    }
    onPress(key) {
        console.log('pressed', key);
    }
    render() {
        var radioButtons = this.props.options.map(option => {
            return (
                <TouchableOpacity key={option.key} style={styles.rbCircle} onPress={() => this.onPress(option.key)}>
                    {this.props.checked ? (<View style={styles.checkedCircle} />) : (<View />)}
                </TouchableOpacity>
            )
        })
        return (
            radioButtons
        )
    };
}

export default GRadioButtonGroup;