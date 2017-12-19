import { AppRegistry } from 'react-native';
import App from './src/App';

AppRegistry.registerComponent('CrossDevice', () => App);
AppRegistry.runApplication('CrossDevice', { rootTag: document.getElementById('root') });