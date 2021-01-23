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
        <View>
          <GudText
            style={styles.userName}
            text={user ? user.name : 'Usuario'}
          />
          <GudText
            style={styles.userDescription}
            text={user ? user.description : 'Descripción'}
          />
          <GudText
            style={styles.userDescription}
            text={user ? user.bio : 'Bio'}
          />
        </View>
      </View>
    );
  }
}
export default UserProfileCard;
