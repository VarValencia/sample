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


class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.onChange = this.onChange.bind(this);
    this.navigateTo = this.navigateTo.bind(this);
    this.validate = this.validate.bind(this);
  }

  // User functions
  onChange(str, ref) {
    var newState = this.state;
    newState[ref] = str;

    this.setState(newState);
  }
  validate = () => {
    return !Object.values(this.state).some(
      (entry) => entry.toString().length <= 0,
    );
  };
  navigateTo(screen) {
    this.props.navigation.navigate(screen);
  }

  render() {
    const EMAIL = "email";
    const PASS = "password";
    var isValid = this.validate();

    return (
      <>
        <StatusBar hidden={true} />
        <SafeAreaView>
          <View style={styles.body}>
            <View style={styles.cardContainer}>
              <View style={styles.appLogoContainer}>
                <Image source={require('@icons/1x/GUDLogo.png')} />
              </View>
              <GudText style={styles.title} text="¡BIENVENIDO!" />
              <View style={styles.gudSeparator} />
              <GudText
                style={styles.sectionDescription}
                accent={true}
                text="Introduce Email y contraseña para acceder a tu cuenta"
              />
            </View>
            <View style={styles.cardContainer}>
              <View style={styles.inputContainer}>
                <ValidationField
                  placeholder={'Email'}
                  maxLength={30}
                  minLength={6}
                  handleValue={(event) => this.onChange(event, EMAIL)}
                />
                <ValidationField
                  placeholder={'Contraseña'}
                  maxLength={30}
                  minLength={6}
                  handleValue={(event) => this.onChange(event, PASS)}
                  password={true}
                />
              </View>
            </View>
            <View style={styles.cardContainer}>
              <View style={styles.buttonContainer}>
                <TouchableHighlight
                  disabled={!isValid}
                  style={[
                    styles.touchableActive,
                    styles.gudButton,
                    isValid ? styles.activeBtn : styles.inactiveBtn,
                  ]}
                  underlayColor={EStyleSheet.value('$gudGreenMedium')}
                  onPress={() => {
                    AuthenticationService.login({email: this.state.email, pwd: this.state.password});
                  }}>
                  <GudText
                    style={[
                      styles.gudButtonText,
                      isValid ? null : styles.inactiveText,
                    ]}
                    text="Acceder"
                  />
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }
}
export default LoginScreen;
