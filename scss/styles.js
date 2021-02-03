import EStyleSheet from 'react-native-extended-stylesheet';

// Import Dimensions for screen measurement
import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

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
  $gudGreenDarkest: '#129089',
  $gudGray: '#dadada',
  $gudLightGray: '#f0f0f0',
  $gudDarkGray: '#b2b2b2',

  // PADDINGS & MARGINS
  // Body
  $gudBodyPaddingH: '5%',
  $gudBodyPadding: '4%',
  $gudRadioButtonMarginVertical: height * 0.01,

  // Titles
  $gudTitlePaddingTop: '0%',
  $gudSubTitlePaddingBottom: '3%',
  $gudSeparatorPaddingBottom: '5%',

  // Buttons
  $touchableWidth: width * 0.8,
  $touchableCardWidth: width * 0.42,
  $touchableCardHeight: height * 0.035,
  $cardButtonRadius: 6,

  // FONTS & SIZES
  $b: 'Poppins-Bold',
  $sb: 'Poppins-SemiBold',
  $rg: 'Poppins-Regular',

  $gudXS: height * 0.017,
  $gudSM: (height * 1.5) / 100,
  $gudMD: (height * 2) / 100,
  $gudLG: (height * 2.5) / 100,

  $gudTextPadding: 1,
  $gudTextMarginTop: 0,

  // General styling
  $gudBorderRadius: 15,
  $menuItemBorderRadius: 10,
});

