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
            <View style={styles.cardContainer}>
              <View style={styles.appImageContainer}>
                <Image source={require('@icons/SampleMatchLogo.png')} />
              </View>
              <SampleText
                style={{fontFamily: ESS.value('$sb')}}
                text="Version 0.00.0.01 de Sample Match."
              />
              <SampleText
                style={styles.textSM}
                text="©2020 Sample Match y Sample Company."
              />
              <SampleText
                style={[styles.textSM, {fontFamily: ESS.value('$sb')}]}
                text="Esta es la última versión de Sample match"
              />
              <View style={styles.buttonContainer}>
                <TouchableHighlight
                  style={[
                    styles.SampleButton,
                    styles.touchableActive,
                    styles.activeBtn,
                  ]}
                  underlayColor={ESS.value('$SampleGreenMedium')}
                  onPress={() => {
                    console.log('you tapped the button HelpCenter');
                  }}>
                  <SampleText
                    style={styles.SampleButtonText}
                    text="Ir al centro de ayuda"
                  />
                </TouchableHighlight>
                <TouchableHighlight
                  style={[styles.SampleButton, styles.touchableActive]}
                  underlayColor={ESS.value('$SampleGreenMedium')}
                  onPress={() => {
                    console.log('you tapped the button technic support');
                  }}>
                  <SampleText
                    style={styles.SampleButtonText}
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
