/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StatusBar, Image} from 'react-native';
import styles from '@styles/styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableHighlight} from 'react-native-gesture-handler';
import GudText from '../components/GudText';

class ConfirmEmail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <StatusBar hidden={true} />
        <SafeAreaView>
          <View style={styles.body}>
            <View style={styles.Container}>
              <GudText
                style={[styles.gudMessage, styles.textLG]}
                text="Enhorabuena!"
              />
              <GudText
                style={[styles.gudMessage, styles.textMD]}
                text="Estás a un paso de ser GUD"
              />
              <GudText
                style={[styles.gudMessage, styles.textSM]}
                text="Ya solo te queda validar tu cuenta con el email que te hemos enviado"
              />
            </View>
            {/* se supone que los textos deben superponerse a la imagen */}
            <View style={styles.appImageContainer}>
              <Image
                style={styles.gudCardImage}
                source={require('@android/images/LoginScreen.png')}
              />
            </View>
            <View style={styles.gudButtonDark}>
              <TouchableHighlight
                onPress={() => {
                  console.log('you tapped the button FINALIZAR');
                }}>
                <GudText
                  style={[styles.gudButtonText, styles.textMD]}
                  text="FINALIZAR"
                />
              </TouchableHighlight>
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }
}

export default ConfirmEmail;
