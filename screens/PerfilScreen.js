/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StatusBar, TouchableHighlight} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

class PerfilScreen extends React.Component {
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
        'Soy un explorador que le gusta buscar y descubrir... La verdad está ahi fuera',
    };
    let profileCard = (
      <View style={styles.profileCardContainer}>
        <UserProfileCard user={user} />
      </View>
    );
    let dummyText = '';

    // Dummy component
    let dummyComp = (
      <>
        <SampleText style={styles.title} text="Perfil" />
        <View style={styles.SampleTitleSeparator} />
        {profileCard}
        <TitleCard
          onEdit={(id) => this.handleEdit(id)}
          id="summary"
          title={'Idiomas'}
          text={
            'Español, Inglés (nivel conversación y escrito) y algo de francés (no para escribir, pero si para hablar).'
          }
        />
        <TitleCard
          onEdit={(id) => this.handleEdit(id)}
          id="Intereses"
          title={'Intereses'}
          text={dummyText}
        />
        <TitleCard
          onEdit={(id) => this.handleEdit(id)}
          id="Fotos"
          title={'Fotos'}
          text={dummyText}
        />
        <TitleCard
          onEdit={(id) => this.handleEdit(id)}
          id="native"
          title={'Idioma nativo'}
          text={dummyText}
        />
        <View style={[styles.emergencyCallContainer]}>
          <SampleText text={'Mensaje de llamada a la acción'} />
          <TouchableHighlight
            style={[styles.SampleButton]}
            underlayColor={ESS.value('$SampleGreenMedium')}
            onPress={() => {
              console.log('Boton');
            }}>
            <SampleText style={styles.SampleButtonText} text="Boton" />
          </TouchableHighlight>
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

export default PerfilScreen;
