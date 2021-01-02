/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// Component imports
import GudText from '@components/GudText';
import GRadioButtonGroup from '@components/GRadioButtonGroup';
import ValidationField from '@components/ValidationField';
import CarouselCard from '@components/CarouselCard';

// Scripts import
import AuthenticationService from '@scripts/authentication/AuthenticationService'

// Styles import
import styles from '@styles/styles';
import EStyleSheet from 'react-native-extended-stylesheet';

// Global styles
global.styles = styles;
global.EStyleSheet = EStyleSheet;

// Global components
global.GudText = GudText;
global.GRadioButtonGroup = GRadioButtonGroup;
global.ValidationField = ValidationField;
global.CarouselCard = CarouselCard;

// Global scripts
global.AuthenticationService = AuthenticationService;

AppRegistry.registerComponent(appName, () => App);
