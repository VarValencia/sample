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
import styles from '@styles/styles';
import {Title} from 'react-native-paper';
import TitleCard from '../../components/global/TitleCard';

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
    let privacy = (
      <GRadioButtonGroup
        style={styles.SampleRadioButtonGroup}
        options={optMatch}
      />
    );
    let language = (
      <GRadioButtonGroup
        style={styles.SampleRadioButtonGroup}
        options={optLanguage}
      />
    );
    let body = (
      <View style={styles.cardContainerLeft}>
        <SampleText
          style={[styles.title, {marginTop: '2%'}]}
          text="Match Básico"
        />
        <TitleCard
          id="Nivel de anonimato"
          title="Nivel de anonimato"
          text="Selecciona qué nivel de anonimato eliges para los match por defecto"
          body={privacy}
        />
        <TitleCard
          id="Idioma"
          title="Idioma"
          text="Selecciona qué idioma quieres para los match por defecto"
          body={language}
        />
      </View>
    );

    return (
      <>
        <StatusBar hidden={true} />
        <SafeAreaView>
          <View style={styles.body}>
            {body}
            <View style={styles.buttonContainer}>
              <TouchableHighlight
                style={[
                  styles.touchableActive,
                  styles.SampleButton,
                  true ? styles.activeBtn : styles.inactiveBtn,
                ]}
                onPress={() => {
                  console.log('you tapped the button Guardar cambios');
                }}
                underlayColor={ESS.value('$SampleGreenMedium')}>
                <SampleText
                  style={styles.SampleButtonText}
                  text="GUARDAR CAMBIOS"
                />
              </TouchableHighlight>
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }
}
export default BasicMatchPreferences;
