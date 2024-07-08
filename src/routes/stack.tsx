import React from 'react';

import {Text} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Animated from 'react-native-reanimated';

const Stack = createNativeStackNavigator();

const Screen1 = () => {
  return <Text>Screen 1</Text>;
};

const Screen2 = () => {
  return (
    <Animated.View>
      <Text>Screen 2</Text>
    </Animated.View>
  );
};

const Home = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screen1" component={Screen1} />
    </Stack.Navigator>
  );
};

const Search = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screen2" component={Screen2} />
    </Stack.Navigator>
  );
};

export {Home, Search};
