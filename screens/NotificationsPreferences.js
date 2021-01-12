/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StatusBar} from 'react-native';
import styles from '@styles/styles';
import {ScrollView} from 'react-native-gesture-handler';

class NotificationsPreferences extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let chatNotification = null;
    let soundNotification = null;
    let InspirateNotification = null;

    // Dummy component
    let dummyComp = (
      <View style={styles.cardContainerLeft}>
        <GudText style={styles.title} text="Notificaciones" />
        <TitleCard
          title={'Notificaciones de chat'}
          text={'Recibe notificaciones para mensajes nuevos'}
          body={chatNotification}
          editable
          buttonText="Botón"
        />
        <TitleCard
          title={'Sonidos de notificaciones'}
          body={soundNotification}
          text={'Reproducir sonidos para mensajes nuevos'}
          editable
          buttonText="Botón"
        />
        <TitleCard
          title={'Notificaciones de Inspirate'}
          text={
            'Recibe notificaciones cada vez que agreguemos nuevo contenido a la sección de Inspírate'
          }
          body={InspirateNotification}
          editable
          buttonText="Botón"
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

export default NotificationsPreferences;
