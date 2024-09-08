import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import PlaceholderScreen from '../screens/PlaceholderScreen';
import HomeScreen from '../screens/HomeScreen';
import images from '../assets/images';
import { colors } from '../utils/constants';

const homeIcon = images.home
const statsIcon = images.chart
const calendarIcon = images.discover
const profileIcon = images.profile

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconSource;

          if (route.name === 'Home') {
            iconSource = homeIcon;
          } else if (route.name === 'Stats') {
            iconSource = statsIcon;
          } else if (route.name === 'Discover') {
            iconSource = calendarIcon;
          } else if (route.name === 'Me') {
            iconSource = profileIcon;
          }

          return (
            <Image
              source={iconSource}
              style={{
                width:  25,
                height:  25,
                tintColor: focused ? colors.tabBarFocused : colors.black,
              }}
              resizeMode="contain"
            />
          );
        },
        tabBarActiveTintColor: colors.tabBarFocused,
        tabBarInactiveTintColor: colors.gray,
        headerShown: false,
        tabBarStyle: {
          height: 60,
        },

        tabBarLabelStyle: {
          marginBottom: 10,
          fontSize: 14
        },
      })}
      >
      <Tab.Screen name="Me" component={PlaceholderScreen} />
      <Tab.Screen name="Stats" component={PlaceholderScreen} />
      <Tab.Screen name="Discover" component={HomeScreen} />
      <Tab.Screen name="Home" component={PlaceholderScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
