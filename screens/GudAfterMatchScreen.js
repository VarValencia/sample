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

const GudAfterMatchScreen: () => React$Node = () => {
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
  return (
    <>
      <StatusBar hidden={true} />
      <SafeAreaView>
        <View style={styles.body}>
          <View style={styles.cardContainer}>
            <View style={styles.appImageContainer}>
              <ImageBackground
                source={require('../android/app/src/main/assets/images/LoginScreen.png')}
                style={styles.gudCardImage}>
                <GudText
                  style={[styles.gudImageBackgroundText, styles.textLG]}
                  text="Hey Pablo,"
                />

                <GudText
                  style={[styles.gudText, styles.textMD]}
                  text=" cómo ha sido la experiencia con este Gudder?"
                />
              </ImageBackground>
            </View>
            <View styles={styles.cardContainer}>
              <GRadioButtonGroup style={styles.textSM} options={opt} />
              {/* Set this editable to read from GRadioButtonGroup selected value */}
              <TextInput
                editable={false}
                style={[styles.gudInput]}
                maxLength={40}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default GudAfterMatchScreen;
