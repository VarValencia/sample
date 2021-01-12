/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Image, StatusBar} from 'react-native';
import styles from '@styles/styles';
import {ScrollView} from 'react-native-gesture-handler';

class AccountPreferences extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let emailBody = (
      <View>
        <View style={styles.inputContainer}>
          <ValidationField
            placeholder={'email@email.com'}
            maxLength={30}
            minLength={6}
          />
        </View>
      </View>
    );
    let passwordBody = (
      <View>
        <View style={styles.inputContainer}>
          <ValidationField
            placeholder={'password'}
            maxLength={30}
            minLength={6}
            password={true}
          />
        </View>
      </View>
    );
    let licenseBody = null;
    let deleteBody = null;
    // Dummy component
    let dummyComp = (
      <View style={styles.cardContainerLeft}>
        <GudText style={styles.title} text="Cuenta" />
        <TitleCard
          title={'Correo electrónico para inicio de sesión'}
          body={emailBody}
          editable
          buttonText="Mostrar"
        />
        <TitleCard
          title={'Contraseña de inicio de sesión'}
          body={passwordBody}
          editable
          buttonText="Cambiar contraseña"
        />
        <View style={styles.cardContainerLeft}>
          <GudText style={styles.SM} text="Tipo de licencia" />
        </View>
        <TitleCard
          title={'Subscripición Gud Match'}
          text={'Finalización del periodo de prueba en:'}
          body={licenseBody}
          editable
          buttonText="Actualizar"
        />
        <TitleCard
          title="Eliminar tu cuenta Gud Match"
          text={'cuenta cuya eliminación solicitas eliminar'}
          body={deleteBody}
          editable
          buttonText="Eliminar cuenta"
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

export default AccountPreferences;
