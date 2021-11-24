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

class SampleContactScreen extends React.Component {
  constructor(props) {
    super(props);

    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(id) {
    console.log('Id', id);
  }

  render() {
    let dummyText = '';

    // Dummy component
    let dummyComp = (
      <>
        <View style={styles.cardContainerLeft}>
          <ContactGallery />
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
            showsVerticalScrollIndicator={true}>
            {dummyComp}
          </ScrollView>
        </View>
      </>
    );
  }
}

export default SampleContactScreen;
