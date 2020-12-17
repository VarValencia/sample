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

const RootStack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootStack.Navigator initialRouteName="LandingPage" headerMode="none">
            <RootStack.Screen name="LandingPage" component={LandingPage} />
            <RootStack.Screen name="LoginScreen" component={LoginScreen} />
          </RootStack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
      {/* <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.body}>
              <View style={styles.sectionImageContainer}>
                <View style={styles.imageContainer}>
                  <Text style={styles.sectionTitle}>Bienvenidos</Text>
                  <View style={styles.ButtonContainer}>
                    <Image
                      styles={styles.form}
                      source={require('./screenstest/descarga.png')}
                    />
                  </View>
                  <Text tyle={styles.sectionMessage}>
                    Entra a Un lugar donde puedes ser
                </Text>
                </View>
              </View>
              <View style={styles.sectionContainerButton}>
                <View style={styles.ButtonContainer}>
                  <Button
                    onPress={() => {
                      console.log('you tapped the button Iniciar');
                    }}
                    title="INICIAR SESIÓN"
                  />
                </View>
              </View>

              <View style={styles.sectionContainerButton1}>
                <View style={styles.ButtonContainer}>
                  <Button
                    onPress={() => {
                      console.log('you tapped the button regist');
                    }}
                    title="REGISTRARSE "
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </NavigationContainer> */}
    </>
  );
};

export default App;
