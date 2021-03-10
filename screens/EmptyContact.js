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

class EmptyContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
              <View style={styles.appImageContainer}>
                <Image
                  style={styles.gudCardImage}
                  source={require('@icons/emptyContacts.png')}
                />
              </View>
              <GudText
                style={styles.sectionDescription}
                text="¡Ups! Parece que todavía no tienes ningún contacto"
              />
              <GudText
                style={{textAlign: 'center'}}
                text="Comienza a conocer gente nueva y a agregarlos como amigos para poder consultar el historial de conversaciones aquí"
              />
              {/* </View> */}
              <View style={styles.buttonContainer}>
                <TouchableHighlight
                  style={[
                    styles.touchableActive,
                    styles.gudButton,
                    true ? styles.activeBtn : styles.inactiveBtn,
                  ]}
                  onPress={() => {
                    console.log('pressed button');
                    this.navigateTo('MatchConfigurationScreen');
                  }}>
                  <GudText
                    style={styles.gudButtonText}
                    text="¡Vamos a hacer Match!"
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

export default EmptyContact;
