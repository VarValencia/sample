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

const LoginScreen: () => React$Node = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <SafeAreaView>
        <View style={styles.body}>
          <View style={styles.cardContainer}>
            <View style={styles.appImageContainer}>
              <Image
                style={styles.logo}
                source={require('../iconos_app/1x/GUDLogo.png')}
              />
            </View>
            <GudText
              style={[styles.GudText, styles.sectionTitle]}
              text="¡BIENVENIDO!"
            />
            <GudText
              style={[styles.GudText, styles.sectionDescription]}
              text="Introduce Email y contraseña para acceder a tu cuenta"
            />
          </View>
          <View style={[styles.cardContainer, styles.bottomContainer]}>
            <View style={styles.gudContainerBigMargin}>
              <GudText
                style={[styles.GudText, styles.gudTextUpButton]}
                text="Email"
              />
              <TextInput style={styles.gudInput} maxLength={40} />
            </View>
            <View style={styles.gudContainierBigMargin}>
              <GudText style={[styles.gudTextUpButton]} text="Contraseña" />
              <TextInput style={styles.gudInput} maxLength={40} />
            </View>
            <View style={styles.GudButtonDark}>
              <TouchableHighlight
                onPress={() => {
                  console.log('you tapped the button ACCEDER');
                }}>
                <GudText style={styles.GudButtonDark} text="Acceder" />
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default LoginScreen;
