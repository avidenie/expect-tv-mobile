import * as React from 'react';

import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';

import BottomTabs from 'routes/BottomTabs';
import MovieDetails from 'screens/MovieDetails';
import { RouteProp } from '@react-navigation/native';
import Settings from 'screens/Settings';
import TvShowDetails from 'screens/TvShowDetails';

export type ParamList = {
  BottomTabs: undefined;
  MovieDetails: {
    tmdbId: number;
  };
  TvShowDetails: {
    tmdbId: number;
  };
  Settings: undefined;
};

export type NavigationProp<T extends keyof ParamList> = StackNavigationProp<
  ParamList,
  T
>;

export type Props<T extends keyof ParamList> = {
  navigation: NavigationProp<T>;
  route: RouteProp<ParamList, T>;
};

const Stack = createStackNavigator<ParamList>();

function RootStack(): React.ReactElement {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={{
          headerTitle: 'Expect TV',
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
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          headerTitle: 'Settings',
        }}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
