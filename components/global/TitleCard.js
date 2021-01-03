import React from 'react';
import {View} from 'react-native';
import styles from '@styles/styles';

class TitleCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let title = (
      <GudText style={styles.sectionDescription} text={this.props.title} />
    );
    let text = <GudText style={styles.titleCardText} text={this.props.text} />;
    let body = this.props.body;

    return (
      <View style={styles.cardContainer}>
        <View style={styles.cardContainerLeft}>
          <View style={styles.flatCardItem}>
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'flex-start',
                flex: 9,
              }}>
              {title}
              {text}
              <View style={styles.flatCardItemComponent}>{body}</View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default TitleCard;
