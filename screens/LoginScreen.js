/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableHighlight,
  TextInput,
  Image,
} from 'react-native';

import styles from '@styles/styles';

const LoginScreen: () => React$Node = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.ImageContainer}>
              <Image
                style={styles.logo}
                source={require('../iconos_app/1x/GUDLogo.png')}
              />
            </View>
            <Text style={styles.sectionTitle}>¡BIENVENIDO!</Text>
            <View style={styles.Container}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Email</Text>
                <TextInput style={styles.textInput1} editable maxLength={40} />
              </View>
            </View>
            <View style={styles.sectionContainer}>
              <View style={styles.ButtonContainer}>
                <Text style={styles.sectionTitle}>Contraseña</Text>
                <TextInput style={styles.textInput1} editable maxLength={40} />
              </View>
              <View styles={styles.sectionContainerR}>
                <View styles={styles.sectionContainerR}>
                  <Button
                    onPress={() => {
                      console.log('you tapped the button acceder');
                    }}
                    title="ACCEDER"
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default LoginScreen;
