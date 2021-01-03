/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// Component imports
import GudText from '@gud/GudText';
import GRadioButtonGroup from '@gud/GRadioButtonGroup';
import ValidationField from '@gud/ValidationField';
import TitleCard from '@gud/TitleCard';

// Scripts import
import AuthenticationService from '@scripts/authentication/AuthenticationService'

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

// Global scripts
global.AuthenticationService = AuthenticationService;

AppRegistry.registerComponent(appName, () => App);
