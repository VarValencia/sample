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

const RegisterScreenComplete: () => React$Node = () => {
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
              style={[styles.title, styles.textMD]}
              text="Completa tu cuenta"
            />
            <View style={styles.gudContainerBigMargin}>
              <GudText
                style={[styles.GudText, styles.gudTextUpButton]}
                text="Nombre de usuario"
              />
              <TextInput style={styles.gudInput} maxLength={40} />
            </View>
            <View style={styles.gudContainerBigMargin}>
              <GudText
                style={[styles.GudText, styles.gudTextUpButton]}
                text="Fecha de nacimiento"
              />
              <TextInput style={styles.gudInput} maxLength={40} />
            </View>
            <View style={styles.gudContainerBigMargin}>
              <GudText
                style={[styles.GudText, styles.gudTextUpButton]}
                text="Nacionalidad"
              />
              <TextInput style={styles.gudInput} maxLength={40} />
            </View>
            <View style={styles.gudContainerBigMargin}>
              <GudText
                style={[styles.GudText, styles.gudTextUpButton]}
                text="Idioma"
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

export default RegisterScreenComplete;
