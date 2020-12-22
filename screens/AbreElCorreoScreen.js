/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StatusBar, Image} from 'react-native';
import styles from '@styles/styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableHighlight} from 'react-native-gesture-handler';
import GudText from '../components/GudText';

const AbreElCorreoScreen: () => React$Node = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <SafeAreaView>
        <View style={styles.body}>
          <View style={styles.Container}>
            <GudText
              style={[styles.gudMessage, styles.textLG]}
              text="Enhorabuena!"
            />
            <GudText
              style={[styles.Message, styles.textMD]}
              text="Estás a un paso de ser GUD"
            />
            <GudText
              style={[styles.Message, styles.textSM]}
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
              style={styles.touchableActive}
              onPress={() => {
                console.log('you tapped the button Iniciar');
              }}>
              <GudText
                style={[styles.gudButtonText, styles.textMD]}
                text="FINALIZAR"
              />
            </TouchableHighlight>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default AbreElCorreoScreen;
