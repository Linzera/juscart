import React from "react";
import { Card, CardItem, Left, Text, Right, Button } from "native-base";
import { Image, TouchableOpacity } from "react-native";
import { IProductItem } from "../../types/Products";
import { StyleSheet } from "react-native";

interface IProps extends IProductItem {
  onPress: () => void;
}

const ProductCard = ({ name, price, photoUrl, onPress }: IProps) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <Card style={styles.container}>
        <CardItem>
          <Left>
            <Text>Native Base</Text>
          </Left>
          <Right>
            <Text>R$ 101001</Text>
          </Right>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{
              uri:
                "https://static1.conquistesuavida.com.br/ingredients/5/54/26/75/@/24677--ingredient_detail_ingredient-2.png"
            }}
            style={styles.imageThumb}
          />
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  raisedButton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  imageThumb: {
    height: 200,
    width: undefined,
    flex: 1,
    resizeMode: "contain"
  },
  container: {
    marginTop: 15
  }
});

export default ProductCard;
