import 'react-native-gesture-handler';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Dimensions} from 'react-native';

import MainScreen from './screen/MainScreen'
import Login from './screen/Login'

const {height, width}= Dimensions.get("window")
const AppNavigator = createStackNavigator ({
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false
    },
  },
  MainScreen: {
    screen: MainScreen,
    navigationOptions: {
      headerShown: false
    },
  }
});

export default createAppContainer(AppNavigator);