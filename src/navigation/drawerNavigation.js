import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack'

import MyTabs from './myTabs';



const Drawer = createDrawerNavigator();


const DrawerNavigation = () => {
  return (

    <Drawer.Navigator
    screenOptions={{ headerShown: false }}
    //  drawerContent={(props) => <DrawerContent {...props} />} screenOptions={{ headerShown: false }}
      >


      <Drawer.Screen name="MyTabs" component={MyTabs} />
      
 

        {/* <Drawer.Screen name="Package" component={Package} /> */}



    </Drawer.Navigator>
  )
}
 
export default DrawerNavigation
