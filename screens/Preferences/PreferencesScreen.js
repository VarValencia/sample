/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from '../../scss/styles';

class PreferencesScreen extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.navigateTo = this.navigateTo.bind(this);
  }

  handleClick(id) {
    console.log('Id', id);
    this.state;
  }

  navigateTo(screen) {
    this.props.navigation.navigate(screen);
  }
  render() {
    return (
      <>
        <StatusBar hidden={true} />
        <SafeAreaView>
          <View style={styles.body}>
            <View style={styles.cardContainer}>
              <GudText styles={styles.title} text="Nombre de usuario" />
              <View style={[styles.buttonContainer]}>
                <MenuItem
                  id="profile"
                  text="Perfil"
                  icon={require('@icons/4x/profile.png')}
                  onClick={() => this.navigateTo('UserPreferences')}
                />
                <MenuItem
                  id="account"
                  text="Cuenta"
                  icon={require('@icons/4x/account.png')}
                  onClick={() => this.navigateTo('AccountPreferences')}
                />
                <MenuItem
                  id="match"
                  text="Match Básico"
                  icon={require('@icons/4x/match.png')}
                  onClick={() => this.navigateTo('BasicMatchPreferences')}
                />
                <MenuItem
                  id="notifications"
                  text="Notificaciones"
                  icon={require('@icons/4x/notifications.png')}
                  onClick={() => this.navigateTo('NotificationPreferences')}
                />
                <MenuItem
                  id="invoice"
                  text="Facturación"
                  icon={require('@icons/4x/invoice.png')}
                  onClick={(id) => this.handleClick(id)}
                />
                <MenuItem
                  id="help"
                  text="Centro de ayuda"
                  icon={require('@icons/4x/help.png')}
                  onClick={() => this.navigateTo('HelpCenter')}
                />
              </View>
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }
}

export default PreferencesScreen;
