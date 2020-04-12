import * as React from 'react';

import { Button, StyleSheet, Text, View } from 'react-native';

import { Props as DiscoverProps } from 'routes/DiscoverStack';
import { Props as MoviesProps } from 'routes/MoviesStack';

type Props = DiscoverProps<'MovieDetails'> | MoviesProps<'MovieDetails'>;

function MovieDetails({ navigation, route }: Props): React.ReactElement {
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
        onPress={() => navigation.jumpTo('TvShowsTab')}
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
