
import { StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';



import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';


//import from the respective file path
import HomePageScreen from './Homepage/GHomePage';
import ProfileScreen from './Profile/GProfile';
import UpdatePasswordScreen from './Profile/GUpdatePassword';
import UpdateProfileScreen from './Profile/GUpdateProfile';
import LoginScreen from '../Genericscreens/Login/Login';
import DismissalScreen from './Dismissal/GDismissalPage';
import SettingScreen from './Setting/GSetting';
import TimeTable from './Timetable/GTimeTable';
import Notification from './Notification/GNotification';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();


function TabNavigator(){
    return(
      <Tab.Navigator screenOptions={{headerShown:false}}>
          
          <Tab.Screen name="TimeTable" component={TimeTable} options={{
            tabBarIcon: () => (
              <Ionicons name="calendar-outline" size={24} color="black" />
            ),
          }}/>

        <Tab.Screen name="Dismissal" component={DismissalScreen} options={{
                    tabBarIcon: () => (
                    <Ionicons name="ios-time" size={24} color="black" />
                    ),
          }}/>
          <Tab.Screen name="Home" component={StackNavigatorHomePage} options={{
                        tabBarIcon: () => (
                          <Ionicons name="home" size={24}/>
                        ),
          }}/>          
            
            <Tab.Screen name="Notification" component={Notification} options={{
            tabBarIcon: () => (
              <FontAwesome name="bell-o" size={24} color="black" />
            ),
          }}/>
          
          
          <Tab.Screen name="Settings" component={SettingScreen} options={{
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
      <Stack.Screen name="UpdateProfile" component={UpdateProfileScreen} />
      <Stack.Screen name="Timetable" component={TimeTable} />
      <Stack.Screen name="Notification" component={Notification} />
    </Stack.Navigator>
  )
}



  export default function Guardianpage(){
  
    return(
      <NavigationContainer>
  
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} options={tabBarStyle= {  headerShown: false}}/>
  
          <Stack.Screen name="Tab" component={TabNavigator} options={{ headerShown: false }} />
        </Stack.Navigator>
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


