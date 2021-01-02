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

class RegisterStepTwo extends React.Component {
  constructor(props) {
    super(props),
      (this.state = {
        currentSlide: 0,
        clear: false,
        userName: '',
        birthday: '',
        country: '',
        language: '',
      });
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.navigateTo = this.navigateTo.bind(this);
  }
  // User functions
  onChange(str, ref) {
    var newState = this.state;
    newState[ref] = str;

    this.setState(newState);
  }
  navigateTo(screen) {
    this.props.navigation.navigate(screen);
  }

  onSubmit() {
    // AuthenticationService.signup({
    //   email: this.state.email,
    //   pwd: this.state.password,
    // });
    // this.navigateTo('ConfirmEmail');
  }

  validate = () => {
    return !Object.values(this.state).some(
      (entry) => entry.toString().length <= 0,
    );
  };

  render() {
    const NAME = "userName";
    const BIRTHDAY = "birthday";
    const COUNTRY = "country";
    const LANGUAGE = "language";
    var isValid = this.validate();
    console.log('State', this.state);
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
                text="Completa tu cuenta para finalizar con el registro"
              />
            </View>

            <View style={styles.cardContainer}>
              <View style={styles.inputContainer}>
                <ValidationField
                  placeholder={'Nombre de usuario'}
                  maxLength={30}
                  minLength={2}
                  handleValue={(event) => this.onChange(event, NAME)}
                />
                <ValidationField
                  placeholder={'Fecha de nacimiento'}
                  maxLength={12}
                  minLength={5}
                  handleValue={(event) => this.onChange(event, BIRTHDAY)}
                />
                <ValidationField
                  placeholder={'Nacionalidad'}
                  maxLength={30}
                  minLength={3}
                  handleValue={(event) => this.onChange(event, COUNTRY)}
                />
                <ValidationField
                  placeholder={'Idioma'}
                  maxLength={30}
                  minLength={3}
                  handleValue={(event) => this.onChange(event, LANGUAGE)}
                />
              </View>
            </View>
            <View style={styles.cardContainer}>
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
                        isValid ? null : styles.inactiveText,
                      ]}
                      text="Registrarse"
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

export default RegisterStepTwo;
