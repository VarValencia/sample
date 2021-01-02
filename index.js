/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import GudText from '@components/GudText';
import GRadioButtonGroup from '@components/GRadioButtonGroup';
import ValidationField from '@components/ValidationField';
import { name as appName } from './app.json';

import AuthenticationService from '@scripts/authentication/AuthenticationService'

// Global components
global.GudText = GudText;
global.GRadioButtonGroup = GRadioButtonGroup;
global.ValidationField = ValidationField;

// Global scripts
global.AuthenticationService = AuthenticationService;

AppRegistry.registerComponent(appName, () => App);
