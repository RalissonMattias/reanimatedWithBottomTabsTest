import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Home, Search} from './stack';

const BottomBar = createBottomTabNavigator();

const Bottom = () => {
  return (
    <BottomBar.Navigator>
      <BottomBar.Screen name="Home" component={Home} />
      <BottomBar.Screen name="Search" component={Search} />
    </BottomBar.Navigator>
  );
};

export default Bottom;
