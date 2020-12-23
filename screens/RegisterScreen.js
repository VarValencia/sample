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

const RegisterScreen: () => React$Node = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <SafeAreaView>
        <View style={styles.body}>
          <View style={styles.cardContainer}>
            <View style={styles.appImageContainer}>
              <Image source={require('../iconos_app/1x/GUDLogo.png')} />
            </View>
            <View style={styles.gudContainerBigMargin}>
              <GudText
                style={[styles.title, styles.textUp]}
                text="Introduce tu email y contraseña para comenzar el registro "
              />
            </View>
            <View style={styles.gudContainerBigMargin}>
              <GudText
                style={[styles.GudText, styles.gudTextUpButton]}
                text="Email"
              />
              <TextInput style={styles.gudInput} maxLength={40} />
            </View>
            <View style={styles.gudContainerBigMargin}>
              <GudText
                style={[styles.GudText, styles.gudTextUpButton]}
                text="Contraseña"
              />
              <TextInput style={styles.gudInput} maxLength={40} />
            </View>
            <View style={styles.gudContainerBigMargin}>
              <GudText
                style={[styles.GudText, styles.gudTextUpButton]}
                text="Repite contraseña"
              />
              <TextInput style={styles.gudInput} maxLength={40} />
            </View>
            <View style={styles.gudButtonDark}>
              <TouchableHighlight
                onPress={() => {
                  console.log('you tapped the button ACCEDER');
                }}>
                <GudText style={styles.gudButtonDark} text="Acceder" />
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default RegisterScreen;
