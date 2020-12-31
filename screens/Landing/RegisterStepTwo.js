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

class RegisterStepTwo extends React.Component {
  constructor(props) {
    super(props),
      (this.state = {
        name: '',
        birthday: '',
        country: '',
        language: '',
      });
    this.onChange = this.onChange.bind(this);
  }
  // User functions
  onChange(str, ref) {
    switch (ref) {
      case 0:
        this.setState({name: str});
        break;
      case 1:
        this.setState({birthday: str});
        break;
      case 2:
        this.setState({country: str});
        break;
      case 3:
        this.setState({language: str});
    }
  }
  validate = () => {
    return !Object.values(this.state).some(
      (entry) => entry.toString().length <= 0,
    );
  };
  render() {
    const NAME = 0;
    const BIRTHDAY = 1;
    const COUNTRY = 2;
    const LANGUAGE = 3;
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
                accent={true}
                text="Completa tu cuenta"
              />
              <View style={styles.gudSeparator} />
            </View>

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
                    console.log('you tapped the button ACCEDER');
                  }}>
                  <GudText
                    style={[
                      styles.gudButtonText,
                      styles.textMD,
                      isValid ? null : styles.inactiveText,
                    ]}
                    text="FINALIZAR"
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

export default RegisterStepTwo;
