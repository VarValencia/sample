import React from 'react';
import {View, FlatList} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import GRadioButtonGroup from './GRadioButtonGroup';
import GudText from './GudText';

const MIN_LENGTH = 12;

class AfterMatchRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ratingKey: '',
      text: '',
    };
    this.onChange = this.onChange.bind(this);
    this.changeKey = this.changeKey.bind(this);
  }

  handleKey(key) {
    this.setState({ratingKey: key});
    this.props.onChange(0, key);
  }

  onChange(text) {
    var newState = this.state;
    newState['text'] = text;

    this.setState(newState);
    this.props.onChange(1, text);
  }
  changeKey() {
    this.setState({ratingKey: 0});
  }
  render() {
    var key = this.state.ratingKey;

    const MENUS = ['ratings', 'Others'];

    let ratings = [
      {
        name: 'Genial, guardar a este guder',
        key: 0,
      },
      {
        name: 'Bien, pero prefiero probar con otros guders',
        key: 1,
      },
      {
        name: 'Mal, problemas con el guder',
        key: 2,
      },
      {
        name: 'Otros',
        key: 3,
      },
    ];

    let allSlides = [{key: 0}, {key: 1}];
    let slides = allSlides.splice(0, key === 3 ? allSlides.length : 1);

    var radioButtons = (
      <View style={styles.carouselCard}>
        <GRadioButtonGroup
          spaced={EStyleSheet.value('$gudRadioButtonMarginVertical')}
          options={ratings}
          getKey={(key) => this.handleKey(key)}
        />
        {/* Implement paging component here */}
        {/* {key === 3 ? <GudText style={styles.sectionDescription} text="Siguiente"/> : null} */}
      </View>
    );
    var othersBox = (
      <View style={styles.carouselCard}>
        <GudText
          style={[styles.sectionDescription, {padding: 10}]}
          text={'Explícanos qué ha sucedido:'}
        />
        <ValidationField
          style={styles.textInputContainer}
          disableAccent={true}
          maxLength={30}
          minLength={MIN_LENGTH}
          autoFocus={true}
          multiline={true}
          numberOfLines={4}
          handleValue={(text) => this.onChange(text)}
        />
      </View>
    );

    return (
      <View style={styles.carouselContainer}>
        <FlatList
          ref={(ref) => {
            this.listRef = ref;
          }}
          data={slides}
          style={styles.carouselCard}
          keyExtractor={(item) => item.key.toString()}
          renderItem={({item}) => {
            if (item.key == 0) {
              return radioButtons;
            }
            if (item.key == 1) {
              return othersBox;
            }
          }}
          onTouchMove={(event) => {
            key = 0;
          }}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }
}

export default AfterMatchRating;
