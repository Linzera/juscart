import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationScreenProp, NavigationRoute } from "react-navigation";
import { IProductItem } from "../../types/Products";
import { Button } from "native-base";
import ShopView from "../../components/ShopView";

export interface IDetailScreenProps extends IProductItem {}

interface IProps {
  navigation: NavigationScreenProp<NavigationRoute<IDetailScreenProps>>;
}

const Detail = ({ navigation }: IProps) => (
  <ShopView headerTitle="Comprar" back onBack={() => navigation.goBack()}>
    <View style={styles.content} />
    <View style={styles.footer}>
      <Button success style={styles.raisedButton}>
        <Text style={styles.buttonText}>Adicionar ao carrinho</Text>
      </Button>
    </View>
  </ShopView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 8
  },
  footer: {
    flex: 1,
    padding: 10,
    justifyContent: "center"
  },
  raisedButton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "#fff"
  }
});

export default Detail;
