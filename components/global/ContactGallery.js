import React from 'react';
import {View, Image, ImageBackground, TouchableHighlight} from 'react-native';
import styles from '@styles/styles';
import * as NavigationService from '@scripts/NavigationService';
import {ScrollView} from 'react-native-gesture-handler';
class ContactGallery extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <View style={styles.cardContainer}>
          <GudText />
          <View style={styles.containerGallery}>
            <ContactPhoto
              onClick={() => {
                NavigationService.navigateTo('NonFriendProfile');
              }}
              online={true}
            />
            <ContactPhoto />
            <ContactPhoto />
            <ContactPhoto
              onClick={() => {
                NavigationService.navigateTo('NonFriendProfile');
              }}
              online={true}
            />
          </View>
          <View style={styles.containerGallery}>
            <ContactPhoto />
            <ContactPhoto />
            <ContactPhoto />
            <ContactPhoto />
          </View>
          <View style={styles.containerGallery}>
            <ContactPhoto />
            <ContactPhoto />
            <ContactPhoto />
            <ContactPhoto />
          </View>
          <View style={styles.containerGallery}>
            <ContactPhoto />
            <ContactPhoto />
            <ContactPhoto />
            <ContactPhoto />
          </View>
          <View style={styles.containerGallery}>
            <ContactPhoto />
            <ContactPhoto />
            <ContactPhoto />
            <ContactPhoto />
          </View>
          <View style={styles.containerGallery}>
            <ContactPhoto />
            <ContactPhoto />
            <ContactPhoto />
            <ContactPhoto />
          </View>
          <View style={styles.containerGallery}>
            <ContactPhoto />
            <ContactPhoto />
            <ContactPhoto />
            <ContactPhoto />
          </View>
        </View>
      </>
    );
  }
}
export default ContactGallery;
