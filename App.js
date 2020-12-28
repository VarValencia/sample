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
import LandingPage from '@screens/Landing/LandingPage';
import LoginScreen from '@screens/Landing/LoginScreen';
import RegisterScreen from '@screens/Landing/RegisterScreen';
import RegisterStepTwo from '@screens/Landing/RegisterStepTwo';
import OpenEmailScreen from '@screens/OpenEmailScreen';
import GudAfterMatchScreen from '@screens/GudAfterMatchScreen';
import MatchConfigurationScreen from '@screens/MatchConfigurationScreen';
import PerfilScreen from '@screens/PerfilScreen';
import Splash from '@screens/Splash';
import LoadingMatch from '@screens/LoadingMatch';
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
            initialRouteName="LoginScreen"
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
            <RootStack.Screen
              name="MatchConfigurationScreen"
              component={MatchConfigurationScreen}
            />
            <RootStack.Screen name="LoadingMatch" component={LoadingMatch} />
            <RootStack.Screen
              name="GudAfterMatchScreen"
              component={GudAfterMatchScreen}
            />
            <RootStack.Screen
              name="OpenEmailScreen"
              component={OpenEmailScreen}
            />
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
