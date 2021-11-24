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

class NonFriendProfile extends React.Component {
  constructor(props) {
    super(props);

    this.handleEdit = this.handleEdit.bind(this);
    this.navigateTo = this.navigateTo.bind(this);
  }

  handleEdit(id) {
    console.log('Id', id);
  }
  navigateTo(screen) {
    this.props.navigation.navigate(screen);
  }
  render() {
    let user = {
      name: 'Juan',
      description: 'Vividor soñador',
      bio: 'Una persona que busca viajar y soñar',
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
        <View style={styles.containerRow}>
          <TouchableHighlight
            style={[styles.cardButton, styles.touchableCardActive]}
            underlayColor={ESS.value('$SampleGreenMedium')}
            onPress={() => {
              console.log('you tapped the button Contact');
              this.navigateTo('FriendSettings');
            }}>
            <SampleText
              style={styles.SampleButtonText}
              text="Contacto Sample"
            />
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.cardButton, styles.touchableCardActive]}
            underlayColor={ESS.value('$SampleGreenMedium')}
            onPress={() => {
              console.log('you tapped the button Conversar');
            }}>
            <SampleText style={styles.SampleButtonText} text="Conversar" />
          </TouchableHighlight>
        </View>
        <TitleCard
          onEdit={(id) => this.handleEdit(id)}
          id="languages"
          title={'Idiomas'}
          text={
            'Español, Inglés(nivel conversación y escrito) y algo de francés (no para escribir, pero si para hablar)'
          }
        />
        <TitleCard
          onEdit={(id) => this.handleEdit(id)}
          id="interests"
          title={'Intereses'}
          text={dummyText}
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

export default NonFriendProfile;
