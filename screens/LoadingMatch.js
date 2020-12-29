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

import GudText from '../components/GudText';
import EStyleSheet from 'react-native-extended-stylesheet';
import styles from '@styles/styles';

class LoadingMatch extends React.Component {
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
              <GudText style={styles.textLG} text="Match" />
              <GudText
                style={styles.textMD}
                accent={true}
                text="Conectando perfiles"
              />
            </View>
            <View style={styles.appImageContainer}>
              <Image source={require('@icons/RadarGud.gif')} />
            </View>
            <View style={styles.buttonContiner}>
              <View style={styles.gudButton}>
                <TouchableHighlight
                  style={styles.touchableActive}
                  underlayColor={EStyleSheet.value('$gudGreenMedium')}
                  onPress={() => {
                    console.log('you tapped the button FINALIZAR');
                  }}>
                  <GudText
                    style={[styles.gudButtonText, styles.textMD]}
                    text="Cancelar"
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
export default LoadingMatch;
