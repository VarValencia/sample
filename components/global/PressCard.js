import React from 'react';
import {View, Image} from 'react-native';
import styles from '@styles/styles';

class UserProfileCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var press = this.props.press;
    return (
      <>
        {this.props.important ? (
          <View
            style={[
              styles.pressCard,
              {backgroundColor: ESS.value('$gudGreenMedium')},
            ]}>
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
          </View>
        ) : (
          <View style={styles.pressCard}>
            <View style={styles.pressLeft}>
              <GudText
                style={styles.pressTitle}
                text={press ? press.title : 'Title'}
                accent={true}
              />
              <GudText
                style={styles.pressDescription}
                text={press ? press.description : 'Descripción'}
              />
            </View>
            <View styles={styles.pressRight}>
              <Image
                style={styles.pressCardPicture}
                source={this.props.source || require('@icons/placeholder.png')}
              />
            </View>
          </View>
        )}
      </>
    );
  }
}
export default UserProfileCard;
