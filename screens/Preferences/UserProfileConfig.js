/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  Image,
  StatusBar,
  RecyclerViewBackedScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableHighlight} from 'react-native-gesture-handler';
import styles from '../../scss/styles';

class UserConfig extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let notifyBody = (
      <View style={styles.cardContainer}>
        <GudText
          style={styles.textMD}
          text={'recibe notificaciones cuando username esté disponible'}
        />
      </View>
    );
    let restringeBody = (
      <View style={styles.cardContainer}>
        <GudText
          style={styles.textMD}
          text={
            'Limita la interacción con este usuario sin necesidad de denunciar o eliminar contacto'
          }
        />
      </View>
    );
    let reportBody = (
      <View style={styles.cardContainer}>
        <ValidationField
          placeholder={'¿problemas con el Guder? Cuéntanos qué ha pasado'}
          maxLength={12}
          minLength={6}
          handleValue={(event) => this.onChange(event, PASS)}
          password={true}
        />
      </View>
    );
    let DeleteBody = (
      <View style={styles.cardContainer}>
        <GudText
          style={styles.textMD}
          text={'¿Estás seguro de que deseas eliminar este contacto?'}
        />
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            style={[
              styles.touchableActive,
              styles.gudButton,
              true ? styles.activeBtn : styles.inactiveBtn,
            ]}
            onPress={() => {
              this.onSubmit();
            }}>
            <GudText style={styles.gudButtonText} text="Si eliminar" />
          </TouchableHighlight>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            style={[
              styles.touchableActive,
              styles.gudButton,
              true ? styles.activeBtn : styles.inactiveBtn,
            ]}
            onPress={() => {
              this.onSubmit();
            }}>
            <GudText style={styles.gudButtonText} text="Mejor no" />
          </TouchableHighlight>
        </View>
      </View>
    );
    // Dummy component
    let dummyComp = (
      <View style={styles.cardContainerLeft}>
        <TitleCard title={'Notificaciones'} text={null} body={notifyBody} />
        <TitleCard title={'Restringir'} text={null} body={restringeBody} />
        <TitleCard title={'Denunciar'} text={null} body={reportBody} />
        <TitleCard title={'Eliminar contacto'} text={null} body={DeleteBody} />
        <View style={styles.appImageContainer}>
          <Image
            style={styles.gudCardImage}
            source={require('@icons/ConfigIcon.png')}
          />
        </View>
      </View>
    );
    var dummyBody = 'Lorem ipsum dolor sit amet rican pieyaso colocao';
    return (
      <>
        <StatusBar hidden={true} />
        <SafeAreaView>
          <View style={styles.body}>
            <View style={styles.cardContainer}>
              <TitleCard
                title={'Nombre de usuario'}
                text={dummyBody}
                body={dummyComp}
              />
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }
}

export default UserConfig;
