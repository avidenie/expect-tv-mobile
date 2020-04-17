import * as React from 'react';

import DefaultStack from 'routes/DefaultStack';
import { NavigationContainer } from '@react-navigation/native';

function App(): React.ReactElement {
  return (
    <NavigationContainer>
      <DefaultStack />
    </NavigationContainer>
  );
}

export default App;
