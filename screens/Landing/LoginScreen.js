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
import GudText from '../../components/GudText';
import EStyleSheet from 'react-native-extended-stylesheet';
import ValidationField from '../../components/ValidationField';

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
    console.log('Event parent', str);
    switch (ref) {
      case 0:
        this.setState({email: str});
        break;
      case 1:
        this.setState({password: str});
        break;
    }
  }
  validate = () => {
    return !Object.values(this.state).some(entry => entry.toString().length <= 0);
  };
  navigateTo(screen) {
    this.props.navigation.navigate(screen);
  }

  render() {
    const EMAIL = 0;
    const PASS = 1;
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
              <View style={styles.gudSeparator} />
              <GudText
                style={[styles.sectionDescription, styles.textLG]}
                text="Introduce Email y contraseña para acceder a tu cuenta"
              />
            </View>
            <View style={styles.bottomContainer}>
              <View style={styles.inputContainer}>
                {/* <GudText
                  style={[styles.textSM, styles.gudInputText]}
                  text="Email"
                />
                <TextInput
                  style={styles.gudInput}
                  maxLength={40}
                  placeholder="Email"
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
                  style={styles.gudInput}
                  maxLength={40}
                  placeholder="Contraseña"
                /> */}
                <ValidationField
                  placeholder={'Contraseña'}
                  maxLength={30}
                  minLength={6}
                  handleValue={(event) => this.onChange(event, PASS)}
                  password={true}
                />
              </View>
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
                      this.navigateTo('LandingPage');
                    }}>
                    <GudText
                      style={[
                        styles.gudButtonText,
                        styles.textMD,
                        isValid ? null : styles.inactiveText,
                      ]}
                      text="Acceder"
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
export default LoginScreen;
