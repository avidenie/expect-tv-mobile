import React from 'react';
import HomeScreen from 'screens/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function RootNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default RootNavigation;
