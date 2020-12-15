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
  Image,
  Button,
  TouchableHighlight
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from  'react-native/Libraries/NewAppScreen';

const App:   () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
         contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style= {styles.sectionContainer}>
             <Text styles = {styles.sectionTitle}>Enhorabuena</Text>
            </View>
            <View style= {styles.sectionContainer1}>
             <Text styles = {styles.sectionPaso}>Estás a un paso de ser Gud</Text>
            </View>
            <View style ={styles.sectionContainer2}>
              <Text styles = {styles.sectioEmail}>Ahora solo falta que introduzcas tu email</Text>
            </View>
            
            
            <View styles= {styles.container}>
              <Image 
              styles= {styles.form}
              source = {require('./screenstest/descarga.png')}/>
            </View>
             <View style={styles.sectionContainerButton}>
              <View style={styles.ButtonContainer}>
                 <Button 
                  onPress ={()=> {
                  console.log("you tapped the button 1");
                  }}
                  title= "FINALIZAR"
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
    backgroundColor: Colors.l,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center',
    flexWrap: "nowrap",
  },
  sectionContainer: {
    marginTop: "30%", 
    marginHorizontal: "10%",
    backgroundColor: Colors.lighter,
  },
  sectionContainer1: {
    marginTop: "22%", 
    marginHorizontal: "10%",
    backgroundColor: Colors.lighter,
  },
  sectionContainer2: {
    marginTop: "10%", 
    marginHorizontal: "10%",
    backgroundColor: Colors.lighter,
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionPaso: {
    fontSize: 10,
    fontWeight: '600',
    color: Colors.black,
  },
  sectioEmail: {
    fontSize: 10,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  sectionContainerButton: {
    marginTop: '20%',
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  container:{
    marginTop:20,
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
  form:{

  }
});

export default App;
