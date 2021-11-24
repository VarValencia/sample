import EStyleSheet from 'react-native-extended-stylesheet';

// Import Dimensions for screen measurement
import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

// App Theme
EStyleSheet.build({
  // COLORS
  $black: '#000',
  $SampleBlack: '#505050',
  $SampleWhite: '#FFF',
  $SampleGreenLight: '#E0F0F0',
  $SampleGreenMedium: '#C1E3E2',
  $SampleGreenRegular: '#A2D6D6',
  $SampleGreenDark: '#62BDBA',
  $SampleGreenDarkest: '#129089',
  $SampleGray: '#dadada',
  $SampleLightGray: '#f0f0f0',
  $SampleDarkGray: '#b2b2b2',

  // PADDINGS & MARGINS
  // Body
  $SampleBodyPaddingH: '5%',
  $SampleBodyPadding: '4%',
  $SampleRadioButtonMarginVertical: height * 0.01,

  // Titles
  $SampleTitlePaddingTop: '0%',
  $SampleSubTitlePaddingBottom: '3%',
  $SampleSeparatorPaddingBottom: '5%',

  // Buttons
  $touchableWidth: width * 0.8,
  $touchableCardWidth: width * 0.42,
  $touchableCardHeight: height * 0.035,
  $cardButtonRadius: 6,

  // FONTS & SIZES
  $b: 'Poppins-Bold',
  $sb: 'Poppins-SemiBold',
  $rg: 'Poppins-Regular',

  $SampleXS: height * 0.017,
  $SampleSM: (height * 1.5) / 100,
  $SampleMD: (height * 2) / 100,
  $SampleLG: (height * 2.5) / 100,

  $SampleTextPadding: 1,
  $SampleTextMarginTop: 0,

  // General styling
  $SampleBorderRadius: 15,
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
    paddingRight: '$SampleBodyPaddingH',
    paddingLeft: '$SampleBodyPaddingH',
    padding: '10%',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  body: {
    textAlign: 'center',
    width: width,
    height: height,
    paddingRight: '$SampleBodyPaddingH',
    paddingLeft: '$SampleBodyPaddingH',
    padding: '$SampleBodyPadding',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  appbar: {
    borderWidth: 1,
    borderColor: '$SampleGreenLight',
    backgroundColor: '$SampleWhite',
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
    borderColor: '$SampleGreenLight',
    backgroundColor: '$SampleWhite',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    height: height * 0.065,
    paddingHorizontal: 30,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    zIndex: 99,
  },
  toolbarIcon: {
    resizeMode: 'contain',
    borderRadius: 20,
    borderColor: '$SampleGreenRegular',
  },
  toolbarProfile: {
    height: width * 0.089,
    borderRadius: 20,
    borderColor: '$SampleGreenRegular',
  },
  // Containers
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  emergencyCallContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '$SampleGreenLight',
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
    backgroundColor: '$SampleGreenLight',
    borderRadius: '$SampleBorderRadius',
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
    borderRadius: '$SampleBorderRadius',
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
    borderColor: '$SampleGreenRegular',
    borderRadius: '$SampleBorderRadius',
    height: height * 0.15,
    textAlignVertical: 'top',
    fontSize: '$SampleMD',
    fontFamily: '$rg',
    padding: 15,
  },
  flatCardContainer: {
    padding: 20,
    borderRadius: '$SampleBorderRadius',
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
    justifyContent: 'flex-start',
    width: width * 0.9,
  },
  containerRowPadding: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: width * 0.3,
    paddingLeft: 20,
  },
  containerGallery: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.9,
    marginVertical: width * 0.01,
  },
  leftHeaderContainer: {
    width: width * 0.3,
    height: height * 0.05,
    justifyContent: 'flex-start',
  },
  rightHeaderContainer: {
    width: width * 0.55,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  // Text styles
  SampleText: {
    fontFamily: '$rg',
    color: '$SampleBlack',
    padding: '$SampleTextPadding',
    marginTop: '$SampleTextMarginTop',
    textAlignVertical: 'top',
  },
  title: {
    fontFamily: '$b',
    fontSize: '$SampleLG',
    paddingTop: '$SampleTitlePaddingTop',
  },
  userName: {
    fontFamily: '$sb',
    fontSize: '$SampleLG',
    paddingLeft: width * 0.08,
  },
  userNickname: {
    fontFamily: '$rg',
    fontSize: '$SampleMD',
    fontStyle: 'italic',
    paddingLeft: width * 0.08,
    color: '$SampleGreenDarkest',
  },
  userDescription: {
    fontFamily: '$rg',
    fontSize: '$SampleMD',
    fontStyle: 'italic',
    paddingLeft: width * 0.08,
  },
  pressTitle: {
    fontFamily: '$b',
    fontSize: '$SampleLG',
    paddingLeft: width * 0.08,
  },
  pressDescription: {
    fontFamily: '$rg',
    fontSize: '$SampleXS',
    paddingLeft: width * 0.08,
  },
  SampleButtonText: {
    fontFamily: '$sb',
    fontSize: '$SampleSM',
    color: '$SampleGreenDark',
    textAlign: 'center',
    textAlignVertical: 'top',
    justifyContent: 'center',
    alignItems: 'center',
  },
  SampleInputText: {
    fontFamily: '$sb',
    textAlign: 'left',
    paddingLeft: '2.6%',
  },
  sectionDescription: {
    fontFamily: '$sb',
    textAlign: 'center',
    fontSize: '$SampleMD',
    paddingBottom: '$SampleSubTitlePaddingBottom',
  },
  // For 'back' text in user experience screen
  carouselText: {
    fontFamily: '$sb',
    textAlign: 'center',
    fontSize: '$SampleLG',
    justifyContent: 'center',
    paddingBottom: '$SampleSubTitlePaddingBottom',
    textAlignVertical: 'center',
    padding: 20,
    backgroundColor: '$SampleGreenLight',
    borderRadius: '$SampleBorderRadius',
  },
  titleCardText: {
    fontFamily: '$rg',
    fontSize: '$SampleMD',
    paddingBottom: '$SampleSubTitlePaddingBottom',
    paddingLeft: width * 0.03,
  },
  titleCardTitle: {
    fontFamily: '$sb',
    fontSize: '$SampleMD',
    paddingBottom: '$SampleSubTitlePaddingBottom',
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
    fontSize: '$SampleLG',
    paddingBottom: height * 0.0015,
  },
  titleCardEditable: {
    fontFamily: '$sb',
    color: '$SampleGreenDark',
  },

  // Text sizes and weight
  textLG: {
    fontSize: '$SampleLG',
  },
  textMD: {
    fontSize: '$SampleMD',
  },
  textSM: {
    fontSize: '$SampleSM',
  },

  // Text decorations
  textFocus: {
    color: '$SampleGreenDark',
  },

  // Image styling
  SampleCardImage: {
    resizeMode: 'contain',
    width: (width * 80) / 100,
    height: (height * 30) / 100,
    margin: 10,
  },
  SampleBackgroundImage: {
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
  SampleImageBackgroundContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: (height * 29) / 100,
  },
  SampleIcon: {
    resizeMode: 'contain',
    width: width * 0.09,
    height: width * 0.09,
  },
  SamplePhoto: {
    resizeMode: 'cover',
    width: width * 0.19,
    height: width * 0.19,
    borderRadius: 50,
  },
  SampleArrowIcon: {
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
    backgroundColor: '$SampleWhite',
    borderRadius: '$SampleBorderRadius',
    borderWidth: 1,
    borderColor: '$SampleGreenRegular',
    margin: '2%',
  },
  SampleButton: {
    width: '$touchableWidth',
    height: (height * 5) / 100,
    backgroundColor: '$SampleWhite',
    borderRadius: '$SampleBorderRadius',
    borderWidth: 1,
    borderColor: '$SampleGreenRegular',
    margin: '2%',
    justifyContent: 'center',
  },
  cardButton: {
    flex: 1,
    height: (height * 5) / 100,
    backgroundColor: '$SampleWhite',
    borderRadius: '$cardButtonRadius',
    borderWidth: 1,
    borderColor: '$SampleGreenRegular',
    marginVertical: '2.5%',
    marginHorizontal: '1%',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  activeBtn: {
    backgroundColor: '$SampleGreenLight',
    borderColor: '$SampleGreenLight',
    borderRadius: '$SampleBorderRadius',
  },
  inactiveBtn: {
    backgroundColor: '$SampleWhite',
    borderColor: '$SampleGray',
    borderRadius: '$SampleBorderRadius',
  },
  inactiveText: {
    color: '$SampleGray',
  },
  credentialsTouchableActive: {
    height: (height * 5) / 100,
    borderRadius: '$SampleBorderRadius',
    display: 'flex',
    justifyContent: 'center',
  },
  touchableActive: {
    width: '$touchableWidth',
    height: (height * 5) / 100,
    borderRadius: '$SampleBorderRadius',
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
    backgroundColor: '$SampleWhite',
    margin: '2%',
  },
  SampleMediumButton: {
    width: width * 0.2,
    backgroundColor: '$SampleWhite',
    borderRadius: '$SampleBorderRadius',
    borderWidth: 1,
    borderColor: '$SampleGreenRegular',
    margin: '2%',
  },

  // Input styling
  SampleInput: {
    width: (width * 80) / 100,
    height: (height * 5) / 100,
    borderColor: '$SampleGreenRegular',
    borderWidth: 1,
    borderRadius: '$SampleBorderRadius',
    paddingLeft: 15,
    margin: '2%',
  },
  valid: {
    borderWidth: 1,
    borderColor: '$SampleGreenRegular',
  },
  invalid: {
    borderWidth: 1,
    borderColor: 'red',
  },

  // Sample Radio Button
  SampleRadioButtonGroup: {
    flexDirection: 'row',
  },
  rbCircle: {
    height: 20,
    width: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '$SampleGreenDark',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  rbCheckedCircle: {
    width: 15,
    height: 15,
    borderRadius: 10,
    backgroundColor: '$SampleGreenMedium',
  },

  // General Styling
  SampleSeparator: {
    position: 'relative',
    width: (width * 8) / 100,
    height: (height * 0.5) / 100,
    backgroundColor: '$SampleGreenDark',
    borderRadius: '$SampleBorderRadius',
    marginBottom: '$SampleSeparatorPaddingBottom',
  },
  SampleItemSeparator: {
    position: 'relative',
    width: width * 0.9,
    height: 1,
    backgroundColor: '$SampleGray',
    marginBottom: height * 0.03,
  },
  SampleTitleSeparator: {
    position: 'relative',
    width: width,
    height: 1,
    backgroundColor: '$SampleGray',
    marginBottom: height * 0.03,
  },
  SampleDropDownContainer: {
    width: width * 0.8,
    height: height * 0.05,
  },
  SampleDropDown: {
    borderWidth: 1,
    borderColor: '$SampleGreenRegular',
    borderRadius: '$SampleBorderRadius',
  },
  dropDownItem: {
    backgroundColor: '#fff',
  },

  SampleDropDownItems: {
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
