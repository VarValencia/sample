import EStyleSheet from 'react-native-extended-stylesheet';

// Import Dimensions for screen measurement
import { Dimensions } from 'react-native';

// App Theme
EStyleSheet.build({
  // COLORS
  $black: '#000',
  $gudBlack: '#505050',
  $gudWhite: '#FFF',
  $gudGreenLight: '#E0F0F0',
  $gudGreenMedium: '#C1E3E2',
  $gudGreenRegular: '#A2D6D6',
  $gudGreenDark: '#62BDBA',

  // PADDINGS & MARGINS
  $gudBodyMarginH: "20%",
  $gudBodyMarginV: "20%",
  $gudTitlePaddingTop: "5%",
  $gudTitlePaddingBottom: "20%",

  // FONTS & SIZES
  $b: 'Poppins-Bold',
  $sb: 'Poppins-SemiBold',
  $rg: 'Poppins-Regular',

  $gudSM: 10,
  $gudMD: 15,
  $gudLG: 20
})

export default EStyleSheet.create({
  // New styles
  scrollView: {
    position: "relative"
  },
  body: {
    textAlign: 'center',
    marginHorizontal: '$gudBodyMarginH',
    marginVertical: '$gudBodyMarginV',
  },

  // Containers
  cardContainer: {
    position: 'relative',
    textAlign: 'center'
  },
  appImageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  // Text styles
  gudText: {
    fontFamily: '$sb',
    color: '$gudBlack',
    textAlign: 'center'
  },
  title: {
    fontFamily: '$b',
    paddingTop: '$gudTitlePaddingTop',
    paddingBottom: '$gudTitlePaddingBottom'
  },


  // Text sizes and weight
  textLG: {
    fontSize: '$gudLG',
  },
  textMD: {
    fontSize: '$gudMD',
  },
  textSM: {
    fontSize: '$gudSM',
  },

  // Text decorations
  textFocus: {
    color: '$gudGreenDark'
  },

  // Image styling
  gudCardImage: {
    resizeMode: 'contain',
    width: Dimensions.get('window').width * 80 / 100,
    height: Dimensions.get('window').height * 30 / 100,
    margin: 10
  },




  // Old styles
  gudButton: {
    backgroundColor: '$gudGreenLight',
    color: '$gudBlack',
  },
  engine: {
    position: 'absolute',
    right: 0,
    top: 0,
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
    color: '$gudBlack',
  },
  sectionMessage: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
    color: '$gudBlack',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 17,
    fontWeight: '400',
    textAlign: 'center',
  },
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
    color: '$gudBlack',
  },
  //landing screen
  ButtonTextLandingSc: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: '$gudBlack',
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
    color: '$gudBlack',
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
    color: '$gudBlack',
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
    color: '$gudBlack',
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
