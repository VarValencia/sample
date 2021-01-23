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
              styles.profileCard,
              {backgroundColor: ESS.value('$gudGreenMedium')},
            ]}>
            <View>
              <GudText
                style={styles.textSM}
                text={press ? press.cattegory : 'cattegory'}
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
          <View style={styles.profileCard}>
            <View>
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
            <Image
              style={styles.profilePicture}
              source={this.props.source || require('@icons/placeholder.png')}
            />
          </View>
        )}
      </>
    );
  }
}
export default UserProfileCard;
