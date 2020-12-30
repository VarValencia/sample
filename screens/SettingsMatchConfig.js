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
import GudText from '../components/GudText';

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

class SettingsMatchConfig extends React.Component {
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
            <View style={styles.bottomContainer}>
              <GudText
                style={[styles.gudTextUpButton, styles.textLG]}
                text="Match básico"
              />
              <GudText
                style={[styles.gudTextUpButton, styles.textMD]}
                text="Nivel de anonimato"
              />
              <GudText
                style={[styles.gudTextUpButton, styles.textSM]}
                text="Selecciona qué nivel de anonimato eliges para los match por defecto:"
              />
              {/* por algun motivo no se alinean a la izq los radio buttons */}
              <View style={styles.inputContainer}>
                <GRadioButtonGroup
                  style={styles.gudRadioButtonGroup}
                  options={optMatch}
                />
              </View>
              <GudText
                style={[styles.gudTextUpButton, styles.textMD]}
                text="Idioma"
              />
              <GudText
                style={[styles.gudTextUpButton, styles.textSM]}
                text="Selecciona qué nivel de anonimato eliges para los match por defecto:"
              />
              <View>
                <GRadioButtonGroup
                  style={[styles.textSM, styles.gudTextUpButton]}
                  options={optLanguage}
                />
              </View>
              <View style={styles.gudButtonDark}>
                <TouchableHighlight
                  onPress={() => {
                    console.log('you tapped the button FINALIZAR');
                  }}
                />
                <GudText
                  style={[styles.gudButtonText]}
                  text="GUARDAR CAMBIOS"
                />
              </View>
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }
}
export default SettingsMatchConfig;
