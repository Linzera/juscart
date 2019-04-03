import {
  createStackNavigator,
  NavigationRouteConfigMap,
  StackNavigatorConfig
} from "react-navigation";

import Home from "../../../screens/Home";
import Detail from "../../../screens/Detail";

const routeConfig: NavigationRouteConfigMap = {
  Home: { screen: Home },
  Detail: Detail
};

const drawConfig: StackNavigatorConfig = {
  initialRouteName: "Home",
  headerMode: "none"
};

export default createStackNavigator(routeConfig, drawConfig);
