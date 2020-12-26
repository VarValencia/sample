import React from 'react';
import styles from '@styles/styles';
import GudText from './GudText';
import {TextInput} from 'react-native';

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
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.state != nextState;
  }
  onChange(str) {
    this.setState({value: str});
    this.props.handleValue;
    this.validate();
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
          onBlur={this.props.handleValue(this.state.value)}
          value={this.state.value}
        />
      </>
    );
  }
}

export default ValidationField;
