import React from 'react';
import styles from '@styles/styles';
import {View, TouchableHighlight, Image, Animated} from 'react-native';

class MenuItem extends React.Component {
  constructor(props) {
    super(props);

    this.icons = {
      right: require('@icons/rightArrow.png'),
      down: require('@icons/downArrow.png'),
    };
    this.state = {
      expanded: false,
      animation: new Animated.Value(1),
    };
    this.toggle.bind(this);
  }
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
    let icon = this.icons['right'];

    if (this.state.expanded) {
      icon = this.icons['down'];
    }
    return (
      <TouchableHighlight
        style={styles.menuItemBase}
        underlayColor={ESS.value('$gudLightGray')}
        onPress={() => {
          this.props.expansive
            ? this.toggle()
            : this.props.onClick(this.props.id);
        }}>
        <>
          <View style={styles.menuItemContainer}>
            <Image
              style={styles.gudIcon}
              source={this.props.icon || require('@icons/placeholder.png')}
            />
            <GudText style={styles.menuItemText} text={this.props.text} />
          </View>
          <View style={styles.gudArrowIcon}>
            <Image source={icon} />
          </View>
        </>
      </TouchableHighlight>
    );
  }
}

export default MenuItem;
