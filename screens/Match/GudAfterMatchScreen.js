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
    name: 'Genial, guardar a este Sampleer',
    key: 1,
  },
  {
    name: 'Bien, pero prefiero probar con otros Sampleers',
    key: 2,
  },
  {
    name: 'Mal, problemas con el Sampleer',
    key: 3,
  },
  {
    name: 'Otros',
    key: 4,
  },
];
class SampleAfterMatchScreen extends React.Component {
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
    } else if (key.toString().length > 0 && key !== 3) {
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
    let selectedKey = this.state.selectedKey;
    let text = this.state.text;
    let isValid = this.validate(selectedKey, text);

    return (
      <>
        <StatusBar hidden={true} />
        <SafeAreaView>
          <View style={styles.body}>
            <View style={styles.cardContainer}>
              <ImageBackground
                source={require('@icons/SampleCircles.png')}
                style={styles.SampleBackgroundImage}>
                <View style={styles.SampleImageBackgroundContainer}>
                  <SampleText
                    style={styles.title}
                    accent={true}
                    text="Hey Pablo"
                  />
                  <View style={styles.SampleSeparator} />
                  <SampleText
                    style={styles.sectionDescription}
                    accent={true}
                    text="¿Cómo ha sido la experiencia con este Sampleer?"
                  />
                </View>
              </ImageBackground>
            </View>

            <View style={styles.cardContainer}>
              <AfterMatchRating
                onChange={(id, key) => this.onChange(id, key)}
              />
            </View>

            <View style={styles.cardContainer}>
              <View style={styles.buttonContainer}>
                <TouchableHighlight
                  disabled={!isValid}
                  style={[
                    styles.touchableActive,
                    styles.SampleButton,
                    isValid ? styles.activeBtn : styles.inactiveBtn,
                  ]}
                  underlayColor={ESS.value('$SampleGreenMedium')}
                  onPress={() => {
                    this.navigateTo('LoadingMatch');
                  }}>
                  <SampleText
                    style={[
                      styles.SampleButtonText,
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

export default SampleAfterMatchScreen;
