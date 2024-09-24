import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './context/AuthContext'; // Adjust the path as needed
import MainNavigator from './navigation/MainNavigator'; // Your main navigator
import AuthNavigator from './navigation/AuthNavigator'; // Your auth screens
import LoadingScreen from './screens/LoadingScreen'; // Loading screen
import AuthContext from './context/AuthContext'; // Import the AuthContext

const App = () => {
  const { isAuthenticated, isLoading } = useContext(AuthContext);

  // Show a loading screen while determining auth state
  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      {/* Render the appropriate navigator based on authentication status */}
      {isAuthenticated ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

// Wrap App component with AuthProvider to provide auth context
export default () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);
