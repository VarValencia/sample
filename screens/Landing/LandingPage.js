/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StatusBar, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableHighlight} from 'react-native-gesture-handler';

const LandingPage: () => React$Node = ({navigation}) => {
  return (
    <>
      <StatusBar hidden={true} />
      <SafeAreaView>
        <View style={styles.bodyLogin}>
          <View style={styles.cardContainer}>
            <View style={styles.appLogoContainer}>
              <Image
                style={styles.appLogo}
                source={require('@icons/4x/SampleLogo.png')}
              />
            </View>
            <SampleText style={styles.title} text="¡BIENVENIDO!" />
            <View style={styles.SampleSeparator} />
            <View style={styles.appImageContainer}>
              <Image
                style={styles.SampleCardImage}
                source={require(`@android/images/LoginScreen.png`)}
              />
            </View>
            <SampleText
              style={styles.sectionDescription}
              accent={true}
              text="Entra al espacio donde puedes SER"
            />
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.buttonContainer}>
              <View style={[styles.credentialButton, styles.activeBtn]}>
                <TouchableHighlight
                  style={styles.credentialsTouchableActive}
                  underlayColor={ESS.value('$SampleGreenMedium')}
                  onPress={() => {
                    navigateTo('LoginScreen');
                  }}>
                  <SampleText
                    style={styles.SampleButtonText}
                    text="Iniciar sesión"
                  />
                </TouchableHighlight>
              </View>
              <View style={styles.credentialButton}>
                <TouchableHighlight
                  style={styles.credentialsTouchableActive}
                  underlayColor={ESS.value('$SampleGreenMedium')}
                  onPress={() => {
                    navigateTo('RegisterScreen');
                  }}>
                  <SampleText
                    style={styles.SampleButtonText}
                    text="Regístrate"
                  />
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
  function navigateTo(screen) {
    navigation.navigate(screen);
  }
};

export default LandingPage;
