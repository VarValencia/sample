import React from 'react';

import styles from '@styles/styles';
import {View, Switch, TouchableHighlight, Image, Animated} from 'react-native';
import * as NavigationService from '@scripts/NavigationService';
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.navigateTo = this.navigateTo.bind(this);

    this.state = {
      expanded: false,
      animation: new Animated.Value(1),
      isEnabled: null,
    };
    this.toggle.bind(this);
  }
  navigateTo(screen) {
    this.props.navigation.navigate(screen);
  }
  toggleSwitch = (switchNumber) => {
    this.setState({
      isEnabled: switchNumber === this.state.isEnabledOne ? null : switchNumber,
    });
  };

  toggle() {
    this.setState({
      expanded: !this.state.expanded,
    });

    // this.state.animation.setValue(initialValue); //Step 3
    // Animated.spring(
    //   //Step 4
    //   this.state.animation,
    //   {
    //     toValue: finalValue,
    //   },
    // ).start(); //Step 5
  }

  render() {
    return (
      <>
        <View style={styles.containerRowPadding}>
          <Image
            style={styles.SampleIcon}
            source={require('@icons/1x/SampleLogo.png')}
          />
        </View>
        <View style={styles.containerRowPadding}>
          <TouchableHighlight
            style={styles.leftHeaderContainer}
            onPress={() => {
              NavigationService.navigateTo('PerfilScreen'),
                console.log('something');
            }}>
            <View>
              <SampleText style={styles.SampleText} text={'Hola!'} />
              <SampleText
                style={[
                  styles.SampleText,
                  {color: ESS.value('$SampleGreenDark')},
                ]}
                text="Pablo"
              />
            </View>
          </TouchableHighlight>
          <View style={styles.rightHeaderContainer}>
            <Switch
              onValueChange={this.toggleSwitch}
              value={this.state.isEnabled}
            />
            <TouchableHighlight
              style={styles.SampleIcon}
              onPress={() => {
                NavigationService.navigateTo('PreferencesScreen');
                console.log('something');
              }}>
              <Image
                style={styles.SampleIcon}
                source={
                  this.props.rightButton || require('@icons/placeholder.png')
                }
              />
            </TouchableHighlight>
          </View>
        </View>
      </>
    );
  }
}

export default Header;
