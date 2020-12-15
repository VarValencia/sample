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
  TextInput
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
            <View style={styles.sectionContainer1}>
              <View style={styles.ButtonContainer}>
                <Text></Text>
                <TextInput 
                    style = {styles.textInput1}
                    editable
                    maxLength={40}
                />
              </View>            
            </View> 
            <View style={styles.sectionContainer2}>
              <View style={styles.ButtonContainer}>
                <Text></Text>
                <TextInput 
                    style = {styles.textInput1}
                    editable
                    maxLength={40}
                />
              </View>            
            </View> 
            <View style={styles.sectionContainer2}>
              <View style={styles.ButtonContainer}>
                <Text></Text>
                <TextInput 
                    style = {styles.textInput1}
                    editable
                    maxLength={40}
                />
              </View>            
            </View> 
            <View style={styles.sectionContainer2}>
              <View style={styles.ButtonContainer}>
                <Text></Text>
                <TextInput 
                    style = {styles.textInput1}
                    editable
                    maxLength={40}
                />
              </View>            
            </View> 
              <View style={styles.sectionContainer}>
                <View style={styles.ButtonContainer}>
                  <Button 
                    onPress ={()=> {
                    console.log("you tapped the button 2");
                    }}
                    title= "Mas GUD?"
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
  sectionContainer: {
    marginTop: "70%", 
    marginHorizontal: "10%",
    backgroundColor: Colors.black,
  },
  sectionContainer1: {
    marginTop: "2%", 
    marginHorizontal: "10%",
    backgroundColor: Colors.black,
  },
  sectionContainer2: {
    marginTop: "2%", 
    marginHorizontal: "10%",
    backgroundColor: Colors.black,
  },
  sectionContainer3: {
    marginTop: "2%", 
    marginHorizontal: "10%",
    backgroundColor: Colors.black,
  },
  sectionContainer4: {
    marginTop: "2%", 
    marginHorizontal: "10%",
    backgroundColor: Colors.black,
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
  textInput1: {
    height:40 ,
    borderColor: 'gray',
    borderWidth: 1,
  },
});

export default App;
