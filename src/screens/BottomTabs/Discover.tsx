import * as React from 'react';

import { Button, StyleSheet, Text, View } from 'react-native';

import { Props } from 'routes/BottomTabs';

function Discover({ navigation }: Props<'Discover'>): React.ReactElement {
  return (
    <View style={styles.container}>
      <Text>Discover Screen</Text>
      <View style={styles.buttons}>
        <Button
          title="A Movie"
          onPress={() =>
            navigation.navigate('MovieDetails', {
              id: 'someMovieId',
            })
          }
        />
        <Button
          title="A TV Show"
          onPress={() =>
            navigation.navigate('TvShowDetails', {
              id: 'someTvShowId',
            })
          }
        />
        <Button title="Settings" onPress={() => navigation.push('Settings')} />
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

export default Discover;
