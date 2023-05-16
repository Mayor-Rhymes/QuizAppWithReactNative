import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from 'expo-status-bar'

import Home from "./screens/Home";
import Quiz from "./screens/Quiz";
import Score from "./screens/Score";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz" component={Quiz} options={{ headerShown: false }}/>
        <Stack.Screen name="Score" component={Score} options={{ headerShown: false }}/>
      </Stack.Navigator>
      <StatusBar style="auto" hidden={true}/>
    </NavigationContainer>
  );
}
