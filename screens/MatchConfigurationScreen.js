/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StatusBar, Image, TextInput, ImageBackground} from 'react-native';
import styles from '@styles/styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableHighlight} from 'react-native-gesture-handler';
import GudText from '../components/GudText';
import EStyleSheet from 'react-native-extended-stylesheet';
class MatchConfigurationScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  count = 0;

  //functions
  onhange(count) {
    switch (count) {
      case 0:
        privacyHdd = false;
        break;
      case 1:
        languageHdd = true;
        break;
      case 2:
        ageHdd = true;
        break;
      case 3:
        configHidden = true;
        break;
    }
  }
  render() {
    const privacySettings = [
      {
        name: 'Chat',
        key: 1,
      },
      {
        name: 'Llamada',
        key: 2,
      },
      {
        name: 'Videollamada',
        key: 3,
      },
      {
        name: 'Sorpréndeme',
        key: 4,
      },
    ];
    const languageSettings = [
      {
        name: 'Mi idioma',
        key: 1,
      },
      {
        name: 'Otro',
        key: 2,
      },
      {
        name: 'Sorpréndeme',
        key: 3,
      },
    ];
    const ageSettings = [
      {
        name: '18-30',
        key: 1,
      },
      {
        name: '31-50',
        key: 2,
      },
      {
        name: '51+',
        key: 3,
      },
      {
        name: 'Sorpréndeme',
        key: 4,
      },
    ];
    const matchSettingMode = [
      {
        name: 'Mi Match básico',
        key: 1,
      },
      {
        name: 'Establecer nueva configuración',
        key: 2,
      },
      {
        name: 'Sorpréndeme',
        key: 3,
      },
    ];
    const anonHdd = true;
    const languageHdd = true;
    const ageHdd = true;
    const configHidden = true;
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
                style={styles.textLG}
                accent={true}
                text="Configura tu Match"
              />
              <View style={styles.gudSeparator} />
            </View>
            <GudText
              style={[styles.sectionDescription, styles.textSM]}
              text="Selecciona los filtros con los que encontrar a una persona para conversar en este mismo momento!"
            />
            <GRadioButtonGroup options={privacySettings} />
            <GRadioButtonGroup options={languageSettings} />
            <GRadioButtonGroup options={ageSettings} />
            <GRadioButtonGroup options={matchSettingMode} />
            <View style={styles.gudButtonContainer}>
              <View style={styles.gudButton}>
                <TouchableHighlight
                  style={styles.touchableActive}
                  underlayColor={EStyleSheet.value('$gudGreenMedium')}
                  onPress={() => {
                    console.log('you tapped the button ACCEDER');
                  }}>
                  <GudText style={styles.gudButtonText} text="FINALIZAR" />
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }
}
export default MatchConfigurationScreen;
