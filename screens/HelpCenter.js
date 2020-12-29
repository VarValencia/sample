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

import styles from '@styles/styles';
import EStyleSheet from 'react-native-extended-stylesheet';

class HelpCenter extends React.Component {
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
            <View style={styles.cardContainer}>
              <GudText
                style={[styles.gudMessage, styles.textLG]}
                text="Enhorabuena!"
              />
              <View style={styles.appImageContainer}>
                <Image source={require('@icons/GudMatchLogo.png')} />
              </View>
              <GudText
                style={[styles.gudMessage, styles.textSM]}
                text="Version 1.00.0.01 de Gud match"
              />
              <GudText
                style={styles.textMD}
                text="Esta es la última versión de Gud match"
              />
            </View>
            {/* se supone que los textos deben superponerse a la imagen */}

            <View style={styles.bottomContainer}>
              <View style={styles.buttonContainer}>
                <TouchableHighlight
                  style={[
                    styles.gudButton,
                    styles.touchableActive,
                    styles.activeBtn,
                  ]}
                  underlayColor={EStyleSheet.value('$gudGreenMedium')}
                  onPress={() => {
                    console.log('you tapped the button HelpCenter');
                  }}>
                  <GudText
                    style={[styles.gudButtonText, styles.textMD]}
                    text="Ir al centro de ayuda"
                  />
                </TouchableHighlight>
                <TouchableHighlight
                  style={[
                    styles.gudButton,
                    styles.touchableActive,
                    styles.activeBtn,
                  ]}
                  underlayColor={EStyleSheet.value('$gudGreenMedium')}
                  onPress={() => {
                    console.log('you tapped the button technic support');
                  }}>
                  <GudText
                    style={[styles.gudButtonText, styles.textMD]}
                    text="Contacta al soporte técnico"
                  />
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }
}

export default HelpCenter;
