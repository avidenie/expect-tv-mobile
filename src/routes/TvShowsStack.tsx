import * as React from 'react';

import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';

import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { ParamList as BottomTabsParamList } from 'routes/BottomTabs';
import TvShowDetails from 'screens/TvShowDetails';
import TvShows from 'screens/TvShows';

type ParamList = {
  TvShows: undefined;
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

function TvShowsStack(): React.ReactElement {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TvShows"
        component={TvShows}
        options={{
          headerTitle: 'TV Shows',
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

export default TvShowsStack;
