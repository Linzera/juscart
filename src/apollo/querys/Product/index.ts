import gql from "graphql-tag";

export const GET_PRODUCTS_QUERY = gql`
  query {
    products {
      id
      price
      name
      photoUrl
      stock
    }
  }
`;
