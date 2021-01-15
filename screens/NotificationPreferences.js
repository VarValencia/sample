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
import {isEnabled} from 'react-native/Libraries/Performance/Systrace';

class NotificationPreferences extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEnabled: false,
    };

    this.toggleSwitch = this.toggleSwitch.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  handleEdit(id) {
    console.log('Id', id);
  }
  toggleSwitch(status) {
    this.setState({isEnabled: status});
  }

  render() {
    let chatNotification = (
      <Switch
        onValueChange={(status) => this.toggleSwitch(status)}
        value={this.state.isEnabled}
      />
    );
    let soundNotification = (
      <Switch
        onValueChange={(status) => this.toggleSwitch(status)}
        value={this.state.isEnabled}
      />
    );
    let InspirateNotification = (
      <Switch
        onValueChange={(status) => this.toggleSwitch(status)}
        value={this.state.isEnabled}
      />
    );

    // Dummy component
    let dummyComp = (
      <View style={styles.cardContainerLeft}>
        <GudText style={styles.title} text="Notificaciones" />

        <TitleCard
          onEdit={(id) => this.handleEdit(id)}
          id="ChatNotif"
          title={'Notificaciones de chat'}
          text={'Recibe notificaciones para mensajes nuevos'}
          body={chatNotification}
        />
        <TitleCard
          onEdit={(id) => this.handleEdit(id)}
          id="SoundsNotif"
          title={'Sonidos de notificaciones'}
          body={soundNotification}
          text={'Reproducir sonidos para mensajes nuevos'}
        />
        <TitleCard
          onEdit={(id) => this.handleEdit(id)}
          id="InspirateNotif"
          title={'Notificaciones de Inspírate'}
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
            {dummyComp}
          </ScrollView>
        </View>
      </>
    );
  }
}

export default NotificationPreferences;
