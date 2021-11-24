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

    this.handleEdit = this.handleEdit.bind(this);
  }
  handleEdit(id) {
    console.log('Id', id);
  }
  render() {
    let emailBody = (
      <View>
        <View style={styles.inputContainer}>
          <ValidationField
            // placeholder={'email@email.com'}
            maxLength={30}
            minLength={6}
            handleValue={(event) => null}
          />
        </View>
      </View>
    );
    let passwordBody = (
      <View>
        <View style={styles.inputContainer}>
          <ValidationField
            // placeholder={'password'}
            maxLength={30}
            minLength={6}
            password={true}
            handleValue={(event) => null}
          />
        </View>
      </View>
    );
    let licenseBody = null;
    let deleteBody = null;
    // Dummy component
    let dummyComp = (
      <View style={styles.cardContainerLeft}>
        <SampleText style={styles.title} text="Cuenta" />
        <TitleCard
          onEdit={(id) => this.handleEdit(id)}
          id="Correo"
          title={'Correo electrónico para inicio de sesión'}
          body={emailBody}
          editable
          buttonText="Mostrar"
        />
        <TitleCard
          onEdit={(id) => this.handleEdit(id)}
          id="Password"
          title={'Contraseña de inicio de sesión'}
          body={passwordBody}
          editable
          buttonText="Cambiar contraseña"
        />
        <View style={styles.cardContainerLeft}>
          <SampleText style={styles.SM} text="Tipo de licencia" />
        </View>
        <TitleCard
          onEdit={(id) => this.handleEdit(id)}
          id="License"
          title={'Subscripición Sample Match'}
          text={'Finalización del periodo de prueba en:'}
          body={licenseBody}
          editable
          buttonText="Actualizar"
        />
        <TitleCard
          onEdit={(id) => this.handleEdit(id)}
          id="Delete"
          title="Eliminar tu cuenta Sample Match"
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
