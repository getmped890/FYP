import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View, Text, Button} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';

// Creating navigation path for bottom navigator 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';


//import from the respective file path
import LoginScreen from '../Genericscreens/Login/Login';
import TeachHomePageScreen from './Homepage/TeachHomePage';
import TeachSettingsScreen from './Setting/TeachSetting';

//Importing Attendance file path
import AttendanceHomeScreen from './Attendance/AttendanceHomepage';
import MarkAttendanceScreen from './Attendance/MarkAttendance';
import ViewAttendanceScreen from './Attendance/ViewAttendance';
import UpdateAttendanceScreen from './Attendance/UpdateAttendance';
import GenerateAlistScreen from './Attendance/GenerateAlist';
import AttendanceRecordScreen from './Attendance/AttendanceRecord';

//Importing Timetable file path
import TeachTimeTableScreen from './TimeTable/TeachTimeTable';
import TeachScheduleScreen from './TimeTable/TeachSchedule';

//Importing Profile file path
import TeachProfileScreen from './Profile/TeachProfile';
import TeachUpdatePasswordScreen from './Profile/TeachUpdatePassword';
import TeachUpdateProfileScreen from './Profile/TeachUpdateProfile';


//Importing Alert Pages
import TeachAlertsScreen from './Alerts/TeachAlerts';
import TeachLocationScreen from './Alerts/TeachLocation';


//Creating the bottom navigation tab, and stack pages for navigator
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

//Bottom navigator icons and words
function TabNavigator(){

    return(
      <Tab.Navigator screenOptions={{headerShown:false}}>
          <Tab.Screen name="Attendance" component={StackNavigator} options={{
            tabBarIcon: () => (
              <Octicons name="checklist" size={24} color="black" />
            ),
          }}/>
          <Tab.Screen name="TimeTable" component={StackTeachTimeTablePageNavigator} options={{
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
          
          
          <Tab.Screen name="Settings" component={StackSettingNavigator} options={{
            tabBarIcon: () => (
              <Ionicons name="settings-outline" size={24} color="black" />
            ),
          }}/>       
           
      </Tab.Navigator>
    )
}

//Re-direct the stack navigator in attendance page to the spilt paths.
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

//Re-directing the Alert pages navigation
function StackLocationNavigator(){
  return(
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="TeacherNotification" component={TeachAlertsScreen} />
      <Stack.Screen name="TeachLocation" component={TeachLocationScreen} />


    </Stack.Navigator>
  )
}


//Re-directing the Setting pages navigation
function StackSettingNavigator(){
  return(
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="TeachSetting" component={TeachSettingsScreen} />
      <Stack.Screen name="TeachProfile" component={TeachProfileScreen} />
      <Stack.Screen name="TeachUpdatePassword" component={TeachUpdatePasswordScreen} />
  
      <Stack.Screen name="TeachUpdateProfile" component={TeachUpdateProfileScreen} />
      <Stack.Screen name="TeachHomePage" component={TeachHomePageScreen} />


    </Stack.Navigator>
  )
}

//Home Page navigation, goes to setting manageprofile.
function StackNavigatorHomePage(){
  return(
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="TeachHomePage" component={TeachHomePageScreen} />
      <Stack.Screen name="TeachProfile" component={TeachProfileScreen} />
      <Stack.Screen name="TeachUpdatePassword" component={TeachUpdatePasswordScreen} />
      <Stack.Screen name="TeachUpdateProfile" component={TeachUpdateProfileScreen} />
    </Stack.Navigator>
  )
}

function StackTeachTimeTablePageNavigator(){
  return(
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >

      <Stack.Screen name="TeachTTScreen" component={TeachTimeTableScreen} />
      <Stack.Screen name="TeachSchedule" component={TeachScheduleScreen} />

    </Stack.Navigator>
  )
}




export default function Teacherpage(){
  
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

// export default Teacherpage;

