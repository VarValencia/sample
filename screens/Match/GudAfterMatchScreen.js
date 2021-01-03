/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  StatusBar,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

// Components
import AfterMatchRating from '@components/AfterMatchRating';

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
      selectedKey: '',
      text: '',
    };
    this.validate = this.validate.bind(this);
    this.onChange = this.onChange.bind(this);
    this.navigateTo = this.navigateTo.bind(this);
  }
  validate(key, text) {
    if (key == 3 && text.length > 0) {
      return true;
    } else if (key !== 3) {
      return true;
    }
    return false;
  }
  onChange(id, key) {
    if (id == 0) {
      this.setState({selectedKey: key});
    } else if (id == 1) {
      this.setState({text: key});
    }
  }
  navigateTo(screen) {
    this.props.navigation.navigate(screen);
  }
  render() {
    let isValid = this.validate(this.state.selectedKey, this.state.text);
    return (
      <>
        <StatusBar hidden={true} />
        <SafeAreaView>
          <View style={styles.body}>
            <ImageBackground
              source={require('@icons/GudCircles.png')}
              style={styles.gudBackgroundImage}>
              <View style={styles.gudImageBackgroundContainer}>
                <GudText style={styles.title} accent={true} text="Hey Pablo" />
                <View style={styles.gudSeparator} />
                <GudText
                  style={styles.sectionDescription}
                  accent={true}
                  text="¿Cómo ha sido la experiencia con este Guder?"
                />
              </View>
            </ImageBackground>

            <AfterMatchRating onChange={(id, key) => this.onChange(id, key)} />

            <View style={styles.cardContainer}>
              <View style={styles.buttonContainer}>
                <TouchableHighlight
                  disabled={!isValid}
                  style={[
                    styles.touchableActive,
                    styles.gudButton,
                    isValid ? styles.activeBtn : styles.inactiveBtn,
                  ]}
                  underlayColor={ESS.value('$gudGreenMedium')}
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
