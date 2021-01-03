/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableHighlight} from 'react-native-gesture-handler';
import styles from '../scss/styles';

class OpenEmailScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Dummy data
    let items = [
      {label: 'Test 1', icon: require('@icons/placeholder.png')},
      {label: 'Test 2', icon: require('@icons/placeholder.png')},
      {label: 'Test 3', icon: require('@icons/placeholder.png')},
      {label: 'Test 4', icon: require('@icons/placeholder.png')},
      {label: 'Test 5', icon: require('@icons/placeholder.png')},
      {label: 'Test 6', icon: require('@icons/placeholder.png')},
      {label: 'Test', icon: require('@icons/placeholder.png')},
    ];
    // Dummy component
    let dummyComp = (
      <View style={styles.cardContainer}>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            style={[
              styles.touchableActive,
              styles.gudButton,
              styles.inactiveBtn,
            ]}
            underlayColor={ESS.value('$gudGreenMedium')}
            onPress={() => {}}>
            <GudText style={[styles.gudButtonText]} text="Acceder" />
          </TouchableHighlight>
        </View>
        <View style={styles.cardContainer}>
          <GudDropDown
            onItemSelected={(item) => console.log('Item', item)}
            items={items}
          />
        </View>
      </View>
    );
    var dummyBody = 'Lorem ipsum dolor sit amet rican pieyaso colocao';
    return (
      <>
        <StatusBar hidden={true} />
        <SafeAreaView>
          <View style={styles.body}>
            <View style={styles.cardContainer}>
              <TitleCard text={dummyBody} body={dummyComp} />
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }
}

export default OpenEmailScreen;
