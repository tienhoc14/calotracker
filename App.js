import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Activity from './src/gathers/activity';
import Birthday from './src/gathers/Birthday';
import BodyIndex from './src/gathers/bodyIndex';
import Gender from './src/gathers/gender';
import SetGoal from './src/gathers/setGoal';
import WeeklyGoal from './src/gathers/WeeklyGoal';
import HomeScreen from './src/screens/HomeScreen';
import Login from './src/screens/login';
import Register from './src/screens/register';
import Started from './src/screens/start';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer style={{ flex: 1 }} >
      <Stack.Navigator initialRouteName='Started' screenOptions={{ headerShown: false }} >
        <Stack.Screen name='Started' component={Started} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='SetGoal' component={SetGoal} />
        <Stack.Screen name='Activity' component={Activity} />
        <Stack.Screen name='Gender' component={Gender} />
        <Stack.Screen name='Birthday' component={Birthday} />
        <Stack.Screen name='BodyIndex' component={BodyIndex} />
        <Stack.Screen name='WeeklyGoal' component={WeeklyGoal} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='Home' component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


