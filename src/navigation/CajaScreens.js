import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/stack';
import Login from '../components/Login';
import Details from '../components/Details';

const Stack = createNativeStackNavigator();

function CajaScreen() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{ title: 'Details' }}
        />
      </Stack.Navigator>
    );
  }
  
  export default CajaScreen;