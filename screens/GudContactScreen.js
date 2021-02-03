/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StatusBar, TouchableHighlight} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styles from '../scss/styles';

class NonFriendProfile extends React.Component {
  constructor(props) {
    super(props);

    this.handleEdit = this.handleEdit.bind(this);
    this.navigateTo = this.navigateTo.bind(this);
  }

  handleEdit(id) {
    console.log('Id', id);
  }
  navigateTo(screen) {
    this.props.navigation.navigate(screen);
  }

  render() {
    let dummyText = '';

    // Dummy component
    let dummyComp = (
      <>
        <View style={styles.cardContainerLeft}>
          <ContactPhoto
            onClick={() => {
              this.navigateTo('UserPreferences');
            }}
            online={true}
          />
          <ContactPhoto
            onClick={() => {
              this.navigateTo('UserPreferences');
            }}
          />
        </View>
      </>
    );

    return (
      <>
        <StatusBar hidden={true} />
        <View style={styles.body}>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={styles.scrollView}
            showsVerticalScrollIndicator={false}>
            {dummyComp}
          </ScrollView>
        </View>
      </>
    );
  }
}

export default NonFriendProfile;
