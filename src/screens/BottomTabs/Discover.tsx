import * as React from 'react';

import { ScrollView, StyleSheet, View } from 'react-native';

import PopularMovies from 'components/PopularMovies';
import PopularTvShows from 'components/PopularTvShows';
import { Props } from 'routes/BottomTabs';

function Discover({ navigation }: Props<'Discover'>): React.ReactElement {
  return (
    <ScrollView style={styles.container}>
      <View>
        <PopularMovies
          onPress={(tmdbId) => () =>
            navigation.navigate('MovieDetails', { tmdbId })}
        />
      </View>
      <View>
        <PopularTvShows
          onPress={(tmdbId) => () =>
            navigation.navigate('TvShowDetails', { tmdbId })}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Discover;
