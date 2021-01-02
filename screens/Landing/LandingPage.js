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
        <View style={styles.body}>
          <View style={styles.cardContainer}>
            <View style={styles.appLogoContainer}>
              <Image source={require('@icons/1x/GUDLogo.png')} />
            </View>
            <GudText style={styles.title} text="¡BIENVENIDO!" />
            <View style={styles.gudSeparator} />
            <View style={styles.appImageContainer}>
              <Image
                style={styles.gudCardImage}
                source={require('@android/images/LoginScreen.png')}
              />
            </View>
            <GudText
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
                  underlayColor={EStyleSheet.value('$gudGreenMedium')}
                  onPress={() => {
                    navigateTo('LoginScreen');
                  }}>
                  <GudText style={styles.gudButtonText} text="Iniciar sesión" />
                </TouchableHighlight>
              </View>
              <View style={styles.credentialButton}>
                <TouchableHighlight
                  style={styles.credentialsTouchableActive}
                  underlayColor={EStyleSheet.value('$gudGreenMedium')}
                  onPress={() => {
                    navigateTo('RegisterScreen');
                  }}>
                  <GudText style={styles.gudButtonText} text="Regístrate" />
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
