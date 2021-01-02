/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StatusBar, Image, TextInput, ImageBackground} from 'react-native';
import styles from '@styles/styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableHighlight} from 'react-native-gesture-handler';
import GudText from '../components/GudText';
import EStyleSheet from 'react-native-extended-stylesheet';
import MatchConfigurator from '@components/MatchConfigurator';

class MatchConfigurationScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      privacy: '',
      language: '',
      age: '',
    };

    this.onChange = this.onChange.bind(this);
  }

  //functions
  onChange(menuItem) {
    var newState = this.state;
    newState[menuItem.ref] = menuItem.key;
    this.setState(newState);
  }

  validate = () => {
    return !Object.values(this.state).some((entry) => {
      return entry.toString().length <= 0;
    });
  };

  render() {
    var isValid = this.validate();
    return (
      <>
        <StatusBar hidden={true} />
        <SafeAreaView>
          <View style={styles.body}>
            <View style={styles.cardContainer}>
              <View style={styles.appLogoContainer}>
                <Image source={require('@icons/1x/GUDLogo.png')} />
              </View>
              <GudText
                style={styles.title}
                accent={true}
                text="Configura tu Match"
              />
              <View style={styles.gudSeparator} />
              <GudText
                style={styles.sectionDescription}
                text="Selecciona los filtros con los que encontrar a una persona para conversar en este mismo momento"
              />
            </View>
            <MatchConfigurator
              onChange={(menuItem) => this.onChange(menuItem)}
            />
            <View style={styles.cardContainer}>
              <View style={styles.buttonContainer}>
                <TouchableHighlight
                  disabled={!isValid}
                  style={[
                    styles.touchableActive,
                    styles.gudButton,
                    isValid ? styles.activeBtn : styles.inactiveBtn,
                  ]}
                  underlayColor={EStyleSheet.value('$gudGreenMedium')}
                  onPress={() => {
                    console.log('you tapped the button ACCEDER');
                  }}>
                  <GudText
                    style={[
                      styles.gudButtonText,
                      isValid ? null : styles.inactiveText,
                    ]}
                    text="Aceptar"
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
export default MatchConfigurationScreen;
