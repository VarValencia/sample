/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// Component imports
import SampleText from '@Sample/SampleText';
import GRadioButtonGroup from '@Sample/GRadioButtonGroup';
import ValidationField from '@Sample/ValidationField';
import TitleCard from '@Sample/TitleCard';
import SampleDropDown from '@Sample/SampleDropDown';
import MenuItem from '@Sample/MenuItem';
import UserProfileCard from '@Sample/profile_items/UserProfileCard';

import PressCard from '@Sample/PressCard';
import ContactPhoto from '@Sample/ContactPhoto';
import ContactGallery from '@Sample/ContactGallery';
import HomeCard from '@Sample/HomeCard';
import Header from '@Sample/Header';
// Scripts import
import AuthenticationService from '@scripts/authentication/AuthenticationService';

// Styles import
import styles from '@styles/styles';
import EStyleSheet from 'react-native-extended-stylesheet';

// Global styles
global.styles = styles;
global.ESS = EStyleSheet;

// Global components
global.SampleText = SampleText;
global.GRadioButtonGroup = GRadioButtonGroup;
global.ValidationField = ValidationField;
global.TitleCard = TitleCard;
global.SampleDropDown = SampleDropDown;
global.MenuItem = MenuItem;
global.UserProfileCard = UserProfileCard;
global.PressCard = PressCard;
global.ContactPhoto = ContactPhoto;
global.ContactGallery = ContactGallery;
global.HomeCard = HomeCard;
global.Header = Header;

// Global scripts
global.AuthenticationService = AuthenticationService;

AppRegistry.registerComponent(appName, () => App);
