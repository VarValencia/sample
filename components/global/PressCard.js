import React from 'react';
import {View, Image} from 'react-native';
import styles from '@styles/styles';
import {TouchableHighlight} from 'react-native-gesture-handler';

class PressCard extends React.Component {
  constructor(props) {
    super(props);
    this.navigateTo = this.navigateTo.bind(this);
  }
  navigateTo(screen) {
    this.props.navigation.navigate(screen);
  }
  render() {
    var press = this.props.press;
    return (
      <>
        {this.props.important ? (
          <View>
            <TouchableHighlight
              style={[
                styles.pressCard,
                {backgroundColor: ESS.value('$gudGreenMedium')},
              ]}
              onPress={() => {
                this.props.onClick() || console.log('sample text');
              }}>
              <View style={styles.pressRight}>
                <GudText
                  style={styles.pressDescription}
                  text={press ? press.category : 'Category'}
                />
                <GudText
                  style={styles.pressTitle}
                  text={press ? press.title : 'Title'}
                />
                <GudText
                  style={styles.pressDescription}
                  text={press ? press.description : 'Descripción'}
                />
              </View>
            </TouchableHighlight>
          </View>
        ) : (
          <View>
            <TouchableHighlight
              onPress={() => {
                this.props.onClick() || console.log('sample text');
              }}>
              <HomeCard press={this.props.press} />
            </TouchableHighlight>
          </View>
        )}
      </>
    );
  }
}
export default PressCard;
