import * as React from 'react';

import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import DiscoverStack from 'routes/DiscoverStack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MoviesStack from 'routes/MoviesStack';
import { RouteProp } from '@react-navigation/native';
import TvShowsStack from 'routes/TvShowsStack';

export type ParamList = {
  DiscoverTab: undefined;
  MoviesTab: undefined;
  TvShowsTab: undefined;
};

export type Props<T extends keyof ParamList> = {
  navigation: BottomTabNavigationProp<ParamList, T>;
  route: RouteProp<ParamList, T>;
};

const Tab = createBottomTabNavigator<ParamList>();

function BottomTabs() {
  return (
    <Tab.Navigator initialRouteName="DiscoverTab">
      <Tab.Screen
        name="DiscoverTab"
        component={DiscoverStack}
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
        name="MoviesTab"
        component={MoviesStack}
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
        name="TvShowsTab"
        component={TvShowsStack}
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
