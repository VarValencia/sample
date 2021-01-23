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

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(id) {
    console.log('Id', id);
  }

  render() {
    let dummyText = '';
    let press1 = {
      title: 'Sala de Match',
      description:
        'En este espacio hay un texto para animar al usuario a usar Match',
    };
    let pressCard1 = <PressCard press={press1} />;

    let press2 = {
      title: 'Las lineas rojas de Gud',
      description:
        'Hay unos límites en todas las aplicaciones de Gud que en ningún caso pueden ser traspasados',
    };
    let pressCard2 = <PressCard press={press2} />;

    let press3 = {
      title: 'Temática',
      description:
        'En este espacio hay un texto para animar al usuario a usar Match',
      cattegory: 'categoría',
    };
    let pressCardAccent = <PressCard press={press3} important />;
    let press4 = {
      title: 'Sala de Match',
      description:
        'En este espacio hay un texto para animar al usuario a usar Match',
      cattegory: 'categoría',
    };
    let pressCardDown = <PressCard press={press4} />;

    // Dummy componentx
    let dummyComp = (
      <>
        <View style={styles.cardContainer} />
        {pressCard1}
        {pressCard2}
        {pressCardAccent}
        {pressCardDown}
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
