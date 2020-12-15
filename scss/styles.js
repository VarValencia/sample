import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  body: {
    backgroundColor: Colors.white,
    textAlign: 'center',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionContainerButton: {
    marginTop: '63%',
    marginHorizontal: '10%',
    backgroundColor: Colors.white,
  },
  sectionContainerButton1: {
    marginTop: '5%',
    marginHorizontal: '10%',
    backgroundColor: Colors.white,
  },
  sectionImageContainer: {
    marginTop: '25%',
    marginLeft: 50,
    marginRight: 50,
    textAlign: 'center',
    backgroundColor: Colors.lighter,
  },
  sectionTitle: {
    textAlign: 'center',
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

  // Valencia styles
  ButtonContainer: {
    margin: '7%',
  },

  Container: {
    marginTop: 20,
  },
  picture: {
    position: 'relative',
    textAlign: 'center',
    width: 50,
    height: 50,
  },
  logo: {
    position: 'relative',
    textAlign: 'center',
    width: 15,
    height: 15,
  },
  textInput1: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
  //LogIn container botones especificos
  sectionContainerU: {
    marginTop: '40%',
    marginHorizontal: '10%',
    backgroundColor: Colors.lighter,
  },
  sectionContainerR: {
    marginTop: '0%',
    marginHorizontal: '0%',
    backgroundColor: Colors.lighter,
  },
});
