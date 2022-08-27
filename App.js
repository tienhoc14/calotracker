import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Activity from './src/gathers/activity';
import Birthday from './src/gathers/Birthday';
import Gender from './src/gathers/gender';
import SetGoal from './src/gathers/setGoal';
import Login from './src/screens/login';
import Started from './src/screens/start';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer style={{ flex: 1 }} >
      <Stack.Navigator initialRouteName='Birthday' screenOptions={{ headerShown: false }} >
        <Stack.Screen name='Started' component={Started} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='SetGoal' component={SetGoal} />
        <Stack.Screen name='Activity' component={Activity} />
        <Stack.Screen name='Gender' component={Gender} />
        <Stack.Screen name='Birthday' component={Birthday} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


