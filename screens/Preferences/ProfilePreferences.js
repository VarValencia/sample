/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Image, Switch, StatusBar} from 'react-native';
import {ScrollView, TouchableHighlight} from 'react-native-gesture-handler';
import UserProfileCard from '../../components/global/profile_items/UserProfileCard';
import GudText from '../../components/global/GudText';

class ProfilePreferences extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let notificationsBody = (
      <View style={styles.cardContainer}>
        <GudText
          style={styles.textMD}
          text={
            'Recibe notificaciones cuando un username esté disponible'
          }
        />
      </View>
    );
    let restringeBody = (
      <View style={styles.cardContainer}>
        <GudText
          style={styles.textMD}
          text={
            'Limita la interacción con este usuario sin necesidad de denunciar o eliminar contacto'
          }
        />
      </View>
    );
    let reportBody = (
      <View style={styles.cardContainer}>
        <GudText
          style={[styles.sectionDescription, {padding: 10}]}
          text={'¿Problemas con el guder? Cuéntanos qué ha pasado:'}
        />
        <ValidationField
          style={styles.textInputContainer}
          maxLength={12}
          minLength={6}
          multiline={true}
          numberOfLines={4}
        />
      </View>
    );
    let DeleteBody = (
      <View style={styles.cardContainer}>
        <GudText
          style={styles.textMD}
          text={'¿Estás seguro de que deseas eliminar este contacto?'}
        />
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            style={[
              styles.touchableActive,
              styles.gudButton,
              true ? styles.activeBtn : styles.inactiveBtn,
            ]}
            onPress={() => {
              this.onSubmit();
            }}>
            <GudText style={styles.gudButtonText} text="Si eliminar" />
          </TouchableHighlight>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            style={[
              styles.touchableActive,
              styles.gudButton,
              true ? styles.activeBtn : styles.inactiveBtn,
            ]}
            onPress={() => {
              this.onSubmit();
            }}>
            <GudText style={styles.gudButtonText} text="Mejor no" />
          </TouchableHighlight>
        </View>
      </View>
    );
    // Dummy component
    let dummyComp = (
      <>
        <GudText style={styles.title} text="Perfil" />
        <View style={styles.gudTitleSeparator} />
        <TitleCard title={'Notificaciones'} text={null} body={notificationsBody} />
        <TitleCard title={'Restringir'} text={null} body={restringeBody} />
        <TitleCard title={'Denunciar'} text={null} body={reportBody} />
        <TitleCard title={'Eliminar contacto'} text={null} body={DeleteBody} />
        <View style={styles.appImageContainer}>
          <Image
            style={styles.gudCardImage}
            source={require('@icons/ConfigIcon.png')}
          />
        </View>
      </>
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

export default ProfilePreferences;
