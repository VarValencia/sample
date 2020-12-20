/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { ScrollView, View, Text, StatusBar, Button, Image } from 'react-native';
import styles from '@styles/styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableHighlight } from 'react-native-gesture-handler';

const LandingPage: () => React$Node = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <View style={styles.ImageContainer}>
                <Image
                  style={styles.logo}
                  source={require('../iconos_app/1x/GUDLogo.png')}
                />
              </View>
              <Text style={styles.sectionTitle}>Bienvenidos</Text>
              <View styles={styles.imageContainer}>
                <Image
                  styles={styles.picture}
                  source={require('../android/app/src/main/assets/images/LoginScreen.png')}
                />
              </View>
              <View style={styles.Container}>
                <Text style={styles.sectionMessage}>
                  Entra al espacio donde puedes SER
                </Text>
              </View>
            </View>
            <View style={styles.sectionContainer}>
              <View style={styles.ButtonLandingSc}>
                <TouchableHighlight
                  onPress={() => {
                    console.log('you tapped the button Iniciar');
                  }}>
                  <Text style={styles.ButtonTextLandingSc}>INICIAR SESION</Text>
                </TouchableHighlight>
              </View>
              <View style={styles.ButtonLandingSc2}>
                <TouchableHighlight
                  onPress={() => {
                    console.log('you tapped the button Iniciar');
                  }}>
                  <Text style={styles.ButtonTextLandingSc}>REGISTRARSE</Text>
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
