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
import * as NavigationService from '@scripts/NavigationService';
class Home extends React.Component {
  constructor(props) {
    super(props);

    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(id) {
    console.log('Id', id);
  }

  render() {
    let press1 = {
      title: 'Sala de Match',
      description:
        'En este espacio hay un texto para animar al usuario a usar Match',
    };
    let pressCard1 = (
      <PressCard
        press={press1}
        onClick={() => {
          NavigationService.navigateTo('UserPreferences');
        }}
      />
    );

    let press2 = {
      title: 'Las lineas rojas de Gud',
      description:
        'Hay unos límites en todas las aplicaciones de Gud que en ningún caso pueden ser traspasados',
    };
    let pressCard2 = (
      <PressCard
        press={press2}
        onClick={() => {
          NavigationService.navigateTo('UserPreferences');
        }}
      />
    );

    let press3 = {
      title: 'Temática',
      description:
        'En este espacio hay un texto para animar al usuario a usar Match',
      category: 'categoría',
    };
    let pressCardAccent = (
      <PressCard
        press={press3}
        important
        onClick={() => {
          NavigationService.navigateTo('UserPreferences');
        }}
      />
    );
    let press4 = {
      title: 'Sala de Match',
      description:
        'En este espacio hay un texto para animar al usuario a usar Match',
      category: 'categoría',
    };

    let quote = {
      title: '"',
      description:
        'El mundo está lleno de personas solitarias por no dar el primer paso."',
    };
    let pressCard3 = (
      <PressCard
        press={quote}
        onClick={() => {
          NavigationService.navigateTo('UserPreferences');
        }}
      />
    );

    // Dummy componentx
    let dummyComp = (
      <>
        <View style={styles.pressCardContainer}>
          {pressCard1}
          {pressCard2}
          {pressCardAccent}
          {pressCard3}
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

export default Home;
