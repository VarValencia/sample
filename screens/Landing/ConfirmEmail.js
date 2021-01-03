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
          <View style={styles.body}>
            <View style={styles.cardContainerLeft}>
              <GudText
                style={[styles.title, styles.textLG]}
                text="¡Enhorabuena!"
              />
              <View style={styles.gudSeparator} />
              <GudText
                style={[styles.sectionDescription, styles.textMD]}
                accent={true}
                text="Estás a un paso de ser gud"
              />
              <GudText
                style={styles.textMD}
                text="Ya solo te queda validar tu cuenta con el email que te hemos enviado"
              />
            </View>
            <View style={styles.cardContainer}>
              <View style={styles.appImageContainer}>
                <Image
                  style={styles.gudCardImage}
                  source={require('@icons/SignupLogo.png')}
                />
              </View>
            </View>
            <View style={styles.cardContainer}>
              <View style={styles.buttonContainer}>
                <TouchableHighlight
                  style={[
                    styles.touchableActive,
                    styles.gudButton,
                    true ? styles.activeBtn : styles.inactiveBtn,
                  ]}
                  onPress={() => {
                    this.onSubmit();
                  }}>
                  <GudText style={styles.gudButtonText} text="Finalizar" />
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
