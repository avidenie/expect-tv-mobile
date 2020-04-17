import * as React from 'react';

import { Button, StyleSheet, Text, View } from 'react-native';

import { Props } from 'routes/DefaultStack';

function Settings({ navigation }: Props<'Settings'>): React.ReactElement {
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
      <View style={styles.buttons}>
        <Button title="Back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    width: '100%',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Settings;
