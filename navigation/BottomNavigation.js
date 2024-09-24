import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, View } from 'react-native';
import HomeScreen from '../screens/HomeScreen'; // Ensure these screens are correctly imported
import SettingsScreen from '../screens/SettingsScreen';

// Dummy screen for demonstration
const CommunityScreen = () => (
  <View>
    <Text>Community Screen</Text>
  </View>
);

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Community') {
            iconName = 'users';
          } else if (route.name === 'Settings') {
            iconName = 'cog';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#000', // Black background
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        headerShown: false, // Hide the header for all screens
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen 
        name="Community" 
        component={CommunityScreen}
        options={{
          tabBarBadge: () => (
            <View
              style={{
                position: 'absolute',
                top: -5,
                right: -15, // Slight adjustment to position the badge better
                backgroundColor: 'red',
                borderRadius: 6,
                width: 12,
                height: 12, // Adjust badge size
              }}
            />
          ),
        }}
      />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

