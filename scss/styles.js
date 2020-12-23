import EStyleSheet from 'react-native-extended-stylesheet';

// Import Dimensions for screen measurement
import {Dimensions} from 'react-native';

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
  // Body
  $gudBodyMarginH: '20%',
  $gudBodyMarginV: '20%',
  // Titles
  $gudTitlePaddingTop: '5%',
  $gudTitlePaddingBottom: '20%',
  // Buttons
  $gudButtonMarginH: '40%',

  // FONTS & SIZES
  $b: 'Poppins-Bold',
  $sb: 'Poppins-SemiBold',
  $rg: 'Poppins-Regular',

  $gudSM: 10,
  $gudMD: 15,
  $gudLG: 20,

  // Screen Dimensions
  $scrWidth: Dimensions.get('window').width,
  $scrheight: Dimensions.get('window').height,

  // General styling
  $gudBorderRadius: 15,
});

export default EStyleSheet.create({
  // New styles
  scrollView: {
    position: 'relative',
  },
  body: {
    position: 'relative',
    top: 0,
    left: 0,
    textAlign: 'center',
    marginHorizontal: '$gudBodyMarginH',
    marginVertical: '$gudBodyMarginV',
    backgroundColor: '$gudWhite',
  },

  // Containers
  cardContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appImageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomContainer: {
    justifyContent: 'flex-end',
  },

  // Text styles
  gudText: {
    fontFamily: '$sb',
    color: '$gudBlack',
    textAlign: 'center',
  },
  title: {
    fontFamily: '$b',
    paddingTop: '$gudTitlePaddingTop',
    paddingBottom: '$gudTitlePaddingBottom',
  },
  gudButtonText: {
    fontFamily: '$sb',
    elevation: 99,
    zIndex: 99,
    marginVertical: '4%',
    color: '$gudGreenDark',
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
    color: '$gudGreenDark',
  },

  // Image styling
  gudCardImage: {
    resizeMode: 'contain',
    width: (Dimensions.get('window').width * 80) / 100,
    height: (Dimensions.get('window').height * 30) / 100,
    margin: 10,
  },

  // Button styling
  credentialButtonsContainer: {
    position: 'relative',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: (Dimensions.get('window').height * 10) / 100,
  },
  credentialButton: {
    width: (Dimensions.get('window').width * 60) / 100,
    height: (Dimensions.get('window').height * 5) / 100,
    marginHorizontal: '$gudButtonMarginH',
    backgroundColor: '$gudWhite',
    borderRadius: '$gudBorderRadius',
    borderWidth: 1,
    borderColor: '$gudGreenRegular',
    margin: '2%',
  },
  active: {
    backgroundColor: '$gudGreenLight',
    borderColor: '$gudGreenLight',
  },
  touchableActive: {
    width: (Dimensions.get('window').width * 60) / 100,
    height: (Dimensions.get('window').height * 5) / 100,
    borderRadius: '$gudBorderRadius',
    display: 'flex',
    justifyContent: 'center',
  },

  // GUD Radio Button
  gudRadioButtonGroup: {
    flexDirection: 'row',
    textAlign: "left"
  },
  rbCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '$gudGreenDark',
    alignItems: 'center', // To center the checked circle…
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  rbCheckedCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '$gudGreenMedium' // You can set it default or with yours one…
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
  gudTitle: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
    color: '$gudBlack',
  },
  gudMessage: {
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
  //modelo de cualquier text input
  gudInput: {
    width: 300,
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#00000030',
  },
  //LogIn container botones especificos
  sectionContainerU: {},
  sectionTitle1: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: '$gudBlack',
  },
  ButtonTextLandingSc: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: '$gudBlack',
  },
  //Contiene un text input y un text dentro de la parte de abajo de la logcreen
  GudContainerBigMarin: {
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
  gudTextUpButton: {
    textAlign: 'left',
    fontSize: 14,
    fontWeight: '600',
    color: '$gudBlack',
    marginHorizontal: '0%',
    marginVertical: '2%',
  },
  gudButtonDark: {
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
  gudButtonDark: {
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
  GudText: {
    marginVertical: 0,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: '$gudBlack',
  },
  gudImageBackgroundText: {
    fontFamily: '$sb',
    elevation: 99,
    zIndex: 99,
    marginVertical: '30%',
    color: '$gudBlack',
  },
  gudMessage1: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
    color: '$gudBlack',
  },
});
