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
import SARegisterProfile from './RegisterUser/SARegisterUser';
import SAManageProfile from './ManageProfile/SAManageProfile';
import SAManageClass from './ManageClass/SAManageClass';
import SAHomePage from './HomePage/SAHomePage';
import SAProfile from './SAProfile/SAProfile';
import SAUpdatePassword from './SAProfile/SAUpdatePW';
import SAUpdateProfile from './SAProfile/SAUpdateProfile';
import SASetting from './Setting/SASetting';
import LoginScreen from '../Login/Login';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();


function TabNavigator(){
    return(
      <Tab.Navigator screenOptions={{headerShown:false}}>
          
          <Tab.Screen name="Register" component={SARegisterProfile} options={{
            tabBarIcon: () => (
              <Ionicons name="person-add-outline" size={24} color="black" />
            ),
          }}/>

        <Tab.Screen name="Manage Profiles" component={SAManageProfile} options={{
                    tabBarIcon: () => (
                    <Ionicons name="people-outline" size={24} color="black" />
                    ),
          }}/>
          <Tab.Screen name="Home" component={StackNavigatorHomePage} options={{
                        tabBarIcon: () => (
                          <Ionicons name="home" size={24}/>
                        ),
          }}/>          
            
            <Tab.Screen name="Manage Class" component={SAManageClass} options={{
            tabBarIcon: () => (
              <Ionicons name="newspaper-outline" size={24} color="black" />
            ),
          }}/>
          
          
          <Tab.Screen name="Settings" component={StackNavigatorSettingPage} options={{
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
      <Stack.Screen name="HomePage" component={SAHomePage} />
      <Stack.Screen name="Profile" component={SAProfile} />
      <Stack.Screen name="UpdatePassword" component={SAUpdatePassword} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="UpdateProfile" component={SAUpdateProfile} />

    </Stack.Navigator>
  )
}


function StackNavigatorSettingPage(){
    return(
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Setting" component={SASetting} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    )
  }

export default function SchoolAdminpage(){
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


