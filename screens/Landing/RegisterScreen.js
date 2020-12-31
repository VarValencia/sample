/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StatusBar, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableHighlight} from 'react-native-gesture-handler';

// Styles
import styles from '@styles/styles';
import EStyleSheet from 'react-native-extended-stylesheet';

// Scripts
import AuthenticationService from '../../scripts/authentication/AuthenticationService';

class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
  validate = () => {
    return !Object.values(this.state).some(
      (entry) => entry.toString().length <= 0,
    );
  };
  onSubmit() {
    // AuthenticationService.signup({
    //   email: this.state.email,
    //   pwd: this.state.password,
    // });
    this.navigateTo('RegisterStepTwo');
  }
  navigateTo(screen) {
    this.props.navigation.navigate(screen);
  }

  render() {
    const EMAIL = 0;
    const PASS = 1;
    const PASS_CONFIRMATION = 2;
    var isValid = this.validate();

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
              <GudText
                style={[styles.sectionDescription, styles.textLG]}
                accent={true}
                text="Introduce tu email y contraseña para comenzar el registro "
              />
              <View style={styles.gudSeparator} />
            </View>

            <View style={styles.inputContainer}>
              <ValidationField
                placeholder={'Email'}
                maxLength={30}
                minLength={6}
                handleValue={(event) => this.onChange(event, EMAIL)}
              />
              <ValidationField
                placeholder={'Contraseña'}
                maxLength={12}
                minLength={6}
                handleValue={(event) => this.onChange(event, PASS)}
                password={true}
              />
              <ValidationField
                placeholder={'Repite tu contraseña'}
                maxLength={12}
                minLength={6}
                handleValue={(event) => this.onChange(event, PASS_CONFIRMATION)}
                password={true}
              />
              <View style={styles.buttonContainer}>
                <View
                  style={[
                    styles.gudButton,
                    isValid ? styles.activeBtn : styles.inactiveBtn,
                  ]}>
                  <TouchableHighlight
                    disabled={!isValid}
                    style={styles.touchableActive}
                    underlayColor={EStyleSheet.value('$gudGreenMedium')}
                    onPress={() => {
                      this.onSubmit();
                    }}>
                    <GudText
                      style={[
                        styles.gudButtonText,
                        styles.textMD,
                        isValid ? null : styles.inactiveText,
                      ]}
                      text="CONTINUAR"
                    />
                  </TouchableHighlight>
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
