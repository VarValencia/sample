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

class ConfirmEmail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onSubmit = this.onSubmit.bind(this);
    this.navigateTo = this.navigateTo.bind(this);
  }
  onSubmit() {
    this.navigateTo('HomeScreen');
  }
  navigateTo(screen) {
    this.props.navigation.navigate(screen);
  }
  render() {
    return (
      <>
        <StatusBar hidden={true} />
        <SafeAreaView>
          <View style={styles.bodyLogin}>
            <View style={styles.cardContainerLeft}>
              <SampleText
                style={[styles.title, styles.textLG]}
                text="¡Enhorabuena!"
              />
              <View style={styles.SampleSeparator} />
              <SampleText
                style={styles.sectionDescription}
                accent={true}
                text="Estás a un paso de ser Sample"
              />
              <SampleText
                style={styles.textMD}
                text="Ya solo te queda validar tu cuenta con el email que te hemos enviado"
              />
            </View>
            <View style={styles.cardContainer}>
              <View style={styles.appImageContainer}>
                <Image
                  style={styles.SampleCardImage}
                  source={require('@icons/SignupLogo.png')}
                />
              </View>
            </View>
            <View style={styles.cardContainer}>
              <View style={styles.buttonContainer}>
                <TouchableHighlight
                  style={[
                    styles.touchableActive,
                    styles.SampleButton,
                    true ? styles.activeBtn : styles.inactiveBtn,
                  ]}
                  onPress={() => {
                    this.onSubmit();
                  }}>
                  <SampleText
                    style={styles.SampleButtonText}
                    text="Finalizar"
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

export default ConfirmEmail;
