/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StatusBar, TouchableHighlight, ImageBackground} from 'react-native';
import styles from '@styles/styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import GudText from '../components/GudText';

const opinion = [
  {
    name: 'Genial, guardar a este Guder',
    key: 1,
  },
  {
    name: 'Bien, pero prefiero probar con otros guders',
    key: 2,
  },
  {
    name: 'Mal, problemas con el guder',
    key: 3,
  },
  {
    name: 'Otros',
    key: 4,
  },
];
class GudAfterMatchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKey: ''
    };
    this.validate = this.validate.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  validate(){
    return !this.state.selectedKey.toString().length <= 0;
  }
  onChange(key) {
    this.setState({selectedKey: key});
  }
  render() {
    let isValid = this.validate();
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
                    text="Hey Pablo"
                  />
                  <View style={styles.gudSeparator} />
                  <GudText
                    style={styles.sectionDescription}
                    text="¿Cómo ha sido la experiencia con este Gudder?"
                  />
                </View>
              </ImageBackground>
            </View>
            <View style={styles.cardContainerLeft}>
              <GRadioButtonGroup options={opinion} onPress={key => this.onChange(key)}/>
            </View>
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

export default GudAfterMatchScreen;
