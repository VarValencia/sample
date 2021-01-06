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
import styles from '@styles/styles';

class UserConfig extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let emailBody = (
      <View>
        <View style={styles.inputContainer}>
          <ValidationField
            placeholder={'email@email.com'}
            maxLength={30}
            minLength={6}
          />
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
            <GudText style={styles.gudButtonText} text="Mostrar" />
          </TouchableHighlight>
        </View>
      </View>
    );
    let passwordBody = (
      <View>
        <View style={styles.inputContainer}>
          <ValidationField
            placeholder={'password'}
            maxLength={30}
            minLength={6}
            password={true}
          />
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
            <GudText style={styles.gudButtonText} text="Cambiar contraseña" />
          </TouchableHighlight>
        </View>
      </View>
    );
    let SuscriptionBody = (
      <View>
        <GudText
          style={styles.sectionDescription}
          accent={true}
          text="Susripción Gud Match"
        />
      </View>
    );
    let licenseBody = (
      <View style={styles.cardContainer}>
        <TitleCard
          title={'Suscripcion a Gud Match'}
          text={null}
          body={SuscriptionBody}
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
        <TitleCard
          title={'Correo electrónico para inicio de sesión'}
          text={null}
          body={emailBody}
        />
        <TitleCard
          title={'Contraseña de inicio de sesión'}
          text={null}
          body={passwordBody}
        />
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
    return (
      <>
        <StatusBar hidden={true} />
        <SafeAreaView>
          <View style={styles.body}>
            <View style={styles.cardContainer}>
              <TitleCard title={'Cuenta'} text={null} body={dummyComp} />
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }
}

export default UserConfig;
