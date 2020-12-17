import {StyleSheet} from 'react-native';

// App Color Theme
const Colors = {
  black: '#000',
  gudBlack: '#505050',
  gudWhite: '#FFF',
  gudGreenLight: '#E0F0F0',
  gudGreenMedium: '#C1E3E2',
  gudGreenRegular: '#A2D6D6',
  gudGreenDark: '#62BDBA',
};

export default StyleSheet.create({
  gudButton: {
    backgroundColor: Colors.gudGreenLight,
    color: Colors.black,
  },
  engine: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  body: {
    textAlign: 'center',
  },
  sectionContainer: {
    position: 'relative',
    marginVertical: '5%',
    textAlign: 'center',
    marginHorizontal: '20%',
  },
  sectionContainerButton: {
    position: 'relative',
    textAlign: 'center',
    marginTop: '20%',
    marginHorizontal: '20%',
    marginVertical: '10%',
  },
  sectionImageContainer: {
    marginTop: '10%',
    position: 'relative',
    marginHorizontal: '50%',
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionMessage: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  //prefabricado por el engine
  highlight: {
    fontWeight: '700',
  },
  footer: {
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },

  // Valencia styles
  gudSuccess: {
    margin: '10%',
  },

  Container: {
    marginTop: 20,
  },
  picture: {
    //importante el position
    position: 'relative',
    width: 50,
    height: 50,
  },
  logo: {
    position: 'relative',
    width: 50,
    height: 50,
    marginVertical: '5%',
    marginHorizontal: '50%',
  },
  textInput1: {
    width: 240,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
  //LogIn container botones especificos
  sectionContainerU: {},

  //estilo que debería funcionar para el botón
  ButtonLandingSc: {
    margin: '10%',
    position: 'relative',
    width: 200,
    height: 40,
    backgroundColor: '#C1E3E2',
    textAlign: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    opacity: 0.4,
  },
  sectionTitle1: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '600',
    color: Colors.black,
  },
  //landing screen
  ButtonTextLSc: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: Colors.black,
    marginHorizontal: '10%',
    marginVertical: '4%',
  },
  sectionContainerR: {
    margin: '20%',
    position: 'relative',
    width: 200,
    height: 40,
    backgroundColor: '#62BDBA',
    textAlign: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    opacity: 0.4,
  },
  ButtonContainer: {
    position: 'relative',
    textAlign: 'center',
    marginTop: '20%',
    marginHorizontal: '20%',
    marginVertical: '10%',
  },
  TextLogSc: {
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '600',
    color: Colors.black,
    marginHorizontal: '10%',
    marginVertical: '4%',
  },
  ButtonLoginSc: {
    margin: '10%',
    position: 'relative',
    width: 200,
    height: 40,
    backgroundColor: '#62BDBA',
    textAlign: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    opacity: 0.4,
  },
});
