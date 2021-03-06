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
import SampleText from '@components/global/SampleText';
import DropDownItem from 'react-native-drop-down-item';
import styles from '../../scss/styles';

class FriendSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnabled: false,
    };

    this.toggleSwitch = this.toggleSwitch.bind(this);
  }
  toggleSwitch(status) {
    this.setState({isEnabled: status});
  }
  render() {
    let notifBody = (
      <View style={styles.dropDownCard}>
        <View style={styles.dropCardContainer}>
          <SampleText
            style={styles.textMD}
            text={'Recibe notificaciones cuando el user esté disponible'}
          />
        </View>
        <Switch
          onValueChange={(status) => this.toggleSwitch(status)}
          value={this.state.isEnabled}
        />
      </View>
    );
    let restringeBody = (
      <View style={styles.dropDownCard}>
        <View style={styles.dropCardContainer}>
          <SampleText
            style={styles.textMD}
            text={
              'Limita la interacción con este usuario sin necesidad de denunciar o eliminar contacto'
            }
          />
          <Switch
            style={styles.flatCardItemComponent}
            onValueChange={(status) => this.toggleSwitch(status)}
            value={this.state.isEnabled}
          />
        </View>
      </View>
    );
    let reportBody = (
      <View style={styles.dropDownCard}>
        <View style={styles.dropCardContainer}>
          {/* <View style={styles.cardContainer}> */}
          <ValidationField
            style={styles.textInputContainer}
            placeholder={'¿Problemas con el Sampleder? Cuéntanos qué ha pasado'}
            maxLength={30}
            minLength={3}
            multiline={true}
            numberOfLines={4}
            handleValue={(text) => this.onChange(text)}
          />
          {/* </View> */}
        </View>
      </View>
    );
    let deleteBody = (
      <View style={styles.dropDownCard}>
        <View style={styles.dropTextContainer}>
          <SampleText
            style={styles.textSM}
            text={'¿Estás seguro de que deseas eliminar este contacto?'}
          />
        </View>
        <View style={styles.containerRow}>
          <TouchableHighlight
            underlayColor={ESS.value('$SampleGreenLight')}
            style={[styles.SampleMediumButton, styles.inactiveBtn]}
            onPress={() => {
              console.log('Es eliminado');
            }}>
            <SampleText style={styles.SampleButtonText} text={'Si eliminar'} />
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor={ESS.value('$SampleGreenLight')}
            style={[styles.SampleMediumButton, styles.activeBtn]}
            onPress={() => {
              console.log('No es eliminado');
            }}>
            <SampleText style={styles.SampleButtonText} text={'Mejor no'} />
          </TouchableHighlight>
        </View>
      </View>
    );
    // Dummy component
    let dummyComp = (
      <>
        <View style={styles.cardContainer} />
        <DropDownItem
          contentVisible={false}
          invisibleImage={require('@icons/rightArrow.png')}
          visibleImage={require('@icons/downArrow.png')}
          header={
            <View>
              <SampleText
                style={styles.titleCardText}
                text={'Notificaciones'}
              />
            </View>
          }>
          {notifBody}
        </DropDownItem>

        <DropDownItem
          style={styles.dropDownItem}
          contentVisible={false}
          invisibleImage={require('@icons/rightArrow.png')}
          visibleImage={require('@icons/downArrow.png')}
          header={
            <View>
              <SampleText style={styles.titleCardText} text={'Restringir'} />
            </View>
          }>
          {restringeBody}
        </DropDownItem>

        <DropDownItem
          style={styles.dropDownItem}
          contentVisible={false}
          invisibleImage={require('@icons/rightArrow.png')}
          visibleImage={require('@icons/downArrow.png')}
          header={
            <View>
              <SampleText style={styles.titleCardText} text={'Denunciar'} />
            </View>
          }>
          {reportBody}
        </DropDownItem>
        <DropDownItem
          style={styles.dropDownItem}
          contentVisible={false}
          invisibleImage={require('@icons/rightArrow.png')}
          visibleImage={require('@icons/downArrow.png')}
          header={
            <View>
              <SampleText
                style={styles.titleCardText}
                text={'Eliminar contacto'}
              />
            </View>
          }>
          {deleteBody}
        </DropDownItem>
        <View style={styles.appImageContainer}>
          <Image
            style={styles.SampleCardImage}
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

export default FriendSettings;
