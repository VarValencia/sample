/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableHighlight} from 'react-native-gesture-handler';
import styles from '../scss/styles';
import GudText from '../components/global/GudText';

const optMatch = [
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

const optLanguage = [
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

class BasicMatchPreferences extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <StatusBar hidden={true} />
        <SafeAreaView>
          <View style={styles.body}>
            <View style={styles.cardContainer}>
              <View style={styles.cardContainerLeft}>
                <GudText style={styles.title} text="Match Básico" />

                <GudText
                  style={styles.gudTextUpButton}
                  text="Nivel de anonimato"
                />
                <GudText
                  style={styles.gudTextUpButton}
                  text="Selecciona qué nivel de anonimato eliges para los match por defecto:"
                />
                <GRadioButtonGroup
                  style={styles.gudRadioButtonGroup}
                  options={optMatch}
                />
              </View>
              <View style={styles.cardContainerLeft}>
                <GudText style={styles.gudTextUpButton} text="Idioma" />
                <GudText
                  style={styles.gudTextUpButton}
                  text="Selecciona qué idioma quieres para los match por defecto:"
                />
                <GRadioButtonGroup
                  style={styles.GRadioButtonGroup}
                  options={optLanguage}
                />
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableHighlight
                style={[
                  styles.touchableActive,
                  styles.gudButton,
                  true ? styles.activeBtn : styles.inactiveBtn,
                ]}
                onPress={() => {
                  console.log('you tapped the button Guardar cambios');
                }}
                underlayColor={ESS.value('$gudGreenMedium')}>
                <GudText style={styles.gudButtonText} text="GUARDAR CAMBIOS" />
              </TouchableHighlight>
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }
}
export default BasicMatchPreferences;
