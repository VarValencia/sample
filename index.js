/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// Component imports
import GudText from '@gud/GudText';
import GRadioButtonGroup from '@gud/GRadioButtonGroup';
import ValidationField from '@gud/ValidationField';
import TitleCard from '@gud/TitleCard';
import GudDropDown from '@gud/GudDropDown';
import MenuItem from '@gud/MenuItem';
import UserProfileCard from '@gud/profile_items/UserProfileCard';

import PressCard from '@gud/PressCard';
import ContactPhoto from '@gud/ContactPhoto';
// Scripts import
import AuthenticationService from '@scripts/authentication/AuthenticationService';

// Styles import
import styles from '@styles/styles';
import EStyleSheet from 'react-native-extended-stylesheet';

// Global styles
global.styles = styles;
global.ESS = EStyleSheet;

// Global components
global.GudText = GudText;
global.GRadioButtonGroup = GRadioButtonGroup;
global.ValidationField = ValidationField;
global.TitleCard = TitleCard;
global.GudDropDown = GudDropDown;
global.MenuItem = MenuItem;
global.UserProfileCard = UserProfileCard;
global.PressCard = PressCard;
global.ContactPhoto = ContactPhoto;

// Global scripts
global.AuthenticationService = AuthenticationService;

AppRegistry.registerComponent(appName, () => App);
