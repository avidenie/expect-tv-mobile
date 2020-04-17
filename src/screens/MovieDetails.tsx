import * as React from 'react';

import { Button, StyleSheet, Text, View } from 'react-native';

import { Props } from 'routes/DefaultStack';

function MovieDetails({
  navigation,
  route,
}: Props<'MovieDetails'>): React.ReactElement {
  const movieId = route.params.id;
  return (
    <View style={styles.container}>
      <Text>Movie details (#{movieId})"</Text>
      <Button
        title="Back to previous screen"
        onPress={() => navigation.goBack()}
      />
      <Button
        title="Jump to TV Shows tab"
        onPress={() => navigation.navigate('TvShows')}
      />
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
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

export default MovieDetails;
