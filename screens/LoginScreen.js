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
      <StatusBar hidden = {true} />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View styles={styles.container}>
              {/* <Image
                styles={styles.picture}
                source={require('./screenstest/descarga.png')}
              /> */}
            </View>
            <Text style={styles.sectionTitle}>Bienvenidos</Text>

            <View style={styles.sectionContainerU}>
              <View style={styles.ButtonContainer}>
                <Text style={styles.sectionTitle}>Email</Text>
                <TextInput style={styles.textInput1} editable maxLength={40} />
              </View>
            </View>
            <View style={styles.sectionContainerR}>
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
