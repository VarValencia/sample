import React from 'react';
import {View, Image} from 'react-native';
import styles from '@styles/styles';

class UserProfileCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var user = this.props.user;
    return (
      <View style={styles.profileCard}>
        <Image
          style={styles.profilePicture}
          source={this.props.source || require('@icons/placeholder.png')}
        />
        <View style={{flexShrink: 1}}>
          <SampleText
            style={styles.userName}
            text={user ? user.name : 'Usuario'}
          />
          <SampleText
            style={styles.userNickname}
            text={user ? user.description : 'Descripción'}
          />
          <SampleText
            style={styles.userDescription}
            text={user ? user.bio : 'Bio'}
          />
        </View>
      </View>
    );
  }
}
export default UserProfileCard;
