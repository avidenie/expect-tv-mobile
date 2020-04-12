import * as React from 'react';

import { Button, StyleSheet, Text, View } from 'react-native';

import { Props } from 'routes/MoviesStack';

function Movies({ navigation }: Props<'Movies'>) {
  return (
    <View style={styles.container}>
      <Text>Movies Screen</Text>
      <Button
        title="Go to movie details"
        onPress={() =>
          navigation.navigate('MovieDetails', {
            id: 'movieId',
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

export default Movies;
