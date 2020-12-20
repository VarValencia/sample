/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import GudText from './components/GudText'
import { name as appName } from './app.json';

global.GudText = GudText;
AppRegistry.registerComponent(appName, () => App);
