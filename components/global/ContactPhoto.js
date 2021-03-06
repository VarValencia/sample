import React from 'react';
import {View, Image, ImageBackground, TouchableHighlight} from 'react-native';
import styles from '@styles/styles';

class ContactPhoto extends React.Component {
  constructor(props) {
    super(props);

    this.navigateTo = this.navigateTo.bind(this);
  }
  navigateTo(screen) {
    this.props.navigation.navigate(screen);
  }
  render() {
    return (
      <>
        {this.props.online ? (
          <View>
            <TouchableHighlight
              style={[styles.SamplePhoto, styles.activeBtn]}
              underlayColor={ESS.value('$SampleGreenMedium')}
              onPress={() => {
                this.props.onClick()
                  ? this.props.onClick()
                  : console.log('sample text');
              }}>
              <View style={styles.SampleIcon}>
                <ImageBackground
                  style={styles.profilePicture}
                  source={
                    this.props.source || require('@icons/placeholder.png')
                  }>
                  <Image
                    style={styles.OnlineIcon}
                    source={require('@icons/OnlineIcon.png')}
                  />
                </ImageBackground>
              </View>
            </TouchableHighlight>
          </View>
        ) : (
          <View>
            <TouchableHighlight
              style={[styles.SamplePhoto, styles.activeBtn]}
              underlayColor={ESS.value('$SampleGreenMedium')}
              onPress={() => {
                this.props.onClick() || console.log('sample text');
              }}>
              <View style={styles.SampleIcon}>
                <ImageBackground
                  style={[styles.profilePicture, styles.inactiveBtn]}
                  source={
                    this.props.source || require('@icons/placeholder.png')
                  }
                />
              </View>
            </TouchableHighlight>
          </View>
        )}
      </>
    );
  }
}
export default ContactPhoto;
