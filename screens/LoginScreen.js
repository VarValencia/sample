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
            <View style={styles.sectionContainerMarginTop}>
              <View>
                <Image
                  style={styles.logo}
                  source={require('../iconos_app/1x/GUDLogo.png')}
                />
              </View>
              <Text style={styles.sectionTitle}>¡BIENVENIDO!</Text>
              <Text style={styles.sectionDescription}>
                Introduce Email y contraseña para acceder a tu cuenta
              </Text>
            </View>
            <View style={styles.Container}>
              <View style={styles.sectionContainerLogSc}>
                <Text style={styles.TextLogSc}>Email</Text>
                <TextInput style={styles.textInput1} editable maxLength={40} />
              </View>
              <View style={styles.sectionContainerLogSc}>
                <Text style={styles.TextLogSc}>Contraseña</Text>
                <TextInput style={styles.textInput1} editable maxLength={40} />
              </View>
              <View style={styles.ButtonLogSc}>
                <TouchableHighlight
                  onPress={() => {
                    console.log('you tapped the button ACCEDER');
                  }}>
                  <Text style={styles.ButtonTextLogSc}>Acceder</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default LoginScreen;
