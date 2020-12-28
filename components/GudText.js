import React from 'react';
import {Text} from 'react-native';
import styles from '@styles/styles';

const GudText = (props) => {
  const originalText = props.text.trim();
  const regularText = originalText.slice(0, originalText.lastIndexOf(' '));
  const accent = originalText.slice(originalText.lastIndexOf(' ') + 1);
  return (
    <>
      {props.accent ? (
        <Text style={[styles.gudText, props.style]}>
          {regularText} <Text style={styles.gudButtonText}>{accent}</Text>
        </Text>
      ) : (
        <Text style={[styles.gudText, props.style]}>{originalText}</Text>
      )}
    </>
  );
};

export default GudText;
