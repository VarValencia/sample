import React from 'react';
import styles from '@styles/styles';
import GudText from './GudText';
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
      });

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // User functions
  onChange(str) {
    this.setState({value: str});
    this.validate();
    if (this.state.isValid) {
      this.props.handleValue(str);
    }
  }
  onSubmit() {
    Keyboard.dismiss(0);
  }

  //   Maybe validate sizes here and validate format in parent
  validate() {
    if (
      (this.props.maxLength &&
        this.state.value.length > this.state.maxLength) ||
      (this.props.minLength && this.state.value.length < this.state.minLength)
    ) {
      this.setState({isValid: false});
    } else {
      this.setState({isValid: true});
    }
  }
  render() {
    return (
      <>
        <GudText
          style={[styles.textSM, styles.gudInputText]}
          text={this.props.placeholder}
        />
        <TextInput
          ref={this.props.ref}
          style={[
            styles.gudInput,
            this.state.isValid ? styles.valid : styles.invalid,
          ]}
          secureTextEntry={this.state.isPassword}
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