export default EStyleSheet.create({
  // New styles
  scrollView: {
    justifyContent: 'center',
  },
  bodyLogin: {
    position: 'relative',
    textAlign: 'center',
    width: width,
    height: height,
    paddingRight: '$gudBodyPaddingH',
    paddingLeft: '$gudBodyPaddingH',
    padding: '10%',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  body: {
    textAlign: 'center',
    width: width,
    height: height,
    paddingRight: '$gudBodyPaddingH',
    paddingLeft: '$gudBodyPaddingH',
    padding: '$gudBodyPadding',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  appbar: {
    borderWidth: 1,
    borderColor: '$gudGreenLight',
    backgroundColor: '$gudWhite',
    position: 'absolute',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    height: height * 0.065,
    paddingHorizontal: 30,
    left: 0,
    right: 0,
  },
  toolbarContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  toolbar: {
    borderWidth: 1,
    borderColor: '$gudGreenLight',
    backgroundColor: '$gudWhite',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    height: height * 0.065,
    paddingHorizontal: 30,
    left: 0,
    right: 0,
    bottom: 0,
  },
  toolbarIcon: {
    resizeMode: 'contain',
    borderRadius: 20,
    borderColor: '$gudGreenRegular',
  },
  toolbarProfile: {
    height: width * 0.089,
    borderRadius: 20,
    borderColor: '$gudGreenRegular',
  },
  // Containers
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  emergencyCallContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '$gudGreenLight',
    borderRadius: '$cardButtonRadius',
    justifyContent: 'center',
    padding: 20,
  },
  pressCardContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    height: height,
  },
  profileCardContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '$gudGreenLight',
    borderRadius: '$gudBorderRadius',
    padding: 10,
  },
  cardContainerLeft: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  appLogoContainer: {
    alignItems: 'center',
  },
  appImageContainer: {
    margin: height * 0.05,
    alignItems: 'center',
  },
  inputContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  carouselContainer: {
    flexDirection: 'column',
    padding: width * 0.03,
    borderRadius: '$gudBorderRadius',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 3,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: width * 0.9,
    height: height * 0.265,
  },
  carouselCard: {
    position: 'relative',
    width: width * 0.8,
  },
  textInputContainer: {
    position: 'relative',
    borderWidth: 1,
    borderColor: '$gudGreenRegular',
    borderRadius: '$gudBorderRadius',
    height: height * 0.15,
    textAlignVertical: 'top',
    fontSize: '$gudMD',
    fontFamily: '$rg',
    padding: 15,
  },
  flatCardContainer: {
    padding: 20,
    borderRadius: '$gudBorderRadius',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 3,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: width * 0.7,
  },
  flatCardItem: {
    alignItems: 'flex-start',
    width: width * 0.78,
    justifyContent: 'center',
  },
  flatCardItemComponent: {
    alignItems: 'flex-end',
  },
  titleCardContainer: {
    width: width * 0.8,
    flexDirection: 'column',
    alignItems: 'flex-start',
    display: 'flex',
  },
  containerButtonRight: {
    alignItems: 'flex-end',
    width: width * 0.87,
  },
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: width * 0.9,
  },

  // Text styles
  gudText: {
    fontFamily: '$rg',
    color: '$gudBlack',
    padding: '$gudTextPadding',
    marginTop: '$gudTextMarginTop',
    textAlignVertical: 'top',
  },
  title: {
    fontFamily: '$b',
    fontSize: '$gudLG',
    paddingTop: '$gudTitlePaddingTop',
  },
  userName: {
    fontFamily: '$sb',
    fontSize: '$gudLG',
    paddingLeft: width * 0.08,
  },
  userNickname: {
    fontFamily: '$rg',
    fontSize: '$gudMD',
    fontStyle: 'italic',
    paddingLeft: width * 0.08,
    color: '$gudGreenDarkest',
  },
  userDescription: {
    fontFamily: '$rg',
    fontSize: '$gudMD',
    fontStyle: 'italic',
    paddingLeft: width * 0.08,
  },
  pressTitle: {
    fontFamily: '$b',
    fontSize: '$gudLG',
    paddingLeft: width * 0.08,
  },
  pressDescription: {
    fontFamily: '$rg',
    fontSize: '$gudXS',
    paddingLeft: width * 0.08,
  },
  gudButtonText: {
    fontFamily: '$sb',
    fontSize: '$gudSM',
    color: '$gudGreenDark',
    textAlign: 'center',
    textAlignVertical: 'top',
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
  // For 'back' text in user experience screen
  carouselText: {
    fontFamily: '$sb',
    textAlign: 'center',
    fontSize: '$gudLG',
    justifyContent: 'center',
    paddingBottom: '$gudSubTitlePaddingBottom',
    textAlignVertical: 'center',
    padding: 20,
    backgroundColor: '$gudGreenLight',
    borderRadius: '$gudBorderRadius',
  },
  titleCardText: {
    fontFamily: '$rg',
    fontSize: '$gudMD',
    paddingBottom: '$gudSubTitlePaddingBottom',
    paddingLeft: width * 0.03,
  },
  titleCardTitle: {
    fontFamily: '$sb',
    fontSize: '$gudMD',
    paddingBottom: '$gudSubTitlePaddingBottom',
  },
  menuItemBase: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    width: '$touchableWidth',
    height: (height * 4.6) / 100,
    borderRadius: '$menuItemBorderRadius',
  },
  pressCard: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 3,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: '$menuItemBorderRadius',
    width: width * 0.87,
    margin: '2%',
  },
  pressLeft: {
    width: width * 0.6,
    padding: 15,
  },
  pressRight: {
    padding: 15,
  },
  profileCard: {
    flexDirection: 'row',
    display: 'flex',
    borderRadius: '$menuItemBorderRadius',
    width: width * 0.8,
  },
  menuItemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'baseline',
    textAlignVertical: 'center',
  },
  menuItemText: {
    paddingLeft: width * 0.06,
    fontFamily: '$rg',
    fontSize: '$gudLG',
    paddingBottom: height * 0.0015,
  },
  titleCardEditable: {
    fontFamily: '$sb',
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
    width: (width * 80) / 100,
    height: (height * 30) / 100,
    margin: 10,
  },
  gudBackgroundImage: {
    width: (width * 70) / 100,
    height: (width * 70) / 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appLogo: {
    width: (width * 10) / 100,
    height: (width * 10) / 100,
    resizeMode: 'contain',
  },
  gudImageBackgroundContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: (height * 29) / 100,
  },
  gudIcon: {
    resizeMode: 'contain',
    width: width * 0.09,
    height: width * 0.09,
  },
  gudPhoto: {
    resizeMode: 'cover',
    width: width * 0.19,
    height: width * 0.19,
    borderRadius: 50,
  },
  gudArrowIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.1,
  },
  profilePicture: {
    width: width * 0.18,
    height: width * 0.18,
    borderRadius: 50,
    alignItems: 'flex-end',
  },
  pressCardPicture: {
    width: width * 0.27,
    height: height * 0.2,
  },
  OnlineIcon: {
    width: width * 0.05,
    width: width * 0.05,
  },

  // Button styling
  buttonContainer: {
    position: 'relative',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  credentialButton: {
    width: (width * 60) / 100,
    height: (height * 5) / 100,
    backgroundColor: '$gudWhite',
    borderRadius: '$gudBorderRadius',
    borderWidth: 1,
    borderColor: '$gudGreenRegular',
    margin: '2%',
  },
  gudButton: {
    width: '$touchableWidth',
    height: (height * 5) / 100,
    backgroundColor: '$gudWhite',
    borderRadius: '$gudBorderRadius',
    borderWidth: 1,
    borderColor: '$gudGreenRegular',
    margin: '2%',
    justifyContent: 'center',
  },
  cardButton: {
    flex: 1,
    height: (height * 5) / 100,
    backgroundColor: '$gudWhite',
    borderRadius: '$cardButtonRadius',
    borderWidth: 1,
    borderColor: '$gudGreenRegular',
    marginVertical: '2.5%',
    marginHorizontal: '1%',
    justifyContent: 'space-between',
    alignItems: 'stretch',
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
    height: (height * 5) / 100,
    borderRadius: '$gudBorderRadius',
    display: 'flex',
    justifyContent: 'center',
  },
  touchableActive: {
    width: '$touchableWidth',
    height: (height * 5) / 100,
    borderRadius: '$gudBorderRadius',
    display: 'flex',
    justifyContent: 'center',
  },
  touchableCardActive: {
    width: '$touchableCardWidth',
    height: '$touchableCardHeight',
    borderRadius: '$cardButtonRadius',
    display: 'flex',
    justifyContent: 'center',
  },
  titleCardEditButton: {
    backgroundColor: '$gudWhite',
    margin: '2%',
  },
  gudMediumButton: {
    width: width * 0.2,
    backgroundColor: '$gudWhite',
    borderRadius: '$gudBorderRadius',
    borderWidth: 1,
    borderColor: '$gudGreenRegular',
    margin: '2%',
  },

  // Input styling
  gudInput: {
    width: (width * 80) / 100,
    height: (height * 5) / 100,
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
  },
  rbCircle: {
    height: 20,
    width: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '$gudGreenDark',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  rbCheckedCircle: {
    width: 15,
    height: 15,
    borderRadius: 10,
    backgroundColor: '$gudGreenMedium',
  },

  // General Styling
  gudSeparator: {
    position: 'relative',
    width: (width * 8) / 100,
    height: (height * 0.5) / 100,
    backgroundColor: '$gudGreenDark',
    borderRadius: '$gudBorderRadius',
    marginBottom: '$gudSeparatorPaddingBottom',
  },
  gudItemSeparator: {
    position: 'relative',
    width: width * 0.9,
    height: 1,
    backgroundColor: '$gudGray',
    marginBottom: height * 0.03,
  },
  gudTitleSeparator: {
    position: 'relative',
    width: width,
    height: 1,
    backgroundColor: '$gudGray',
    marginBottom: height * 0.03,
  },
  gudDropDownContainer: {
    width: width * 0.8,
    height: height * 0.05,
  },
  gudDropDown: {
    borderWidth: 1,
    borderColor: '$gudGreenRegular',
    borderRadius: '$gudBorderRadius',
  },
  dropDownItem: {
    backgroundColor: '#fff',
  },

  gudDropDownItems: {
    backgroundColor: '#fff',
  },
  dropCardContainer: {
    elevation: 3,
    width: width * 0.8,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  dropTextContainer: {
    padding: 20,
    elevation: 3,
    width: width * 0.9,
  },
  dropDownCard: {
    flexDirection: 'column',
  },
});
