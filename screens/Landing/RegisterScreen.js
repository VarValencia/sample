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

  shouldComponentUpdate(nextState) {
    return this.state != nextState;
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
  onSubmit() {
    this.navigateTo('RegisterStepTwo');
  }
  navigateTo(screen) {
    this.props.navigation.navigate(screen, {
      email: this.state.email,
      password: this.state.password,
    });
  }

  render() {
    const EMAIL = 'email';
    const PASS = 'password';
    const PASS_CONFIRMATION = 'passwordConfirmation';
    var isValid = this.validate();

    return (
      <>
        <StatusBar hidden={true} />
        <SafeAreaView>
          <View style={styles.bodyLogin}>
            <View style={styles.cardContainer}>
              <View style={styles.appLogoContainer}>
                <Image
                  style={styles.appLogo}
                  source={require('@icons/4x/SampleLogo.png')}
                />
              </View>
              <SampleText style={styles.title} text="¡BIENVENIDO!" />
              <View style={styles.SampleSeparator} />
              <SampleText
                style={styles.sectionDescription}
                accent={true}
                text="Introduce tu email y contraseña para comenzar el registro"
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
                  maxLength={12}
                  minLength={6}
                  handleValue={(event) => this.onChange(event, PASS)}
                  password={true}
                />
                <ValidationField
                  placeholder={'Repite tu contraseña'}
                  maxLength={12}
                  minLength={6}
                  handleValue={(event) =>
                    this.onChange(event, PASS_CONFIRMATION)
                  }
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
                    styles.SampleButton,
                    isValid ? styles.activeBtn : styles.inactiveBtn,
                  ]}
                  underlayColor={ESS.value('$SampleGreenMedium')}
                  onPress={() => {
                    this.onSubmit();
                  }}>
                  <SampleText
                    style={[
                      styles.SampleButtonText,
                      isValid ? null : styles.inactiveText,
                    ]}
                    text="Continuar"
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

export default RegisterScreen;
