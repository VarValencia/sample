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

const optAnon = [
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
    key: '4',
  },
];

const optIdiom = [
  {
    name: 'Mi idioma',
    key: 1,
  },
  {
    name: 'Otra',
    key: 2,
  },
  {
    name: 'Sorpréndeme',
    key: 3,
  },
];
const optAge = [
  {
    name: '18-30',
    key: 1,
  },
  {
    name: '31-50',
    key: 2,
  },
  {
    name: '51-',
    key: 3,
  },
  {
    name: 'Sorpréndeme',
    key: 4,
  },
];
const optConfigMode = [
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
class MatchConfigurationScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  count = 0;

  //functions
  onhange(count, ref) {
    switch (count) {
      case 0:
        anonHdd = false;
        break;
      case 1:
        idiomHdd = true;
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
    const anonHdd = true;
    const idiomHdd = true;
    const ageHdd = true;
    const configHidden = true;
    return (
      <>
        <StatusBar hidden={true} />
        <SafeAreaView>
          <View style={styles.body}>
            <View style={styles.cardContainer}>
              <View
                source={require('../android/app/src/main/assets/images/LoginScreen.png')}
                style={styles.gudCardImage}>
                <View style={styles.appImageContainer}>
                  <Image source={require('@icons/1x/GUDLogo.png')} />
                </View>
                <GudText
                  style={[styles.gudMessage, styles.textLG]}
                  text="Configura tu Match!"
                />
                <GudText
                  style={[styles.gudMessage, styles.textSM]}
                  text="Selecciona los filtros con los que encontrar a una persona para conversar en este mismo momento!"
                />
              </View>
            </View>
            {/* componente movil abajo */}
            <View style={styles.gudcardContainer}>
              {/* componente  movil aquí */}
              <View style={styles.gudButtonContainer}>
                <TouchableHighlight
                  onPress={() => {
                    console.log('you tapped the button Siguiente');
                    console.log({anonHdd});
                    console.log({idiomHdd});
                    console.log({ageHdd});
                    console.log({configHidden});
                  }}>
                  <GudText
                    style={[styles.gudButtonText, styles.textMD]}
                    text="Siguiente"
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
export default MatchConfigurationScreen;
