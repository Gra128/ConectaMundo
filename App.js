import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import TourismDetailsScreen from './TourismDetailsScreen';
import EmDesenvolvimento from './EmDesenvolvimento';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="TourismDetailsScreen" component={TourismDetailsScreen} />
        <Stack.Screen name="EmDesenvolvimento" component={EmDesenvolvimento} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
