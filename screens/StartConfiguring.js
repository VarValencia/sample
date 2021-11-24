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

class StartConfiguring extends React.Component {
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
              <View style={styles.appImageContainer}>
                <Image
                  style={styles.SampleCardImage}
                  source={require('@icons/firstSettings.png')}
                />
              </View>
              <SampleText
                style={styles.sectionDescription}
                text="¡Empieza ahora a configurar tu cuenta! "
              />
              <SampleText
                style={{textAlign: 'center'}}
                text="Eres lo que muestras"
              />
              <SampleText
                style={{textAlign: 'center'}}
                text="Edita tu perfil con sentido común, si no sabes como, te ofrecemos diez consejos prácticos de como hacerlo"
              />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableHighlight
                style={[
                  styles.SampleButton,
                  styles.touchableActive,
                  styles.activeBtn,
                ]}
                underlayColor={ESS.value('$SampleGreenMedium')}
                onPress={() => {
                  console.log('you tapped the button HelpCenter');
                }}>
                <SampleText
                  style={styles.SampleButtonText}
                  text="Configurar cuenta"
                />
              </TouchableHighlight>
              <TouchableHighlight
                style={[styles.SampleButton, styles.touchableActive]}
                underlayColor={ESS.value('$SampleGreenMedium')}
                onPress={() => {
                  console.log('you tapped the button technic support');
                }}>
                <SampleText
                  style={styles.SampleButtonText}
                  text="Leer el artículo"
                />
              </TouchableHighlight>
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }
}

export default StartConfiguring;
