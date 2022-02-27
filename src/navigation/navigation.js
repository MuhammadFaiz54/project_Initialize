import React,{useState} from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AuthNavigation from './authNavigation'
import DrawerNavigation from './drawerNavigation'


const Stack = createStackNavigator()

// using Props

const MainNavigation = () => {
  const [first, setfirst] = useState(false) 
  return (
    <NavigationContainer>
     {first ?<AuthNavigation/> :<DrawerNavigation/>}
    </NavigationContainer>
  )
}

export default MainNavigation
