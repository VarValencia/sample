import React from 'react';
import {View, Image} from 'react-native';
import styles from '@styles/styles';

class HomeCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var press = this.props.press;
    return (
      <>
        <View style={styles.pressCard}>
          <View style={styles.pressLeft}>
            <GudText
              style={styles.pressTitle}
              text={press.title ? press.title : 'título'}
              accent={true}
            />
            <GudText
              style={styles.pressDescription}
              text={press.description ? press.description : 'descripción'}
            />
          </View>
          <View styles={styles.pressRight}>
            <Image
              style={styles.pressCardPicture}
              source={this.props.source || require('@icons/placeholder.png')}
            />
          </View>
        </View>
      </>
    );
  }
}
export default HomeCard;
