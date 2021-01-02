import React from 'react';
import {FlatList, View} from 'react-native';
import GRadioButtonGroup from './GRadioButtonGroup';

class MatchConfigurator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      privacy: '',
      language: '',
      age: 0,
      strings: ['nivel de anonimato', 'idioma', 'rango de edad'],
    };
  }

  handleKey(ref, key) {
    var newState = this.state;
    newState[ref] = key;

    this.setState(newState);
  }
  buildString(screen) {
    return (
      'Selecciona qué ' +
      this.state.strings[screen] +
      ' eliges para este match:'
    );
  }
  render() {
    const MENUS = ['privacy', 'language', 'age'];


    console.log('State', this.state);
    let privacy = [
      {
        name: 'Chat',
        key: 0,
      },
      {
        name: 'Llamada',
        key: 1,
      },
      {
        name: 'Videollamada',
        key: 2,
      },
      {
        name: 'Sorpréndeme',
        key: 3,
      },
    ];
    let language = [
      {
        name: 'Mi idioma',
        key: 0,
      },
      {
        name: 'Otro',
        key: 1,
      },
      {
        name: 'Sorpréndeme',
        key: 2,
      },
    ];
    let age = [
      {
        name: '18-30',
        key: 0,
      },
      {
        name: '31-50',
        key: 1,
      },
      {
        name: '51+',
        key: 2,
      },
      {
        name: 'Sorpréndeme',
        key: 3,
      },
    ];

    let slides = [
      {key: 0, value: [...privacy]},
      {key: 1, value: [...language]},
      {key: 2, value: [...age]},
    ];

    return (
      <View style={styles.carouselContainer}>
        <FlatList
          data={slides}
          style={styles.carouselCard}
          keyExtractor={(item) => item.key.toString()}
          renderItem={({item}) => {
            return (
              <View style={styles.carouselCard}>
                <GudText
                  style={{flexShrink: 1, padding: 20}}
                  text={this.buildString(item.key)}
                />
                <GRadioButtonGroup
                  options={item.value}
                  getKey={(key) => this.handleKey(MENUS[item.key], key)}
                />
              </View>
            );
          }}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }
}

export default MatchConfigurator;
