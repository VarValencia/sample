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
  Image,
} from 'react-native';

import styles from '@styles/styles';

const LandingPage: () => React$Node = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionImageContainer}>
              <View style={styles.imageContainer}>
                <Text style={styles.sectionTitle}>Bienvenidos</Text>
                <View style={styles.ButtonContainer}>
                </View>
                <Text tyle={styles.sectionMessage}>
                  Entra a un espacio donde puedes ser
                </Text>
              </View>
            </View>
            <View style={styles.sectionContainerButton}>
              <View style={styles.ButtonContainer}>
                <Button
                  onPress={() => {
                    console.log('you tapped the button Iniciar');
                  }}
                  title="INICIAR SESIÓN"
                />
              </View>
            </View>

            <View style={styles.sectionContainerButton1}>
              <View style={styles.ButtonContainer}>
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
