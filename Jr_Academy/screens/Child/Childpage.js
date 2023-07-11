import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View, Text, Button} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import ChildProfile from './Setting/ChildProfile';
import ChildUpdatePassword from './Setting/ChildUpdatePW';
import ChildHomePage from './Homepage/ChildHomepage';
import ChildDismissalPage from './Dismissal/ChildDismissalPage';


const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();


function TabNavigator(){
    return(
      <Tab.Navigator screenOptions={{headerShown:false}}>
          <Tab.Screen name="Dismissal Time" component={ChildDismissalPage} options={{
            tabBarIcon: () => (
              <Octicons name="checklist" size={24} color="black" />
            ),
          }}/>
          <Tab.Screen name="Home" component={ChildHomePage} options={{
            tabBarIcon: () => (
              <Ionicons name="home" size={24} />
            ),
          }}/>
          <Tab.Screen name="Setting" component={StackChildNavigator} options={{
                        tabBarIcon: () => (
                          <Ionicons name="settings-outline" size={24} color="black"/>
                        ),
          }}/>          
            
          
      </Tab.Navigator>
    )
};

function StackChildNavigator(){
  return(
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >

      <Stack.Screen name="ChildProfile" component={ChildProfile} />
      <Stack.Screen name="ChildUpdatePW" component={ChildUpdatePassword} />


    </Stack.Navigator>
  )
}


const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',

    justifyContent: 'center',
  },
});



export default function Childpage(){
  return(
    <NavigationContainer>
        <TabNavigator />
    </NavigationContainer>
  )
};

