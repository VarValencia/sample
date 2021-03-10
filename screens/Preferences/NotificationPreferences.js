/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Switch, StatusBar} from 'react-native';
import styles from '@styles/styles';
import {ScrollView} from 'react-native-gesture-handler';

class NotificationPreferences extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEnabledOne: null,
      isEnableTwo: null,
      isEnableThree: null,
    };
    toggleSwitch = (switchNumber) => {
      this.setState({
        isEnabledOne:
          switchNumber === this.state.isEnabledOne ? null : switchNumber,
        isEnabledTwo:
          switchNumber === this.state.isEnabledTwo ? null : switchNumber,
        isEnabledThree:
          switchNumber === this.state.isEnabledThree ? null : switchNumber,
      });
    };
    this.handleEdit = this.handleEdit.bind(this);
  }
  handleEdit(id) {
    console.log('Id', id);
  }
  switchOne = (value) => {
    toggleSwitch(1);
  };
  switchTwo = (value) => {
    toggleSwitch(2);
  };
  switchThree = (value) => {
    toggleSwitch(3);
  };

  render() {
    let chatNotification = (
      <View style={{flexDirection: 'row'}}>
        <Switch
          onValueChange={this.switchOne}
          value={this.state.isEnabledOne === 1}
        />
      </View>
    );
    let soundNotification = (
      <Switch
        onValueChange={this.switchTwo}
        value={this.state.isEnabledTwo === 2}
      />
    );
    let InspirateNotification = (
      <Switch
        onValueChange={this.switchThree}
        value={this.state.isEnabledThree === 3}
      />
    );

    let body = (
      <View style={styles.cardContainerLeft}>
        <GudText style={styles.title} text="Notificaciones" />

        <TitleCard
          onEdit={(id) => this.handleEdit(id)}
          id="ChatNotif"
          title={'Notificaciones de chat'}
          direction="row"
          text={'Recibe notificaciones para mensajes nuevos'}
          body={chatNotification}
        />
        <TitleCard
          onEdit={(id) => this.handleEdit(id)}
          id="SoundsNotif"
          title={'Sonidos de notificaciones'}
          direction="row"
          body={soundNotification}
          text={'Reproducir sonidos para mensajes nuevos'}
        />
        <TitleCard
          onEdit={(id) => this.handleEdit(id)}
          id="InspirateNotif"
          title={'Notificaciones de Inspírate'}
          direction="row"
          body={InspirateNotification}
          text={'Reproducir sonidos para mensajes nuevos'}
        />
      </View>
    );
    return (
      <>
        <StatusBar hidden={true} />
        <View style={styles.body}>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={styles.scrollView}
            showsVerticalScrollIndicator={false}>
            {body}
          </ScrollView>
        </View>
      </>
    );
  }
}

export default NotificationPreferences;
