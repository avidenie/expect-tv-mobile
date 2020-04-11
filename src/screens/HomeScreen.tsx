import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Hello from React Native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
