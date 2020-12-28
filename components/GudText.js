import React from 'react';
import {Text} from 'react-native';
import styles from '@styles/styles';

const GudText = (props) => {
  const originalText = props.text.slice(0, props.text.trim().lastIndexOf(' ')).trim();
  const accent = props.text.slice(props.text.trim().lastIndexOf(' ') + 1).trim();
  return (
    <>
      {props.accent ? (
        <Text style={[styles.gudText, props.style]}>
          {originalText} <Text style={styles.gudButtonText}>{accent}</Text>
        </Text>
      ) : (
        <Text style={[styles.gudText, props.style]}>{props.text.trim()}</Text>
      )}
    </>
  );
};

export default GudText;
