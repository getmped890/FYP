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
import SettingsScreen from './Setting/Setting';
import AttendanceHomeScreen from './Attendance/AttendanceHomepage';
import MarkAttendanceScreen from './Attendance/MarkAttendance';
import ViewAttendanceScreen from './Attendance/ViewAttendance';
import UpdateAttendanceScreen from './Attendance/UpdateAttendance';
import GenerateAlistScreen from './Attendance/GenerateAlist';
import TimeTableScreen from './TimeTable/TimeTable';
import ProfileScreen from './Profile/Profile';
import UpdatePasswordScreen from './Profile/UpdatePassword';
import UpdateProfileScreen from './Profile/UpdateProfile';
import LoginScreen from '../Login/Login';
import Alerts from './Alerts/Alerts';
import Location from './Alerts/Location';
import AttendanceRecordScreen from './Attendance/AttendanceRecord';



const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();


function TabNavigator(){
    return(
      <Tab.Navigator screenOptions={{headerShown:false}}>
          <Tab.Screen name="Attendance" component={StackNavigator} options={{
            tabBarIcon: () => (
              <Octicons name="checklist" size={24} color="black" />
            ),
          }}/>
          <Tab.Screen name="TimeTable" component={TimeTableScreen} options={{
            tabBarIcon: () => (
              <Ionicons name="calendar-outline" size={24} color="black" />
            ),
          }}/>
          <Tab.Screen name="Home" component={StackNavigatorHomePage} options={{
                        tabBarIcon: () => (
                          <Ionicons name="home" size={24}/>
                        ),
          }}/>          
            
            <Tab.Screen name="Alerts" component={StackLocationNavigator} options={{
            tabBarIcon: () => (
              <FontAwesome name="bell-o" size={24} color="black" />
            ),
          }}/>
          
          
          <Tab.Screen name="Setting" component={StackSettingNavigator} options={{
            tabBarIcon: () => (
              <Ionicons name="settings-outline" size={24} color="black" />
            ),
          }}/>       
           
      </Tab.Navigator>
    )
}

function StackNavigator(){
  return(
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="AttendHP" component={AttendanceHomeScreen} />
      <Stack.Screen name="MarkAttendance" component={MarkAttendanceScreen} />
      <Stack.Screen name="UpdateAttendance" component={UpdateAttendanceScreen} />
      <Stack.Screen name="ViewAttendance" component={ViewAttendanceScreen} />
      <Stack.Screen name="GenerateAlist" component={GenerateAlistScreen} />
      <Stack.Screen name="AttendanceRecord" component={AttendanceRecordScreen} />

      

    </Stack.Navigator>
  )
}

function StackLocationNavigator(){
  return(
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="TeacherNotification" component={Alerts} />
      <Stack.Screen name="Location" component={Location} />


    </Stack.Navigator>
  )
}



function StackSettingNavigator(){
  return(
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Setting" component={SettingsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="UpdatePassword" component={UpdatePasswordScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="UpdateProfile" component={UpdateProfileScreen} />
      <Stack.Screen name="HomePage" component={HomePageScreen} />


    </Stack.Navigator>
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


export default function Teacherpage(){
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

// export default Teacherpage;

