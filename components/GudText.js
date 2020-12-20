import React from 'react';
import { Text } from 'react-native';
import styles from '@styles/styles';

const GudText = (props) => {
    return (
        <Text style={[styles.gudText, props.style]}>{props.text}</Text>
    );
}

export default GudText;