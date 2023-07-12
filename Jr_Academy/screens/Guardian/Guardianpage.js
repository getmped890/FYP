import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View, Text, Button} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';


//import from the respective file path
import HomePageScreen from './Homepage/HomePage';
import ProfileScreen from './Profile/Profile';
import UpdatePasswordScreen from './Profile/UpdatePassword';
import UpdateProfileScreen from './Profile/UpdateProfile';
import LoginScreen from '../Login/Login';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();


function TabNavigator(){
    return(
      <Tab.Navigator screenOptions={{headerShown:false}}>
          
          <Tab.Screen name="TimeTable" component={HomePageScreen} options={{
            tabBarIcon: () => (
              <Ionicons name="calendar-outline" size={24} color="black" />
            ),
          }}/>

        <Tab.Screen name="Dismissal" component={HomePageScreen} options={{
                    tabBarIcon: () => (
                    <Ionicons name="calendar-outline" size={24} color="black" />
                    ),
          }}/>
          <Tab.Screen name="Home" component={StackNavigatorHomePage} options={{
                        tabBarIcon: () => (
                          <Ionicons name="home" size={24}/>
                        ),
          }}/>          
            
            <Tab.Screen name="Notification" component={HomePageScreen} options={{
            tabBarIcon: () => (
              <FontAwesome name="bell-o" size={24} color="black" />
            ),
          }}/>
          
          
          <Tab.Screen name="Settings" component={HomePageScreen} options={{
            tabBarIcon: () => (
              <Ionicons name="settings-outline" size={24} color="black" />
            ),
          }}/>       
           
      </Tab.Navigator>
    )
}



function StackNavigatorHomePage(){
  return(
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomePage" component={HomePageScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="UpdatePassword" component={UpdatePasswordScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="UpdateProfile" component={UpdateProfileScreen} />
    </Stack.Navigator>
  )
}


export default function Guardianpage(){
  return(
    <NavigationContainer>
        <TabNavigator />
    </NavigationContainer>
  )
}



const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',

    justifyContent: 'center',
  },
});


