/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import Inici from './screens/logRegister/Inici';
//import LogIn from './screens/logRegister/LogIn';
//import SignUp from './screens/logRegister/SignUp';
import Events from './screens/mainMenu/Events';
//import Help from './screens/mainMenu/Help';
//import Home from './screens/mainMenu/Home';
//import MyBets from './screens/mainMenu/MyBets';
//import Details from './screens/bet/Details';
//import Bet from './screens/bet/Bet';
//import Admin from './screens/admin/Admin';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Events);