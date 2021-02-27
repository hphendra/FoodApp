import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, ViewProduct} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ViewProduct"
        component={ViewProduct}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
