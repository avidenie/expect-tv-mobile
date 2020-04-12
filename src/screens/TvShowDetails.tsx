import * as React from 'react';

import { Button, StyleSheet, Text, View } from 'react-native';

import { Props as DiscoverProps } from 'routes/DiscoverStack';
import { Props as TvShowsProps } from 'routes/TvShowsStack';

type Props = DiscoverProps<'TvShowDetails'> | TvShowsProps<'TvShowDetails'>;

function TvShowDetails({ navigation, route }: Props): React.ReactElement {
  const tvShowId = route.params.id;
  return (
    <View style={styles.container}>
      <Text>TV Show details (#{tvShowId})</Text>
      <Button
        title="Back to previous screen"
        onPress={() => navigation.goBack()}
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

export default TvShowDetails;
