/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { ScrollView, View, Text, StatusBar, Image } from 'react-native';
import styles from '@styles/styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableHighlight } from 'react-native-gesture-handler';
import GudText from '../components/GudText';

const LandingPage: () => React$Node = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.cardContainer}>
              <View style={styles.appImageContainer}>
                <Image
                  source={require('../iconos_app/1x/GUDLogo.png')}
                />
              </View>
              <GudText style={[styles.title, styles.textLG]} text='¡BIENVENIDO!' />
              <View style={styles.appImageContainer}>
                <Image
                  style={styles.gudCardImage}
                  source={require('../android/app/src/main/assets/images/LoginScreen.png')}
                />
              </View>
              <GudText style={[styles.textLG]} text='Entra al espacio donde puedes SER' />
              {/* <GudText style={[styles.textFocus, styles.textLG]} text='SER' /> */}
            </View>
            <View style={styles.credentialButtonsContainer}>
              <View style={[styles.credentialButton, styles.active]}>
                <TouchableHighlight
                  onPress={() => {
                    console.log('you tapped the button Iniciar');
                  }}>
                  <GudText style={[styles.gudButtonText, styles.textMD]} text='Iniciar sesión'/>
                </TouchableHighlight>
              </View>
              <View style={styles.credentialButton}>
                <TouchableHighlight
                  onPress={() => {
                    console.log('you tapped the button Iniciar');
                  }}>
                  <GudText style={[styles.gudButtonText, styles.textMD]} text='Regístrate'/>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default LandingPage;
