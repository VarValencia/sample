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
  $gudBodyPaddingH: '10%',
  $gudBodyPaddingV: '0%',

  // Titles
  $gudTitlePaddingTop: '5%',
  $gudSubTitlePaddingBottom: '20%',
  $gudSeparatorPaddingBottom: '5%',

  // Buttons
  $touchableWidth: (Dimensions.get('window').width * 80) / 100,

  // FONTS & SIZES
  $b: 'Poppins-Bold',
  $sb: 'Poppins-SemiBold',
  $rg: 'Poppins-Regular',

  $gudSM:
    ((Dimensions.get('window').width * 12) / Dimensions.get('window').height) *
    1.7,
  $gudMD:
    ((Dimensions.get('window').width * 16) / Dimensions.get('window').height) *
    1.2,
  $gudLG:
    ((Dimensions.get('window').width * 20.5) /
      Dimensions.get('window').height) *
    1.3,

  $gudTextPadding: 3,
  $gudTextMarginTop: (Dimensions.get('window').height * 0.1) / 100,

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
    alignItems: 'stretch',
    justifyContent: 'center',
    display: 'flex',
  },

  // Containers
  cardContainer: {
    position: 'relative',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  appImageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    textAlign: 'left',
  },

  // Text styles
  gudText: {
    fontFamily: '$sb',
    color: '$gudBlack',
    padding: '$gudTextPadding',
    marginTop: '$gudTextMarginTop',
  },
  title: {
    fontFamily: '$b',
    paddingTop: '$gudTitlePaddingTop',
  },
  gudButtonText: {
    fontFamily: '$sb',
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
    fontFamily: '$b',
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
    width: '$touchableWidth',
    backgroundColor: '$gudWhite',
    borderRadius: '$gudBorderRadius',
    borderWidth: 1,
    borderColor: '$gudGreenRegular',
    alignItems: 'center',
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
