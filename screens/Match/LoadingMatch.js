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


// Scripts
import AuthenticationService from '@scripts/authentication/AuthenticationService';

class LoadingMatch extends React.Component {
  constructor(props){
    super(props);
    this.navigateTo = this.navigateTo.bind(this);
  }
  navigateTo(screen) {
    this.props.navigation.navigate(screen);
  }
  render() {
    return (
      <>
        <StatusBar hidden={true} />
        <SafeAreaView>
          <View style={styles.body}>
            <View style={styles.cardContainer}>
              <GudText style={styles.title} text="Match" />
              <GudText
                style={styles.sectionDescription}
                accent={true}
                text="Conectando perfiles"
              />
            </View>
            <View style={styles.appImageContainer}>
              <Image source={require('@icons/RadarGud.gif')} />
            </View>

            <View style={styles.cardContainer}>
              <View style={styles.buttonContiner}>
                <TouchableHighlight
                  style={[styles.gudButton, styles.touchableActive]}
                  underlayColor={EStyleSheet.value('$gudGreenMedium')}
                  onPress={() => {
                    this.navigateTo('MatchConfigurationScreen');
                    AuthenticationService.logout();
                  }}>
                  <GudText style={styles.gudButtonText} text="Cancelar" />
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
