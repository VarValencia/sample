/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import GudText from '@components/GudText';
import GRadioButtonGroup from '@components/GRadioButtonGroup';
import { name as appName } from './app.json';
import {scripts} from '@scripts/scripts'

global.GudText = GudText;
global.GRadioButtonGroup = GRadioButtonGroup;
global.scripts = scripts;

AppRegistry.registerComponent(appName, () => App);
