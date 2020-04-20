import * as React from 'react';

import { ScrollView, StyleSheet } from 'react-native';

import PopularMovies from 'components/PopularMovies';
import { Props } from 'routes/BottomTabs';

function Movies({ navigation }: Props<'Movies'>): React.ReactElement {
  return (
    <ScrollView style={styles.container}>
      <PopularMovies
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
