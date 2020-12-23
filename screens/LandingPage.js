/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, StatusBar, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableHighlight } from 'react-native-gesture-handler';

// Styles
import EStyleSheet from 'react-native-extended-stylesheet';
import styles from '@styles/styles';

const LandingPage: () => React$Node = ({ navigation }) => {
  return (
    <>
      <StatusBar hidden={true} />
      <SafeAreaView>
        <View style={styles.body}>
          <View style={styles.cardContainer}>
            <View style={styles.appImageContainer}>
              <Image source={require('../iconos_app/1x/GUDLogo.png')} />
            </View>
            <GudText
              style={[styles.title, styles.textLG]}
              text="¡BIENVENIDO!"
            />
            <View style={styles.appImageContainer}>
              <Image
                style={styles.gudCardImage}
                source={require('../android/app/src/main/assets/images/LoginScreen.png')}
              />
            </View>
            <GudText
              style={[styles.textLG]}
              text="Entra al espacio donde puedes SER"
            />
          </View>
          <View style={[styles.credentialButtonsContainer, styles.bottomContainer]}>
            <View style={[styles.credentialButton, styles.active]}>
              <TouchableHighlight
                style={styles.touchableActive}
                underlayColor={EStyleSheet.value('$gudGreenMedium')}
                onPress={() => {
                  navigateTo('LoginScreen')
                }}>
                <GudText
                  style={[styles.gudButtonText, styles.textMD]}
                  text="Iniciar sesión"
                />
              </TouchableHighlight>
            </View>
            <View style={styles.credentialButton}>
              <TouchableHighlight
                style={styles.touchableActive}
                underlayColor={EStyleSheet.value('$gudGreenMedium')}
                onPress={() => {
                  navigateTo('RegisterScreen')
                }}>
                <GudText
                  style={[styles.gudButtonText, styles.textMD]}
                  text="Regístrate"
                />
              </TouchableHighlight>
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

export default LandingPage;
