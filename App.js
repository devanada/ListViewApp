import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Slider from './src/components/Slider';
import ListView from './src/components/ListView';
import MainScreen from './src/screens/MainScreen';

const navigator = createStackNavigator(
  {
    Carousel: Slider,
    List: ListView,
    Main: MainScreen
  }, {
    initialRouteName: 'Main',
    defaultNavigationOptions: {
      title: 'Home'
    }
  });
  
  export default createAppContainer(navigator);