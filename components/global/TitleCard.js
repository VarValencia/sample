import React from 'react';
import {View} from 'react-native';
import styles from '@styles/styles';
import {TouchableHighlight} from 'react-native-gesture-handler';

class TitleCard extends React.Component {
  constructor(props) {
    super(props);

    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit() {
    this.props.onEdit(this.props.id);
  }

  render() {
    let title = (
      <GudText
        style={[styles.titleCardTitle, {flexShrink: 1}]}
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
        <View style={styles.cardContainerLeft}>
          <View style={styles.gudItemSeparator} />
          <View style={styles.flatCardItem}>
            <View style={styles.titleCardContainer}>
              {this.props.title ? title : null}
              {this.props.text ? text : null}
            </View>
          </View>
          <View style={styles.flatCardItemComponent}>{body}</View>
          {this.props.editable ? (
            <View style={styles.containerButtonRight}>
              <TouchableHighlight
                style={styles.titleCardEditButton}
                underlayColor={ESS.value('$gudWhite')}
                onPress={() => {
                  this.handleEdit();
                }}>
                <GudText
                  style={styles.titleCardEditable}
                  text={this.props.buttonText}
                />
              </TouchableHighlight>
            </View>
          ) : null}
        </View>
      </>
    );
  }
}

export default TitleCard;
