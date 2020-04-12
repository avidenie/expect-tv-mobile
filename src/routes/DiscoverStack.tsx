import * as React from 'react';

import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';

import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { ParamList as BottomTabsParamList } from 'routes/BottomTabs';
import Discover from 'screens/Discover';
import MovieDetails from 'screens/MovieDetails';
import TvShowDetails from 'screens/TvShowDetails';

type ParamList = {
  Discover: undefined;
  MovieDetails: {
    id: string;
  };
  TvShowDetails: {
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

function DiscoverStack(): React.ReactElement {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Discover"
        component={Discover}
        options={{
          headerTitle: 'Discover',
        }}
      />
      <Stack.Screen
        name="MovieDetails"
        component={MovieDetails}
        options={{
          headerTitle: 'Movie Details',
        }}
      />
      <Stack.Screen
        name="TvShowDetails"
        component={TvShowDetails}
        options={{
          headerTitle: 'TV Show Details',
        }}
      />
    </Stack.Navigator>
  );
}

export default DiscoverStack;
