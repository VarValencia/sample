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
            {/* necesario estilo que alinee a la izquierda */}
            <View style={styles.cardContainer}>
              <GudText style={styles.textLG} text="Enhorabuena!" />
              {/* the separator should be allign to the left */}
              <View style={styles.gudSeparator} />
              <GudText
                style={styles.textMD}
                text="Estás a un paso de ser GUD"
              />
              <GudText
                style={styles.textSM}
                text="Ya solo te queda validar tu cuenta con el email que te hemos enviado"
              />
            </View>
            <View style={styles.appImageContainer}>
              <Image
                style={styles.gudCardImage}
                source={require('@android/images/LoginScreen.png')}
              />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableHighlight
                // gudButton no se corresponde al estilo del boton de la pantalla
                style={[styles.touchableActive, styles.gudButton]}
                onPress={() => {
                  console.log('user pressed FINALIZAR');
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
