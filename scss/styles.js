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
  $gudGray: '#dadada',

  // PADDINGS & MARGINS
  // Body
  $gudBodyPaddingH: '15%',
  $gudBodyPadding: '15%',

  // Titles
  $gudTitlePaddingTop: '0%',
  $gudSubTitlePaddingBottom: '3%',
  $gudSeparatorPaddingBottom: '5%',

  // Buttons
  $touchableWidth: (Dimensions.get('window').width * 80) / 100,

  // FONTS & SIZES
  $b: 'Poppins-Bold',
  $sb: 'Poppins-SemiBold',
  $rg: 'Poppins-Regular',

  $gudSM: (Dimensions.get('window').height * 1.5) / 100,
  $gudMD: (Dimensions.get('window').height * 2) / 100,
  $gudLG: (Dimensions.get('window').height * 2.5) / 100,

  $gudTextPadding: 1,
  $gudTextMarginTop: 0,

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
    textAlign: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    paddingRight: '$gudBodyPaddingH',
    paddingLeft: '$gudBodyPaddingH',
    padding: '$gudBodyPadding',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },

  // Containers
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardContainerLeft: {
    position: 'relative',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  appLogoContainer: {
    alignItems: 'center',
  },
  appImageContainer: {
    margin: (Dimensions.get('window').height * 5) / 100,
    alignItems: 'center',
  },
  inputContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  // Text styles
  gudText: {
    fontFamily: '$rg',
    color: '$gudBlack',
    padding: '$gudTextPadding',
    marginTop: '$gudTextMarginTop',
  },
  title: {
    fontFamily: '$b',
    fontSize: '$gudLG',
    paddingTop: '$gudTitlePaddingTop',
  },
  gudButtonText: {
    fontFamily: '$sb',
    fontSize: '$gudSM',
    color: '$gudGreenDark',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gudInputText: {
    fontFamily: '$sb',
    textAlign: 'left',
    paddingLeft: '2.6%',
  },
  sectionDescription: {
    fontFamily: '$sb',
    textAlign: 'center',
    fontSize: '$gudMD',
    paddingBottom: '$gudSubTitlePaddingBottom',
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
  gudBackgroundImage: {
    display: 'flex',
    width: '50%',
    height: '50%',
    justifyContent: 'center',
  },

  // Button styling
  buttonContainer: {
    position: 'relative',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
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
    width: '$touchableWidth',
    height: (Dimensions.get('window').height * 5) / 100,
    backgroundColor: '$gudWhite',
    borderRadius: '$gudBorderRadius',
    borderWidth: 1,
    borderColor: '$gudGreenRegular',
    margin: '2%',
  },
  activeBtn: {
    backgroundColor: '$gudGreenLight',
    borderColor: '$gudGreenLight',
    borderRadius: '$gudBorderRadius',
  },
  inactiveBtn: {
    backgroundColor: '$gudWhite',
    borderColor: '$gudGray',
    borderRadius: '$gudBorderRadius',
  },
  inactiveText: {
    color: '$gudGray',
  },
  credentialsTouchableActive: {
    height: (Dimensions.get('window').height * 5) / 100,
    borderRadius: '$gudBorderRadius',
    display: 'flex',
    justifyContent: 'center',
  },
  touchableActive: {
    width: '$touchableWidth',
    height: (Dimensions.get('window').height * 5) / 100,
    borderRadius: '$gudBorderRadius',
    display: 'flex',
    justifyContent: 'center',
  },

  // Input styling
  gudInput: {
    width: (Dimensions.get('window').width * 80) / 100,
    height: (Dimensions.get('window').height * 5) / 100,
    borderColor: '$gudGreenRegular',
    borderWidth: 1,
    borderRadius: '$gudBorderRadius',
    paddingLeft: 15,
    margin: '2%',
  },
  valid: {
    borderWidth: 1,
    borderColor: '$gudGreenRegular',
  },
  invalid: {
    borderWidth: 1,
    borderColor: 'red',
  },

  // GUD Radio Button
  gudRadioButtonGroup: {
    flexDirection: 'row',
    textAlign: 'left',
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
    backgroundColor: '$gudGreenMedium',
  },

  // General Styling
  gudSeparator: {
    position: 'relative',
    // provisional
    width: (Dimensions.get('window').width * 8) / 100,
    height: (Dimensions.get('window').height * 0.5) / 100,
    backgroundColor: '$gudGreenDark',
    borderRadius: '$gudBorderRadius',
    marginBottom: '$gudSeparatorPaddingBottom',
  },

  // Old styles
  gudTitle: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
    color: '$gudBlack',
  },
});
