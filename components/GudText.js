import React from 'react';
import {Text} from 'react-native';
import styles from '@styles/styles';
import EStyleSheet from 'react-native-extended-stylesheet';

class GudText extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const originalText = this.props.text.trim();
    if (this.props.slice) {
      var start = this.props.slice[0];
      var end = this.props.slice[1];
      const accent = originalText.slice(start, end);
      const beforeString = originalText.slice(0, start);
      const afterString = originalText.slice(end);

      return (
        <>
          <Text style={[styles.gudText, this.props.style]}>
            {beforeString}
            <Text style={{color: EStyleSheet.value('$gudGreenDark')}}>
              {accent}
            </Text>
            {afterString}
          </Text>
        </>
      );
    } else {
      const regularText = originalText.slice(0, originalText.lastIndexOf(' '));
      const accent = originalText.slice(originalText.lastIndexOf(' ') + 1);
      return (
        <>
          {this.props.accent ? (
            <Text
              style={[styles.gudText, this.props.style]}>
              {regularText}{' '}
              <Text style={{color: EStyleSheet.value('$gudGreenDark')}}>
                {accent}
              </Text>
            </Text>
          ) : (
            <Text
              style={[styles.gudText, this.props.style]}>
              {originalText}
            </Text>
          )}
        </>
      );
    }
  }
}

export default GudText;
