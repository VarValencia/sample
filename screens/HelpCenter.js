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
            <View style={styles.cardContainerLeft}>
              <GudText
                style={styles.sectionDescription}
                text="Centro de ayuda"
              />
            </View>
            <View style={styles.cardContainer}>
              <View style={styles.appImageContainer}>
                <Image source={require('@icons/GudMatchLogo.png')} />
              </View>
              <GudText
                style={[styles.textSM, {fontFamily: ESS.value('$sb')}]}
                text="Version 0.00.0.01 de Gud Match."
              />
              <GudText
                style={[styles.textSM]}
                text="©2020 Gud Match y Gud Company."
              />
              <GudText
                style={[styles.textSM, {fontFamily: ESS.value('$sb')}]}
                text="Esta es la última versión de Gud match"
              />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableHighlight
                style={[
                  styles.gudButton,
                  styles.touchableActive,
                  styles.activeBtn,
                ]}
                underlayColor={ESS.value('$gudGreenMedium')}
                onPress={() => {
                  console.log('you tapped the button HelpCenter');
                }}>
                <GudText
                  style={[styles.gudButtonText, styles.textMD]}
                  text="Ir al centro de ayuda"
                />
              </TouchableHighlight>
              <TouchableHighlight
                style={[styles.gudButton, styles.touchableActive]}
                underlayColor={ESS.value('$gudGreenMedium')}
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
        </SafeAreaView>
      </>
    );
  }
}

export default HelpCenter;
