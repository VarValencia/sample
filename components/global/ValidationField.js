import React from 'react';
import styles from '@styles/styles';
import SampleText from './SampleText';
import {TextInput, Keyboard} from 'react-native';

class ValidationField extends React.Component {
  constructor(props) {
    super(props),
      (this.state = {
        value: '',
        isValid: true,
        maxLength: props.maxLength,
        minLength: props.minLength,
        isPassword: props.password,
        placeholder: props.placeholder || '',
      });

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // User functions
  onChange(str) {
    this.setState({value: str});
    this.validate(str);
  }
  onSubmit() {
    Keyboard.dismiss(0);
  }

  // Maybe validate sizes here and validate format in parent
  validate(str) {
    let validate =
      str.length > this.state.minLength && str.length < this.state.maxLength;
    this.setState({
      isValid: validate,
    });
    if (validate) {
      this.props.handleValue(str);
    } else {
      this.props.handleValue('');
    }
  }
  render() {
    var isValid = this.state.isValid;
    return (
      <>
        <SampleText
          style={[styles.textSM, styles.SampleInputText]}
          text={this.state.placeholder}
        />
        <TextInput
          ref={this.props.ref}
          style={[
            this.props.style ? this.props.style : styles.SampleInput,
            isValid ? styles.valid : styles.invalid,
            this.props.disableAccent ? styles.valid : null,
          ]}
          secureTextEntry={
            this.state.isPassword && this.state.value.length > 0 ? true : false
          }
          autoFocus={this.props.autoFocus}
          multiline={this.props.multiline}
          numberOfLines={this.props.numberOfLines}
          autoCapitalize={this.state.isPassword ? 'none' : 'sentences'}
          placeholder={this.props.placeholder}
          onChangeText={(text) => this.onChange(text)}
          onSubmitEditing={this.onSubmit}
          value={this.state.value}
        />
      </>
    );
  }
}

export default ValidationField;
