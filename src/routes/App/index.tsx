import {
  NavigationRouteConfigMap,
  createStackNavigator,
  StackNavigatorConfig
} from "react-navigation";

import Cart from "../../screens/Cart";
import BuyFlow from "./BuyFlow";

const routeConfig: NavigationRouteConfigMap = {
  Home: { screen: BuyFlow },
  Cart: Cart
};

const drawConfig: StackNavigatorConfig = {
  initialRouteName: "Home",
  headerMode: "none"
};

export default createStackNavigator(routeConfig, drawConfig);
