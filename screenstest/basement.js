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
          {/* <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )} */}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <View style={styles.ButtonContainer}>
                 <Button 
                  onPress ={()=> {
                  console.log("you tapped the button 1");
                  }}
                  title= "GUD?"
                  /> 
              </View>            
            </View> 
            
              <View style={styles.sectionContainer1}>
                <View style={styles.ButtonContainer}>
                  <Button 
                    onPress ={()=> {
                    console.log("you tapped the button 2");
                    }}
                    title= "Mas GUD?"
                  />
                </View>                
              
               {/* <Text style={styles.sectionTitle}>Paso uno</Text>  */}
               {/* <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits. 
                  </Text>  */}
              </View> 
            {/* <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View> */}
            {/* <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View> */}
            {/* <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View> */}
            {/* <LearnMoreLinks /> */}
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
});

export default App;
