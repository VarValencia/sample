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
                  style={styles.gudCardImage}
                  source={require('@icons/firstSettings.png')}
                />
              </View>
              <GudText
                style={styles.sectionDescription}
                text="¡Empieza ahora a configurar tu cuenta! "
              />
              <GudText
                style={{textAlign: 'center'}}
                text="Eres lo que muestras"
              />
              <GudText
                style={{textAlign: 'center'}}
                text="Edita tu perfil con sentido común, si no sabes como, te ofrecemos diez consejos prácticos de como hacerlo"
              />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableHighlight
                style={[
                  styles.gudButton,
                  styles.touchableActive,
                  styles.activeBtn,
                ]}
                underlayColor={ESS.value('$gudGreenMedium')}
                onPress={() => {
                  console.log('you tapped the button HelpCenter');
                }}>
                <GudText
                  style={styles.gudButtonText}
                  text="Configurar cuenta"
                />
              </TouchableHighlight>
              <TouchableHighlight
                style={[styles.gudButton, styles.touchableActive]}
                underlayColor={ESS.value('$gudGreenMedium')}
                onPress={() => {
                  console.log('you tapped the button technic support');
                }}>
                <GudText style={styles.gudButtonText} text="Leer el artículo" />
              </TouchableHighlight>
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }
}

export default StartConfiguring;
