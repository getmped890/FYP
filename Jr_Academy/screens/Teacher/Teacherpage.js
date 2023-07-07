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
import TimeTableScreen from './TimeTable/TimeTable';
import Alerts from './Alerts/Alert';
import Alertlocation from './Alerts/Alertlocation';


const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator(){
    return(
      <Tab.Navigator screenOptions={{headerShown:false}}>
          <Tab.Screen name="AttendanceHomepage" component={StackNavigator} options={{
            tabBarIcon: () => (
              <Octicons name="checklist" size={24} color="black" />
            ),
          }}/>
          <Tab.Screen name="TimeTable" component={TimeTableScreen} options={{
            tabBarIcon: () => (
              <Ionicons name="calendar-outline" size={24} color="black" />
            ),
          }}/>
          <Tab.Screen name="Home" component={HomePageScreen} options={{
                        tabBarIcon: () => (
                          <Ionicons name="home" size={24}/>
                        ),
          }}/>          
            
            <Tab.Screen name="Alerts" component={Alerts} options={{
            tabBarIcon: () => (
              <FontAwesome name="bell-o" size={24} color="black" />
            ),
          }}/>
          
          
          <Tab.Screen name="Setting" component={SettingsScreen} options={{
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
      <Stack.Screen name="AttendanceHomepage" component={AttendanceHomeScreen} />
      <Stack.Screen name="MarkAttendance" component={MarkAttendanceScreen} />
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

// const Teacherpage= ({}) => {
//   return (
//     <SafeAreaView style={styles.root}>

//       <NavigationContainer>
//         <Tab.Navigator screenOptions={{headerShown:false}}>
//           <Tab.Screen name="AttendanceHomepage" component={AttendanceHomeScreen} options={{
//             tabBarIcon: () => (
//               <Octicons name="checklist" size={24} color="black" />
//             ),
//           }}/>
//           <Tab.Screen name="TimeTable" component={TimeTableScreen} options={{
//             tabBarIcon: () => (
//               <Ionicons name="calendar-outline" size={24} color="black" />
//             ),
//           }}/>
//           <Tab.Screen name="Home" component={HomePageScreen} options={{
//                         tabBarIcon: () => (
//                           <Ionicons name="home" size={24}/>
//                         ),
//           }}/>          
            
//             <Tab.Screen name="Alerts" component={Alerts} options={{
//             tabBarIcon: () => (
//               <FontAwesome name="bell-o" size={24} color="black" />
//             ),
//           }}/>
          
          
//           <Tab.Screen name="Setting" component={SettingsScreen} options={{
//             tabBarIcon: () => (
//               <Ionicons name="settings-outline" size={24} color="black" />
//             ),
//           }}/>       
           
//         </Tab.Navigator>
//     </NavigationContainer>   

//     </SafeAreaView>
//   );
// }







// const Tab = createBottomTabNavigator();

// //create natvie stack navigator for update password page so can navigate to updatepassword page when the 
// //updatepasswd button is click on setting page, 
// //as do not want update password to show as bottm tab
// const Stack = createNativeStackNavigator();

// export function SettingStack() {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}
//     >
//       <Stack.Screen name="AttendanceHomepage" component={AttendanceHomeScreen} />
//       <Stack.Screen name="MarkAttendance" component={MarkAttendanceScreen} />
//     </Stack.Navigator>
//   );
// }

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',

    justifyContent: 'center',
  },
});

// export default Teacherpage;

