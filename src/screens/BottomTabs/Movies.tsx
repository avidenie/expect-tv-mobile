import * as React from 'react';

import { ScrollView, StyleSheet } from 'react-native';

import DiscoverMovies from 'components/DiscoverMovies';
import { Props } from 'routes/BottomTabs';

function Movies({ navigation }: Props<'Movies'>): React.ReactElement {
  return (
    <ScrollView style={styles.container}>
      <DiscoverMovies
        title="What's Popular"
        onPress={(tmdbId) => () =>
          navigation.navigate('MovieDetails', { tmdbId })}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Movies;
