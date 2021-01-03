/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StatusBar, Image, TextInput} from 'react-native';
import styles from '@styles/styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableHighlight} from 'react-native-gesture-handler';
import GudText from '../components/global/GudText';

const OpenEmailScreen: () => React$Node = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <SafeAreaView>
        <View style={styles.body}>
          <View style={styles.cardContainerLeft}>
            <GudText style={styles.sectionDescription} text="Perfil" />
          </View>
          <View style={styles.cardContainer}></View>
        </View>
      </SafeAreaView>
    </>
  );
};
export default OpenEmailScreen;
