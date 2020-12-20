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
    fontSize: 17,
    fontWeight: '400',
    textAlign: 'center',
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
    marginTop: 15,
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
    marginHorizontal: '40%',
  },
  textInput1: {
    width: 300,
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#00000030',
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
    marginHorizontal: '10%',
    marginTop: '15%',
  },
  sectionTitle1: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: Colors.black,
  },
  //landing screen
  ButtonTextLandingSc: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: Colors.black,
  },
  //parte de abajo de loginSc
  sectionContainerLogSc: {
    position: 'relative',
    marginVertical: '5%',
    textAlign: 'center',
    marginHorizontal: '10%',
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
    fontSize: 14,
    fontWeight: '600',
    color: Colors.black,
    marginHorizontal: '0%',
    marginVertical: '2%',
  },
  ButtonLogSc: {
    margin: '10%',
    position: 'relative',
    width: 300,
    height: 30,
    backgroundColor: '#62BDBA',
    textAlign: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    opacity: 0.4,
    marginHorizontal: '10%',
    marginVertical: '15%',
  },
  sectionContainerMarginTop: {
    position: 'relative',
    marginVertical: '25%',
    textAlign: 'center',
    marginHorizontal: '20%',
  },
  ButtonTextLogSc: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: Colors.black,
  },
  ButtonRegisterSc: {
    margin: '10%',
    position: 'relative',
    width: 200,
    height: 40,
    backgroundColor: '#C1E3E2',
    textAlign: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  ButtonTextRegisterSc: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: Colors.black,
  },
  ButtonLandingSc2: {
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
    marginHorizontal: '10%',
    marginVertical: '0%',
  },
});
