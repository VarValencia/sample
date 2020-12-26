/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StatusBar, Image, TextInput} from 'react-native';
import styles from '@styles/styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';
import GudText from '../../components/GudText';
import EStyleSheet from 'react-native-extended-stylesheet';

import ValidationComponent from 'react-native-form-validator';

import {Input} from 'react-native-elements';

class RegisterScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      isFormFilled: false,
      email: 'Email',
      password: '',
      passwordConfirmation: '',
    };
    this.onChange = this.onChange.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state != nextState;
  }

  onChange(str) {
    this.setState({email: str});
    console.log('Text', str);
  }

  onSubmit() {
    this.ValidationComponent.validate({
      email: {
        minLength: 6,
        required: true,
      },
      passwordConfirmation: {
        equalPassword: this.state.password,
      },
    });
  }
  render() {
    console.log('State', this.state.email);
    return (
      <>
        <StatusBar hidden={true} />
        <SafeAreaView>
          <View style={styles.body}>
            <View style={styles.cardContainer}>
              <View style={styles.appImageContainer}>
                <Image source={require('@icons/1x/GUDLogo.png')} />
              </View>
              <GudText
                style={[styles.title, styles.textLG]}
                text="¡BIENVENIDO!"
              />
              <View style={styles.gudSeparator} />
              <GudText
                style={[styles.sectionDescription, styles.textLG]}
                text="Introduce tu email y contraseña para comenzar el registro "
              />
            </View>
            <View style={styles.bottomContainer}>
              <GudText style={styles.textSM} text="Email" />
              <TextInput
                ref="Email"
                style={styles.gudInput}
                placeholder="Email"
                onChangeText={(text) => this.onChange(text)}
                value={this.state.email}
              />

              <GudText style={styles.textSM} text="Contraseña" />
              <TextInput
                style={styles.gudInput}
                maxLength={40}
                placeholder="Contraseña"
              />

              <GudText style={styles.textSM} text="Repite contraseña" />
              <TextInput
                style={styles.gudInput}
                maxLength={40}
                placeholder="Repite tu contraseña"
              />

              <View style={styles.buttonContainer}>
                <View
                  style={[
                    styles.gudButton,
                    this.state.isFormFilled ? styles.active : styles.inactive,
                  ]}>
                  <TouchableOpacity
                    disabled={!this.state.isFormFilled}
                    style={styles.touchableActive}
                    underlayColor={EStyleSheet.value('$gudGreenMedium')}
                    onPress={() => {
                      // navigateTo('LandingPage');
                    }}>
                    <GudText
                      style={[
                        styles.gudButtonText,
                        styles.textMD,
                        this.state.isFormFilled
                          ? styles.active
                          : styles.inactive,
                      ]}
                      text="Siguiente"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }
}

export default RegisterScreen;
