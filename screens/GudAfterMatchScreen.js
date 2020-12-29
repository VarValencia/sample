/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StatusBar, Image, ImageBackground} from 'react-native';
import styles from '@styles/styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TextInput, TouchableHighlight} from 'react-native-gesture-handler';
import GudText from '../components/GudText';

const opt = [
  {
    name: 'Genial, guardar a este Guder',
    key: 1,
  },
  {
    name: 'Bien, pero prefiero probar con otros guders',
    key: 2,
  },
  {
    name: 'Mal, problemas con el guder',
    key: 3,
  },
  {
    name: 'Otros',
    key: '4',
  },
];

class GudAfterMatchScreen extends React.Component {
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
              <ImageBackground
                source={require('@android/images/LoginScreen.png')}
                //no funciona el estilo gudBackgroundImage
                style={styles.gudBackgroundImage}>
                <GudText style={[styles.textLG]} text="Hey Pablo," />
                <GudText
                  style={[styles.textMD]}
                  text=" cómo ha sido la experiencia con este Gudder?"
                />
              </ImageBackground>
            </View>
            <GRadioButtonGroup
              style={[styles.GRadioButtonGroup]}
              options={opt}
            />
            <TextInput
              editable={false}
              style={[styles.gudInput]}
              maxLength={40}
            />
          </View>
        </SafeAreaView>
      </>
    );
  }
}

export default GudAfterMatchScreen;
