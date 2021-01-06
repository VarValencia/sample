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

class PreferencesScreen extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id){
    console.log('Id', id);
  }

  render() {
    return (
      <>
        <StatusBar hidden={true} />
        <SafeAreaView>
          <View style={styles.body}>
            <View style={styles.cardContainer}>
              <View style={styles.buttonContainer}>
                <MenuItem
                  id="profile"
                  text="Perfil"
                  icon={require('@icons/4x/profile.png')}
                  onClick={(id) => this.handleClick(id)}
                />
                <MenuItem
                  id="account"
                  text="Cuenta"
                  icon={require('@icons/4x/account.png')}
                  onClick={(id) => this.handleClick(id)}
                />
                <MenuItem
                  id="match"
                  text="Match Básico"
                  icon={require('@icons/4x/match.png')}
                  onClick={(id) => this.handleClick(id)}
                />
                <MenuItem
                  id="notifications"
                  text="Notificaciones"
                  icon={require('@icons/4x/notifications.png')}
                  onClick={(id) => this.handleClick(id)}
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
                  onClick={(id) => this.handleClick(id)}
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
