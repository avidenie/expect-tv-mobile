import * as React from 'react';

import { ScrollView, StyleSheet, View } from 'react-native';

import DiscoverMovies from 'components/DiscoverMovies';
import DiscoverTvShows from 'components/DiscoverTvShows';
import { Props } from 'routes/BottomTabs';

function Discover({ navigation }: Props<'Discover'>): React.ReactElement {
  return (
    <ScrollView style={styles.container}>
      <View>
        <DiscoverMovies
          title="What's Popular"
          onPress={(tmdbId) => () =>
            navigation.navigate('MovieDetails', { tmdbId })}
        />
      </View>
      <View>
        <DiscoverTvShows
          title="What's Popular"
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
