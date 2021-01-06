import React from 'react';
import {View} from 'react-native';
import styles from '@styles/styles';

class TitleCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let title = (
      <GudText
        style={[styles.sectionDescription, {flexShrink: 1}]}
        text={this.props.title}
      />
    );
    let text = (
      <GudText
        style={[styles.titleCardText, {flexShrink: 1}]}
        text={this.props.text}
      />
    );
    let body = this.props.body;

    return (
      <>
        <View style={[styles.cardContainerLeft]}>
          <View style={styles.flatCardItem}>
            <View style={styles.titleCardContainer}>
              {this.props.title ? title : null}
              {this.props.text ? text : null}
            </View>
          </View>
          <View style={styles.flatCardItemComponent}>{body}</View>
          <View style={[styles.gudItemSeparator]} />
        </View>
      </>
    );
  }
}

export default TitleCard;
