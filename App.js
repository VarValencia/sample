/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from "react-native";

// Importación de las vistas
import LandingPage from '@screens/LandingPage';
import LoginScreen from '@screens/LoginScreen';

const RootStack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <>
     <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="BienvenidaScreen" component={LandingPage} />
        <RootStack.Screen name="LoginScreen" component={LoginScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
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
