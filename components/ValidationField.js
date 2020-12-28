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
