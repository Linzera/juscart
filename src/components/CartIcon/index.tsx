import * as React from "react";
import { inject, observer } from "mobx-react";
import { Badge, Icon, Text, Body, Button } from "native-base";
import { IUserStore } from "../../store/UserStore";
import { View } from "react-native";

interface IProps {
  userStore?: IUserStore;
}

@inject("userStore")
@observer
class CartIcon extends React.Component<IProps> {
  render() {
    const { userStore } = this.props;

    return <View style={{ flex: 1, backgroundColor: "#000" }} />;
  }
}

export default CartIcon;
