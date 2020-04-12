import * as React from 'react';

import { Button, StyleSheet, Text, View } from 'react-native';

import { Props } from 'routes/TvShowsStack';

function TvShows({ navigation }: Props<'TvShows'>) {
  return (
    <View style={styles.container}>
      <Text>TV Shows screen</Text>
      <Button
        title="Go to TV Show details"
        onPress={() =>
          navigation.navigate('TvShowDetails', {
            id: 'tvShowId',
          })
        }
      />
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

export default TvShows;
