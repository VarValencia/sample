/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StatusBar, RecyclerViewBackedScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableHighlight} from 'react-native-gesture-handler';
import styles from '../scss/styles';

class PreferencesMainScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <StatusBar hidden={true} />
        <SafeAreaView>
          <View style={styles.body}>
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
                  <GudText style={styles.gudButtonText} text="Perfil" />
                </TouchableHighlight>
              </View>
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
                  <GudText style={styles.gudButtonText} text="Cuenta" />
                </TouchableHighlight>
              </View>
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
                  <GudText style={styles.gudButtonText} text="Match Básico" />
                </TouchableHighlight>
              </View>
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
                  <GudText style={styles.gudButtonText} text="Notificaciones" />
                </TouchableHighlight>
              </View>
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
                  <GudText style={styles.gudButtonText} text="Facturación" />
                </TouchableHighlight>
              </View>
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
                  <GudText
                    style={styles.gudButtonText}
                    text="Centro de ayuda"
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

export default PreferencesMainScreen;
