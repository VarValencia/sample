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
  $gudGray: '#dadada',

  // PADDINGS & MARGINS
  // Body
  $gudBodyPadding: '20%',

  // Titles
  $gudTitlePaddingTop: '5%',
  $gudSubTitlePaddingBottom: '20%',
  $gudSeparatorPaddingBottom: '5%',
  
  // Buttons
  $gudBottomContainerMargin: Dimensions.get("window").height * 0/100,

  // FONTS & SIZES
  $b: 'Poppins-Bold',
  $sb: 'Poppins-SemiBold',
  $rg: 'Poppins-Regular',

  $gudSM: Dimensions.get("window").width * 12/Dimensions.get("window").height*1.7,
  $gudMD: Dimensions.get("window").width * 16/Dimensions.get("window").height*1.2,
  $gudLG: Dimensions.get("window").width * 20.5/Dimensions.get("window").height*1.3,

  $gudTextPadding: 3,
  $gudTextMarginTop: Dimensions.get("window").height * 0.1 / 100,

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
    position: 'absolute',
    textAlign: 'center',
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    padding: "$gudBodyPadding",
    alignItems: 'center',
    flex: 1
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
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: '$gudBottomContainerMargin'
  },

  // Text styles
  gudText: {
    fontFamily: '$sb',
    color: '$gudBlack',
    padding: "$gudTextPadding",
    marginTop: '$gudTextMarginTop',
    elevation: 99
  },
  title: {
    fontFamily: '$b',
    paddingTop: '$gudTitlePaddingTop',
  },
  gudButtonText: {
    fontFamily: '$sb',
    elevation: 99,
    zIndex: 99,
    color: '$gudGreenDark',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
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
  sectionDescription: {
    textAlign: 'center',
    paddingBottom: '$gudSubTitlePaddingBottom',
    fontFamily: '$b'
  },

  // Image styling
  gudCardImage: {
    resizeMode: 'contain',
    width: (Dimensions.get('window').width * 80) / 100,
    height: (Dimensions.get('window').height * 30) / 100,
    margin: 10,
  },
  gudBackgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },

  // Button styling
  buttonContainer: {
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
    backgroundColor: '$gudWhite',
    borderRadius: '$gudBorderRadius',
    borderWidth: 1,
    borderColor: '$gudGreenRegular',
    margin: '2%',
  },
  gudButton: {
    backgroundColor: '$gudWhite',
    borderRadius: '$gudBorderRadius',
    borderWidth: 1,
    borderColor: '$gudGreenRegular',
    width: Dimensions.get("window").width * 80/100,
    alignItems: 'center'
  },
  active: {
    backgroundColor: '$gudGreenLight',
    borderColor: '$gudGreenLight',
    borderRadius: '$gudBorderRadius',
  },
  inactive: {
    backgroundColor: '$gudWhite',
    borderColor: '$gudGray',
    borderRadius: '$gudBorderRadius',
    color: "$gudGray"
  },
  touchableActive: {
    width: (Dimensions.get('window').width * 60) / 100,
    height: (Dimensions.get('window').height * 5) / 100,
    borderRadius: '$gudBorderRadius',
    display: 'flex',
    justifyContent: 'center',
  },

  // Input styling
  gudInput: {
    width: Dimensions.get("window").width * 80 / 100,
    height: Dimensions.get("window").height * 5 / 100,
    borderColor: '$gudGreenRegular',
    borderWidth: 1,
    borderRadius: '$gudBorderRadius',
    paddingLeft: 15,
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
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  rbCheckedCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '$gudGreenMedium'
  },

  // General Styling
  gudSeparator: {
    position: 'relative',
    // provisional
    width: Dimensions.get("window").width * 8 / 100,
    height: Dimensions.get("window").height * 0.5 / 100,
    backgroundColor: '$gudGreenDark',
    borderRadius: '$gudBorderRadius',
    marginBottom: '$gudSeparatorPaddingBottom'
  },


  // Old styles
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

  //LogIn container botones especificos
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
  sectionContainerMarginTop: {
    position: 'relative',
    marginVertical: '25%',
    textAlign: 'center',
    marginHorizontal: '20%',
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
