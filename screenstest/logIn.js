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
  TextInput,
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
            <View styles= {styles.container}>
              <Image 
              styles= {styles.form}
              source = {require('./screenstest/descarga.png')}/>
            </View>
            <Text style = {styles.sectionTitle}>Bienvenidos</Text>
            
            <View style={styles.sectionContainerU}>
              <View style={styles.ButtonContainer}>
                <Text style={styles.sectionTitle}>Email</Text>
                  <TextInput 
                    style={styles.textInput1}
                    editable
                    maxLength={40}
                  />
              </View>       
            </View>
            <View style={styles.sectionContainerR}>
              <View style={styles.ButtonContainer}>
                <Text style={styles.sectionTitle}>Contraseña</Text>
                  <TextInput 
                    style = {styles.textInput1}
                    editable
                    maxLength={40}
                  />
                </View>
              <View styles={styles.sectionContainerR}>
                <View styles={styles.sectionContainerR}>
                  <Button 
                    onPress ={()=> {
                    console.log("you tapped the button acceder");
                    }}
                    title= "ACCEDER"
                    /> 
                </View>
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
    backgroundColor: Colors.lighter,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center',
    flexWrap: "nowrap",
  },
  sectionContainerU: {
    marginTop: "40%", 
    marginHorizontal: "10%",
    backgroundColor: Colors.lighter,
  },
  sectionContainerR: {
    marginTop: "0%", 
    marginHorizontal: "0%",
    backgroundColor: Colors.lighter,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  Container: {
    marginTop: 20,
  },
  form:{
    width:50,
    height:50,
  },
  textInput1: {
    height:40 ,
    borderColor: 'gray',
    borderWidth: 1,
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
    margin:"7%",
  },
});

export default App;
