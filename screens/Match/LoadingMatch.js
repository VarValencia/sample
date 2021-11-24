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
  constructor(props) {
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
              <SampleText style={styles.title} text="Match" />
              <SampleText
                style={styles.sectionDescription}
                accent={true}
                text="Conectando perfiles"
              />
            </View>
            <View style={styles.appImageContainer}>
              <Image source={require('@icons/RadarSample.gif')} />
            </View>

            <View style={styles.cardContainer}>
              <View style={styles.buttonContiner}>
                <TouchableHighlight
                  style={[styles.SampleButton, styles.touchableActive]}
                  underlayColor={ESS.value('$SampleGreenMedium')}
                  onPress={() => {
                    this.navigateTo('MatchConfigurationScreen');
                    AuthenticationService.logout();
                  }}>
                  <SampleText style={styles.SampleButtonText} text="Cancelar" />
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
