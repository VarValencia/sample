/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableHighlight,
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from  'react-native/Libraries/NewAppScreen';

const App:  () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
         contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          
          <View style={styles.body}>
            <View style={styles.sectionImageContainer}>
              <View style={styles.imageContainer}>
                <Text style= {styles.sectionTitle}>Bienvenidos</Text>
                <View style= {styles.ButtonContainer}>
                  <Image styles = {styles.form}
                    source = {require('./screenstest/descarga.png')}
                  />
                </View>
                <Text tyle = {styles.sectionMessage}>Entra a Un lugar donde puedes ser</Text>
              </View>

            </View>
            <View style={styles.sectionContainerButton}>
              <View style={styles.ButtonContainer}>
                 <Button 
                  onPress ={()=> {
                  console.log("you tapped the button Iniciar");
                  }}
                  title= "INICIAR SESIÓN"
                  /> 
              </View>            
            </View> 
            
              <View style={styles.sectionContainerButton1}>
                <View style={styles.ButtonContainer}>
                  <Button 
                    onPress ={()=> {
                    console.log("you tapped the button regist");
                    }}
                    title= "REGISTRARSE "
                  />
                </View>                
              
               </View> 
            </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.black,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center',
    flexWrap: "nowrap",
  },
  sectionContainerButton: {
    marginTop: "63%", 
    marginHorizontal: "10%",
    backgroundColor: Colors.black,
  },
  sectionContainerButton1: {
    marginTop: "5%", 
    marginHorizontal: "10%",
    backgroundColor: Colors.black,
  },
  sectionImageContainer:{
    marginTop: "25%",
    marginHorizontal:"1%",
    backgroundColor: Colors.lighter,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionMessage: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  ButtonContainer:{
    margin:"0%",
  },
  Container:{
    marginTop:20,
  },
  form:{
    width:50,
    height: 50,
  },
});

export default App;
