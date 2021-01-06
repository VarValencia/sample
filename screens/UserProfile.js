/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Image, StatusBar} from 'react-native';
import {ScrollView, TouchableHighlight} from 'react-native-gesture-handler';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(id) {
    console.log('Id', id);
  }

  render() {
    let profileCard = (
      <View style={styles.cardContainer}>
        <UserProfileCard />
      </View>
    );
    let dummyText = 'Lorem ipsum dolor sit amet';

    // Dummy component
    let dummyComp = (
      <>
        <GudText style={styles.title} text="Perfil" />
        <View style={styles.gudTitleSeparator} />
        {profileCard}
        <TitleCard onEdit={id => this.handleEdit(id)} id='summary' title={'Presentación'} text={dummyText} editable buttonText="Editar"/>
        <TitleCard onEdit={id => this.handleEdit(id)} id='languages' title={'Idiomas para conversar'} text={dummyText} editable buttonText="Editar"/>
        <TitleCard onEdit={id => this.handleEdit(id)} id='interests' title={'Intereses'} text={dummyText} editable buttonText="Editar"/>
        <TitleCard onEdit={id => this.handleEdit(id)} id='native' title={'Idioma nativo'} text={dummyText} editable buttonText="Editar"/>
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

export default UserProfile;
