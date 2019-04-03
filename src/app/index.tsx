import React from "react";
import { ApolloProvider } from "react-apollo";
import { Provider } from "mobx-react";

import Root from "../routes";
import client from "../apollo";
import store from "../store";

const App = () => (
  <Provider {...store}>
    <ApolloProvider client={client}>
      <Root />
    </ApolloProvider>
  </Provider>
);

export default App;
