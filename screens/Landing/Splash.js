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

const Splash: () => React$Node = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <SafeAreaView>
        <View style={styles.bodyLogin}>
          <View style={styles.cardContainer}>
            <View style={styles.appImageContainer}>
              <Image
                style={styles.SampleCardImage}
                source={require('@android/images/LoginScreen.png')}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};
export default Splash;
