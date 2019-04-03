import { createAppContainer } from "react-navigation";

import AppFlow from "./App";

export enum APP_FLOW_ROUTES {
  HOME = "Home",
  CART = "Cart",
  DETAIL = "Detail"
}

export default createAppContainer(AppFlow);
