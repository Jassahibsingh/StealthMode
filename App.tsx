// App.js

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Shop from './screens/Shop';
import MIicons from 'react-native-vector-icons/MaterialCommunityIcons';
import Alerts from './screens/Alerts';
import Profile from './screens/Profile';

const home = 'Home';
const shop = 'Shop';
const alerts = 'Alerts';
const profile = 'Profile';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={home}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let rn = route.name;

            if (rn === home) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === shop) {
              iconName = focused ? 'shopping' : 'shopping-outline';
            } else if (rn === alerts) {
              iconName = focused ? 'bell' : 'bell-outline';
            } else if (rn === profile) {
              iconName = focused ? 'account' : 'account-outline';
            }

            // You can return any component that you like here!
            return <MIicons name={iconName} size={size} color={color} />;
          },
          headerShown: false,
          tabBarActiveTintColor: '#565656',
          tabBarInactiveTintColor: 'grey',
          tabBarLabelStyle: {
            paddingBottom: 10,
            fontSize: 10,
          },
          tabBarStyle: [
            {
              display: 'flex',
            },
            null,
          ],
        })}>
        <Tab.Screen name={home} component={Home} />
        <Tab.Screen name={shop} component={Shop} />
        <Tab.Screen name={alerts} component={Alerts} />
        <Tab.Screen name={profile} component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
