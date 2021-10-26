// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/home'
import DScreen from './screens/about'
import DetailsScreen from './screens/detailsScreen'
import Ebook from './screens/Ebook';
import BooksTypeTabs from './components/BooksTypeTabs';




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <HomeScreen />
      {/* <Stack.Navigator>
        <Stack.Screen name="BooksTypeTabs" component={BooksTypeTabs} options={{ title: "BooksTypeTabs" }} />
        <Stack.Screen name="Detials" component={DScreen} />
        <Stack.Screen name="Detial" component={DetailsScreen} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}

export default App;