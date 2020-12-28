import React from 'react';
import {Text} from 'react-native';
import styles from '@styles/styles';

const GudText = (props) => {
  const originalText = props.text.trim().slice(0, props.text.lastIndexOf(' '));
  const accent = props.text.slice(props.text.lastIndexOf(' ') + 1);
  return (
    <>
      {props.accent ? (
        <Text style={[styles.gudText, props.style]}>
          {originalText} <Text style={styles.gudButtonText}>{accent}</Text>
        </Text>
      ) : (
        <Text style={[styles.gudText, props.style]}>{props.text}</Text>
      )}
    </>
  );
};

export default GudText;
