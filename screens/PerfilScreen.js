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

const OpenEmailScreen: () => React$Node = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <SafeAreaView>
        <View style={styles.body}>
          <View style={styles.cardContainer}>
            <View style={styles.appImageContainer}>
              <Image source={require('../iconos_app/1x/GUDLogo.png')} />
              <GudText
                style={[styles.gudMessage, styles.textLG]}
                text="Enhorabuena!"
              />
            </View>

            <GudText
              style={[styles.gudMessage, styles.textMD]}
              text="Estás a un paso de ser GUD"
            />
            <GudText
              style={[styles.gudMessage, styles.textSM]}
              text="Ya solo te queda validar tu cuenta con el email que te hemos enviado"
            />
          </View>
          <View style={styles.appImageContainer}>
            <Image
              style={styles.gudCardImage}
              source={require('../android/app/src/main/assets/images/LoginScreen.png')}
            />
          </View>
          <View style={styles.gudButtonDark}>
            <TouchableHighlight
              onPress={() => {
                console.log('you tapped the button FINALIZAR');
              }}>
              <GudText
                style={[styles.gudButtonText, styles.textMD]}
                text="FINALIZAR"
              />
            </TouchableHighlight>
          </View>
          <View style={styles.gudContainerBigMargin}>
            <GudText
              style={[styles.GudText, styles.gudTextUpButton]}
              text="Email"
            />
            <TextInput style={styles.gudInput} maxLength={40} />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};
export default OpenEmailScreen;
