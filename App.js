/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Appbar} from 'react-native-paper';
import * as NavigationService from '@scripts/NavigationService';

import auth from '@react-native-firebase/auth';

// Importación de las vistas

//LANDING
import Splash from '@landing/Splash';
import LandingPage from '@landing/LandingPage';
import LoginScreen from '@landing/LoginScreen';
import RegisterScreen from '@landing/RegisterScreen';
import RegisterStepTwo from '@landing/RegisterStepTwo';
import ConfirmEmail from '@landing/ConfirmEmail';

//MATCH
import GudAfterMatchScreen from '@match/GudAfterMatchScreen';
import MatchConfigurationScreen from '@match/MatchConfigurationScreen';
import LoadingMatch from '@match/LoadingMatch';
import HelpCenter from '@screens/HelpCenter';

// cambiar nombre!!
import FriendSettings from '@preferences/FriendSettings';

//PREFERENCES
import PreferencesScreen from '@preferences/PreferencesScreen';
import UserPreferences from '@preferences/UserPreferences';
import AccountPreferences from '@preferences/AccountPreferences';
import BasicMatchPreferences from '@preferences/BasicMatchPreferences';
import NotificationPreferences from '@preferences/NotificationPreferences';

//SCREENS
import StartConfiguring from '@screens/StartConfiguring';
import EmptyContact from '@screens/EmptyContact';
import PerfilScreen from '@screens/PerfilScreen';
import NonFriendProfile from '@screens/NonFriendProfile';
import Home from '@screens/Home';

const RootStack = createStackNavigator();

const App: () => React$Node = ({navigator}) => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  // if (!user) {
  if (false) {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <RootStack.Navigator
            screenOptions={{
              headerStyle: {elevation: 0},
              cardStyle: {backgroundColor: '#fff'},
            }}
            initialRouteName="LandingPage"
            headerMode="none">
            <RootStack.Screen name="Splash" component={Splash} />
            <RootStack.Screen name="LandingPage" component={LandingPage} />
            <RootStack.Screen name="LoginScreen" component={LoginScreen} />
            <RootStack.Screen
              name="RegisterScreen"
              component={RegisterScreen}
            />
            <RootStack.Screen
              name="RegisterStepTwo"
              component={RegisterStepTwo}
            />
          </RootStack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }

  return (
    <>
      <SafeAreaProvider>
        <NavigationContainer ref={NavigationService.navigationRef}>
          <RootStack.Navigator
            screenOptions={{
              header: CustomNaviationBar,
              cardStyle: {backgroundColor: '#fff'},
            }}
            initialRouteName="Home">
            <RootStack.Screen name="Splash" component={Splash} />
            <RootStack.Screen name="LandingPage" component={LandingPage} />
            <RootStack.Screen name="LoginScreen" component={LoginScreen} />
            <RootStack.Screen
              name="RegisterScreen"
              component={RegisterScreen}
            />
            <RootStack.Screen
              name="RegisterStepTwo"
              component={RegisterStepTwo}
            />
            <RootStack.Screen
              name="MatchConfigurationScreen"
              component={MatchConfigurationScreen}
            />
            <RootStack.Screen name="LoadingMatch" component={LoadingMatch} />
            <RootStack.Screen
              name="GudAfterMatchScreen"
              component={GudAfterMatchScreen}
            />
            <RootStack.Screen name="HelpCenter" component={HelpCenter} />
            <RootStack.Screen name="ConfirmEmail" component={ConfirmEmail} />
            <RootStack.Screen
              name="FriendSettings"
              component={FriendSettings}
            />
            <RootStack.Screen
              name="PreferencesScreen"
              component={PreferencesScreen}
            />
            <RootStack.Screen
              name="AccountPreferences"
              component={AccountPreferences}
            />
            <RootStack.Screen
              name="BasicMatchPreferences"
              component={BasicMatchPreferences}
            />
            <RootStack.Screen
              name="NotificationPreferences"
              component={NotificationPreferences}
            />

            <RootStack.Screen
              name="StartConfiguring"
              component={StartConfiguring}
            />
            <RootStack.Screen name="EmptyContact" component={EmptyContact} />
            <RootStack.Screen
              name="UserPreferences"
              component={UserPreferences}
            />
            <RootStack.Screen name="PerfilScreen" component={PerfilScreen} />
            <RootStack.Screen
              name="NonFriendProfile"
              component={NonFriendProfile}
            />
            <RootStack.Screen name="Home" component={Home} />
          </RootStack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
  function CustomNaviationBar() {
    return (
      <Appbar style={styles.toolbar}>
        <Appbar.Action
          style={styles.toolbarIcon}
          color={ESS.value('$gudGreenDarkest')}
          icon={require('@icons/HomeIcon.png')}
          onPress={() => NavigationService.navigateTo('Home')}
        />
        <Appbar.Action
          style={styles.toolbarIcon}
          color={ESS.value('$gudGreenDarkest')}
          icon={require('@icons/MatchIcon.png')}
          onPress={() =>
            NavigationService.navigateTo('MatchConfigurationScreen')
          }
        />
        <Appbar.Action
          style={styles.toolbarIcon}
          icon={require('@icons/ChatIcon.png')}
          color={ESS.value('$gudGreenDarkest')}
          onPress={() => NavigationService.navigateTo('Splash')}
        />
        <Appbar.Action
          style={styles.toolbarProfile}
          icon={require('@icons/placeholder.png')}
          color={ESS.value('$gudGreenDarkest')}
          onPress={() => NavigationService.navigateTo('PerfilScreen')}
        />
      </Appbar>
    );
  }
};
export default App;
