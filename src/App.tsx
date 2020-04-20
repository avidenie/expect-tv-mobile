import * as React from 'react';

import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';

import Config from 'react-native-config';
import DefaultStack from 'routes/DefaultStack';
import { NavigationContainer } from '@react-navigation/native';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: Config.GRAPHQL_ENDPOINT_URI,
  }),
});

function App(): React.ReactElement {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <DefaultStack />
      </NavigationContainer>
    </ApolloProvider>
  );
}

export default App;
