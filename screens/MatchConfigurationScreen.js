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

const MatchConfigurationScreen: () => React$Node = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <SafeAreaView>
        <View style={styles.body}>
          <View style={styles.cardContainer}>
            <ImageBackground
              source={require('../android/app/src/main/assets/images/LoginScreen.png')}
              style={styles.gudCardImage}>
              <View style={styles.appImageContainer}>
                <Image source={require('@icons/1x/GUDLogo.png')} />
              </View>
              <GudText
                style={[styles.gudMessage, styles.textLG]}
                text="Configura tu Match!"
              />
            </ImageBackground>

            <GudText
              style={[styles.gudMessage, styles.textMD]}
              text="Selecciona los filtros con los que encontrar una persona para conversar en este mimo momento:"
            />
          </View>
          {/* componente movil abajo */}
          <View style={styles.gudcardContainer}>
            {/* componente  movil aquí */}
          </View>
          <View style={styles.gudButtonDark}>
            <TouchableHighlight
              onPress={() => {
                console.log('you tapped the button FINALIZAR');
              }}>
              <GudText
                style={[styles.gudButtonText, styles.textMD]}
                text="Match"
              />
            </TouchableHighlight>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};
export default MatchConfigurationScreen;
