import React, { ReactNode } from "react";
import { View, StyleSheet } from "react-native";
import {
  Container,
  Header,
  Left,
  Button,
  Icon,
  Body,
  Title,
  Right,
  Badge,
  Text
} from "native-base";

interface IProps {
  children: ReactNode;
  headerTitle?: string;
  back: boolean;
  onBack?: () => void;
  onCartPress?: () => void;
}

const ShopView = ({
  children,
  headerTitle,
  back,
  onBack,
  onCartPress
}: IProps) => (
  <Container>
    <Header>
      <Left>
        {back ? (
          <Button transparent onPress={() => onBack!()}>
            <Icon name="arrow-back" />
          </Button>
        ) : null}
      </Left>
      <Body>
        <Title>{headerTitle}</Title>
      </Body>
      <Right>
        {back ? null : (
          <Button transparent onPress={() => onCartPress!()}>
            <Badge success style={{ position: "absolute" }}>
              <Text>2</Text>
            </Badge>
            <Icon name="cart" />
          </Button>
        )}
      </Right>
    </Header>
    <View style={styles.container}>{children}</View>
  </Container>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default ShopView;
