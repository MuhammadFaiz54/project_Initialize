import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login'
import Signup from '../screens/Signup'




const Stack = createNativeStackNavigator()

export default function AuthNavigation() {
    return (
        <Stack.Navigator 
        
        screenOptions={{
     
          headerShown: false,
        
      }}
        >
           <Stack.Screen
          name="Login"
          // options={{ headerShown: false }}
          component={Login}
        />
          <Stack.Screen
          name="Signup"
          // options={{ headerShown: false }}
          component={Signup}
        />
         
     
      
        

            
        </Stack.Navigator>
    )
}
