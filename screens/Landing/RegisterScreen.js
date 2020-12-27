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
import {TouchableHighlight} from 'react-native-gesture-handler';
import GudText from '@components/GudText';
import EStyleSheet from 'react-native-extended-stylesheet';
import ValidationField from '@components/ValidationField';

class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormFilled: false,
      email: '',
      password: '',
      passwordConfirmation: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.navigateTo = this.navigateTo.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state != nextState;
  }

  // User functions
  onChange(str, ref) {
    console.log('Event', str);
    switch (ref) {
      case 0:
        this.setState({email: str});
        break;
      case 1:
        this.setState({password: str});
        break;
      case 2:
        this.setState({passwordConfirmation: str});
        break;
    }
  }
  onSubmit() {
    this.navigateTo('RegisterStepTwo');
  }
  navigateTo(screen) {
    this.props.navigation.navigate(screen);
  }

  render() {
    const EMAIL = 0;
    const PASS = 1;
    const PASS_CONFIRMATION = 2;

    console.log('State', this.state);
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
              <View style={styles.inputContainer}>
                {/* <GudText
                  style={[styles.textSM, styles.gudInputText]}
                  text="Email"
                />
                <TextInput
                  ref="Email"
                  style={styles.gudInput}
                  placeholder="Email"
                  onChangeText={(text) => this.onChange(text, EMAIL)}
                  value={this.state.email}
                /> */}
                <ValidationField
                  placeholder={'Email'}
                  maxLength={30}
                  minLength={6}
                  handleValue={(event) => this.onChange(event, EMAIL)}
                />
                {/* <GudText
                  style={[styles.textSM, styles.gudInputText]}
                  text="Contraseña"
                  />
                  <TextInput
                  ref="Password"
                  secureTextEntry={true}
                  style={styles.gudInput}
                  placeholder="Contraseña"
                  onChangeText={(text) => this.onChange(text, PASS)}
                  value={this.state.password}
                /> */}
                <ValidationField
                  placeholder={'Contraseña'}
                  maxLength={12}
                  minLength={6}
                  handleValue={(event) => this.onChange(event, PASS)}
                  password={true}
                />

                {/* <GudText
                  style={[styles.textSM, styles.gudInputText]}
                  text="Repite contraseña"
                  />
                  <TextInput
                  ref="PasswordConffirmation"
                  style={styles.gudInput}
                  secureTextEntry={true}
                  onChangeText={(text) =>
                    this.onChange(text, PASS_CONFIRMATION)
                  }
                  placeholder="Repite tu contraseña"
                /> */}
                <ValidationField
                  placeholder={'Repite tu contraseña'}
                  maxLength={12}
                  minLength={6}
                  handleValue={(event) =>
                    this.onChange(event, PASS_CONFIRMATION)
                  }
                  password={true}
                />
                <View style={styles.buttonContainer}>
                  <View
                    style={[
                      styles.gudButton,
                      this.state.isFormFilled ? styles.activeBtn : styles.inactiveBtn,
                    ]}>
                    <TouchableHighlight
                      disabled={!this.state.isFormFilled}
                      style={styles.touchableActive}
                      underlayColor={EStyleSheet.value('$gudGreenMedium')}
                      onPress={() => {
                        this.onSubmit();
                      }}>
                      <GudText
                        style={[
                          styles.gudButtonText,
                          styles.textMD,
                          this.state.isFormFilled
                            ? null
                            : styles.inactiveText,
                        ]}
                        text="Siguiente"
                      />
                    </TouchableHighlight>
                  </View>
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
