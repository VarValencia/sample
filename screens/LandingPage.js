/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {ScrollView, View, Text, StatusBar, Button, Image} from 'react-native';
import styles from '@styles/styles';
import {SafeAreaView} from 'react-native-safe-area-context';

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
            <View style={styles.sectionContainerButton}>
              <View style={styles.gudSuccess}>
                <Button
                  style={styles.ButtonLandingSc}
                  color={styles.gudButton}
                  onPress={() => {
                    console.log('you tapped the button Iniciar');
                  }}
                  title="INICIAR SESIÓN"
                />
              </View>
              <View style={styles.gudSuccess}>
                <Button
                  onPress={() => {
                    console.log('you tapped the button regist');
                  }}
                  title="REGISTRARSE "
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default LandingPage;
