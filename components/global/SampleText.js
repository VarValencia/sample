import React from 'react';
import {Text} from 'react-native';
import styles from '@styles/styles';

class SampleText extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.text) {
      const originalText = this.props.text.trim();
      if (this.props.slice) {
        var start = this.props.slice[0];
        var end = this.props.slice[1];
        const accent = originalText.slice(start, end);
        const beforeString = originalText.slice(0, start);
        const afterString = originalText.slice(end);

        return (
          <>
            <Text style={[styles.SampleText, this.props.style]}>
              {beforeString}
              <Text style={{color: ESS.value('$SampleGreenDark')}}>
                {accent}
              </Text>
              {afterString}
            </Text>
          </>
        );
      } else {
        const regularText = originalText.slice(
          0,
          originalText.lastIndexOf(' '),
        );
        const accent = originalText.slice(originalText.lastIndexOf(' ') + 1);
        return (
          <>
            {this.props.accent ? (
              <Text style={[styles.SampleText, this.props.style]}>
                {regularText}{' '}
                <Text style={{color: ESS.value('$SampleGreenDark')}}>
                  {accent}
                </Text>
              </Text>
            ) : (
              <Text style={[styles.SampleText, this.props.style]}>
                {originalText}
              </Text>
            )}
          </>
        );
      }
    } else {
      return <Text />;
    }
  }
}

export default SampleText;
