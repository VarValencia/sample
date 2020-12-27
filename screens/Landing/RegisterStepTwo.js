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
    this.state = {
      isFormFilled: true,
      name: '',
      birthday: '',
      country: '',
      language: ''
    }
  }
  render() {
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
                text="Completa tu cuenta para finalizar el registro"
              />
            </View>
            <View style={styles.bottomContainer}>
              <View style={styles.inputContainer}>
                <GudText style={styles.textMD} text="Nombre de usuario" />
                <TextInput style={styles.gudInput} maxLength={40} />
                <GudText
                  style={[styles.GudText, styles.gudTextUpButton]}
                  text="Fecha de nacimiento"
                />
                <TextInput style={styles.gudInput} maxLength={40} />
                <GudText
                  style={[styles.GudText, styles.gudTextUpButton]}
                  text="Nacionalidad"
                />
                <TextInput style={styles.gudInput} maxLength={40} />
                <GudText
                  style={[styles.GudText, styles.gudTextUpButton]}
                  text="Idioma"
                />
                <TextInput style={styles.gudInput} maxLength={40} />
              </View>
              <View style={styles.buttonContainer}>
                <View style={styles.gudButton}>
                  <TouchableHighlight
                    disabled={!this.state.isFormFilled}
                    style={styles.touchableActive}
                    underlayColor={EStyleSheet.value('$gudGreenMedium')}
                    onPress={() => {
                      console.log('you tapped the button ACCEDER');
                    }}>
                    <GudText style={styles.gudButtonText} text="Acceder" />
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
