import * as React from 'react';

import { ScrollView, StyleSheet } from 'react-native';

import DiscoverTvShows from 'components/DiscoverTvShows';
import { Props } from 'routes/BottomTabs';

function TvShows({ navigation }: Props<'TvShows'>): React.ReactElement {
  return (
    <ScrollView style={styles.container}>
      <DiscoverTvShows
        title="What's Popular"
        onPress={(tmdbId) => () =>
          navigation.navigate('TvShowDetails', { tmdbId })}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TvShows;
