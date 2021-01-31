/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StatusBar} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

class UserPreferences extends React.Component {
  constructor(props) {
    super(props);

    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(id) {
    console.log('Id', id);
  }

  render() {
    let user = {
      name: 'Pablo',
      description: 'Explorador',
      bio:
        'Soy un buscador, me gusta conocer y descubrir siempre algo nuevo ahi fuera',
    };
    let profileCard = (
      <View style={styles.cardContainer}>
        <UserProfileCard user={user} />
      </View>
    );

    // Dummy component
    let dummyComp = (
      <>
        <GudText style={styles.title} text="Perfil" />
        <View style={styles.gudTitleSeparator} />
        {profileCard}
        <TitleCard
          onEdit={(id) => this.handleEdit(id)}
          id="summary"
          title={'Presentación'}
          text={'Soy un buscador, me gusta conocer '}
          editable
          buttonText="Editar"
        />
        <TitleCard
          onEdit={(id) => this.handleEdit(id)}
          id="languages"
          title={'Idiomas para conversar'}
          text={'Español  y algo de francés'}
          editable
          buttonText="Editar"
        />
        <TitleCard
          onEdit={(id) => this.handleEdit(id)}
          id="interests"
          title={'Intereses'}
          text={'Viajar, correr, tocar la guitarra,canturrear. alpinismo'}
          editable
          buttonText="Editar"
        />
        <TitleCard
          onEdit={(id) => this.handleEdit(id)}
          id="native"
          title={'Idioma nativo'}
          text={'Español'}
          editable
          buttonText="Editar"
        />
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

export default UserPreferences;
