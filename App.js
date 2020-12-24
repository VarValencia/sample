/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// Importación de las vistas
import LandingPage from '@screens/LandingPage';
import LoginScreen from '@screens/LoginScreen';
import RegisterScreen from '@screens/RegisterScreen';
import RegisterScreenComplete from '@screens/RegisterScreenComplete';
import OpenEmailScreen from '@screens/OpenEmailScreen';
import GudAfterMatchScreen from '@screens/GudAfterMatchScreen';
import MatchConfigurationScreen from '@screens/MatchConfigurationScreen';
import PerfilScreen from '@screens/PerfilScreen';
import CharginGud from '@screens/CharginGud';
import CharginMatch from '@screens/CharginMatch';
import GudConfigIdiom from '@screens/GudConfigIdiom';

const RootStack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootStack.Navigator
            screenOptions={{
              headerStyle: {elevation: 0},
              cardStyle: {backgroundColor: '#fff'},
            }}
            initialRouteName="LandingPage"
            headerMode="none">
            <RootStack.Screen name="LandingPage" component={LandingPage} />
            <RootStack.Screen name="LoginScreen" component={LoginScreen} />
            <RootStack.Screen
              name="RegisterScreen"
              component={RegisterScreen}
            />
            <RootStack.Screen
              name="RegisterScreenComplete"
              component={RegisterScreenComplete}
            />
            <RootStack.Screen
              name="OpenEmailScreen"
              component={OpenEmailScreen}
            />
            <RootStack.Screen
              name="GudAfterMatchScreen"
              component={GudAfterMatchScreen}
            />
            <RootStack.Screen
              name="MatchConfigurationScreen"
              component={MatchConfigurationScreen}
            />
            <RootStack.Screen name="CharginMatch" component={CharginMatch} />
            <RootStack.Screen name="CharginGud" component={CharginGud} />
            <RootStack.Screen name="PerfilScreen" component={PerfilScreen} />
            <RootStack.Screen
              name="GudConfigIdiom"
              component={GudConfigIdiom}
            />
          </RootStack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
};
export default App;
