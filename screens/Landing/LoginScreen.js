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
import GudText from '../../components/GudText';
import EStyleSheet from 'react-native-extended-stylesheet';

const LoginScreen: () => React$Node = () => {
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
              style={[styles.title, styles.textLG]}
              text="¡BIENVENIDO!"
            />
            <View style={styles.gudSeparator} />
            <GudText
              style={[styles.sectionDescription, styles.textLG]}
              text="Introduce Email y contraseña para acceder a tu cuenta"
            />
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.inputContainer}>
              <GudText style={styles.textSM} text="Email" />
              <TextInput
                style={styles.gudInput}
                maxLength={40}
                placeholder="Email"
              />

              <GudText style={[styles.textSM]} text="Contraseña" />
              <TextInput
                style={styles.gudInput}
                maxLength={40}
                placeholder="Contraseña"
              />
            </View>
            <View style={styles.buttonContainer}>
              <View style={[styles.gudButton, styles.active]}>
                <TouchableHighlight
                  style={styles.touchableActive}
                  underlayColor={EStyleSheet.value('$gudGreenMedium')}
                  onPress={() => {
                    navigateTo('LandingPage');
                  }}>
                  <GudText
                    style={[styles.gudButtonText, styles.textLG]}
                    text="Acceder"
                  />
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
  function navigateTo(screen) {
    navigation.navigate(screen);
  }
};

export default LoginScreen;
