import React from "react";
import { Text } from "react-native";
import ShopView from "../../components/ShopView";
import { NavigationScreenProp } from "react-navigation";

interface IProps {
  navigation: NavigationScreenProp<{}>;
}

const Cart = ({ navigation }: IProps) => {
  return (
    <ShopView back onBack={() => navigation.goBack()}>
      <Text>Cart</Text>
    </ShopView>
  );
};

export default Cart;
