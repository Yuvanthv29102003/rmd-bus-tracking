import { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigator from './AuthNavigator'; // Your auth screens (Login, Signup)
import BottomNavigation from './BottomNavigation';
import UserDetailsScreen from '../screens/UserDetailsScreen';
import AuthContext from '../context/AuthContext';
import { ActivityIndicator, View } from 'react-native';

const Stack = createStackNavigator();

const MainNavigator = () => {
  const { isAuthenticated, isLoading, userDetailsCompleted } = useContext(AuthContext);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        userDetailsCompleted ? (
          <Stack.Screen name="Main" component={BottomNavigation} />
        ) : (
          <Stack.Screen name="UserDetails" component={UserDetailsScreen} />
        )
      ) : (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default MainNavigator;
