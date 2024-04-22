import React from 'react';
import styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '/Users/dannykwon/DailyBibleReader/screens/HomeScreen.js'; 
import ReadingScreen from '/Users/dannykwon/DailyBibleReader/screens/ReaderScreen.js'; 

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'DailyBibleReading' }} />
        <Stack.Screen name="Reading" component={ReadingScreen} options={{ title: 'Todays Reading' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
async function fetchChapter(book, chapter) {
    const response = await fetch(`https://api.scripture.api.bible/v1/bibles/eng-ESV/chapters/${book}.${chapter}`, {
        headers: {
            'api-key': '17608775223868f59d7481c80749fecf' 
        }
    });
    const data = await response.json();
    return data;
}

export default App;

