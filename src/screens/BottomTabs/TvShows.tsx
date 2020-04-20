import * as React from 'react';

import { ScrollView, StyleSheet } from 'react-native';

import PopularTvShows from 'components/PopularTvShows';
import { Props } from 'routes/BottomTabs';

function TvShows({ navigation }: Props<'TvShows'>): React.ReactElement {
  return (
    <ScrollView style={styles.container}>
      <PopularTvShows
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
