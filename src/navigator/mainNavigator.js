import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen210591Navigator from '../features/BlankScreen210591/navigator';
import BlankScreen110590Navigator from '../features/BlankScreen110590/navigator';
import BlankScreen010589Navigator from '../features/BlankScreen010589/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen210591: { screen: BlankScreen210591Navigator },
BlankScreen110590: { screen: BlankScreen110590Navigator },
BlankScreen010589: { screen: BlankScreen010589Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
