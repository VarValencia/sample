/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StatusBar, ImageBackground} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableHighlight} from 'react-native-gesture-handler';

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
    this.navigateTo = this.navigateTo.bind(this);
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

  navigateTo(screen) {
    this.props.navigation.navigate(screen);
  }

  render() {
    var isValid = this.validate();
    return (
      <>
        <StatusBar hidden={true} />
        <SafeAreaView>
          <View style={styles.body}>
            <View style={styles.cardContainer}>
              <ImageBackground
                source={require('@icons/GudCircles.png')}
                style={styles.gudBackgroundImage}>
                <View style={styles.gudImageBackgroundContainer}>
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
              </ImageBackground>
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
                    this.navigateTo('LoadingMatch');
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
