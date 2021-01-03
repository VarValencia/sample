import React from 'react';
import {View, FlatList} from 'react-native';
import GRadioButtonGroup from './GRadioButtonGroup';

class AfterMatchRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ratingKey: '',
    };
  }

  handleKey(key) {
    this.setState({ratingKey: key});
    this.props.onChange({key});
  }

  render() {
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

    let slides = [{key: 0}, {key: 1}];
    var radioButtons = (
         <View style={styles.carouselCard}> 
          <GRadioButtonGroup
            spaced={'8%'}
            options={ratings}
            getKey={(key) => this.handleKey(key)}
          />
        </View>
    );
    var othersBox= (
        <View style={styles.flatCardContainer}>

        </View>
    )

    return (
      <View style={styles.carouselContainer}>
        <FlatList
          data={slides}
          style={styles.carouselCard}
          keyExtractor={(item) => item.key.toString()}
          renderItem={({item}) => {
            if (item.key == 0){
                return radioButtons
            } else if (item.key == 1){
                return othersBox;
            }
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
