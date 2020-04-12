import * as React from 'react';

import BottomTabs from 'routes/BottomTabs';
import { NavigationContainer } from '@react-navigation/native';

function App(): React.ReactElement {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
}

export default App;
