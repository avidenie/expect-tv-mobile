import * as React from 'react';

import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';

import { ParamList as DefaultStackParamList } from 'routes/DefaultStack';
import Discover from 'screens/BottomTabs/Discover';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Movies from 'screens/BottomTabs/Movies';
import { StackNavigationProp } from '@react-navigation/stack';
import TvShows from 'screens/BottomTabs/TvShows';

export type ParamList = {
  Discover: undefined;
  Movies: undefined;
  TvShows: undefined;
};

export type Props<T extends keyof ParamList> = {
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<ParamList, T>,
    StackNavigationProp<DefaultStackParamList>
  >;
  route: RouteProp<ParamList, T>;
};

const Tab = createBottomTabNavigator<ParamList>();

function BottomTabs(): React.ReactElement {
  return (
    <Tab.Navigator initialRouteName="Discover">
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          tabBarLabel: 'Discover',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="compass-outline"
              size={24}
              style={{ color: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Movies"
        component={Movies}
        options={{
          tabBarLabel: 'Movies',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="movie-outline"
              size={24}
              style={{ color: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="TvShows"
        component={TvShows}
        options={{
          tabBarLabel: 'TV Shows',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="youtube-tv"
              size={24}
              style={{ color: color }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabs;
