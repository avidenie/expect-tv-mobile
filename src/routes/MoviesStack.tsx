import * as React from 'react';

import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';

import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { ParamList as BottomTabsParamList } from 'routes/BottomTabs';
import MovieDetails from 'screens/MovieDetails';
import Movies from 'screens/Movies';

type ParamList = {
  Movies: undefined;
  MovieDetails: {
    id: string;
  };
};

export type Props<T extends keyof ParamList> = {
  navigation: CompositeNavigationProp<
    StackNavigationProp<ParamList, T>,
    BottomTabNavigationProp<BottomTabsParamList>
  >;
  route: RouteProp<ParamList, T>;
};

const Stack = createStackNavigator<ParamList>();

function MoviesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Movies"
        component={Movies}
        options={{
          headerTitle: 'Movies',
        }}
      />
      <Stack.Screen
        name="MovieDetails"
        component={MovieDetails}
        options={{
          headerTitle: 'Movie Details',
        }}
      />
    </Stack.Navigator>
  );
}

export default MoviesStack;
