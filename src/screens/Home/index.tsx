import React from "react";
import { NavigationScreenProp } from "react-navigation";
import { FlatList } from "react-native";
import { IProductItem } from "../../types/Products";
import ProductCard from "../../components/ProductCard";
import { StyleSheet } from "react-native";
import ShopView from "../../components/ShopView";
import { APP_FLOW_ROUTES } from "../../routes";

interface IProps {
  navigation: NavigationScreenProp<{}>;
}

const data: IProductItem[] = [
  {
    id: "0",
    name: "Teste",
    price: 1002,
    photoUrl: "123123",
    description: "Teste",
    stock: 3
  },
  {
    id: "1",
    name: "Teste",
    price: 1003,
    photoUrl: "123123",
    description: "Teste",
    stock: 3
  }
];

const Home = ({ navigation }: IProps) => {
  return (
    <ShopView
      onCartPress={() => navigation.navigate(APP_FLOW_ROUTES.CART)}
      back={false}
      headerTitle="JusCart"
    >
      <FlatList
        keyExtractor={item => item.price.toString()}
        contentContainerStyle={styles.listContainer}
        data={data}
        renderItem={({ item }) => (
          <ProductCard
            onPress={() => navigation.navigate("Detail", item)}
            {...item}
          />
        )}
      />
    </ShopView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  listContainer: {
    padding: 20
  }
});

export default Home;
