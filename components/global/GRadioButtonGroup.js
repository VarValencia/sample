import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import styles from '@styles/styles';
import SampleText from './SampleText';

class GRadioButtonGroup extends React.Component {
  constructor(props) {
    super(props),
      (this.state = {
        selectedKey: 0,
        options: this.setDefaultStates(props.options),
      });

    this.onPress = this.onPress.bind(this);
  }
  setDefaultStates() {
    return this.props.options.map((option) => {
      return {
        ...option,
        checked: false,
      };
    });
  }
  onPress(key) {
    this.setState({selectedKey: key});
    this.handleRadioButton(key);
  }
  handleRadioButton(key) {
    var options = this.state.options.map((entry) => {
      if (entry.key === key) {
        entry.checked = true;
      } else {
        entry.checked = false;
      }
      return entry;
    });
    this.props.getKey(key);
    this.setState({options: options});
  }
  render() {
    const {options} = this.state;
    var radioButtons = options.map((option) => {
      return (
        <View
          style={[
            styles.SampleRadioButtonGroup,
            {marginVertical: this.props.spaced},
          ]}
          key={option.key}>
          <TouchableOpacity
            style={styles.rbCircle}
            onPress={() => this.onPress(option.key)}>
            {option.checked ? (
              <View style={styles.rbCheckedCircle} />
            ) : (
              <View />
            )}
          </TouchableOpacity>
          <SampleText style={this.props.style} text={option.name} />
        </View>
      );
    });
    return radioButtons;
  }
}

export default GRadioButtonGroup;
