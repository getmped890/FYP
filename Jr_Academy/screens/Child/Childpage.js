
import {StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';


import ChildProfileScreen from './Setting/ChildProfile';
import ChildUpdatePasswordScreen from './Setting/ChildUpdatePW';
import ChildHomePage from './Homepage/ChildHomepage';
import ChildDismissalPage from './Dismissal/ChildDismissalPage';
import ChildTimeTableScreen from './TimeTable/ChildTimeTable';
import LoginScreen from '../Genericscreens/Login/Login';
import ScheduleScreen from './TimeTable/ChildSchedule';


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
          <Tab.Screen name="TimeTable" component={StackChildTimeTablePageNavigator} options={{
            tabBarIcon: () => (
              <Ionicons name="calendar-outline" size={24} color="black" />
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

      <Stack.Screen name="ChildProfile" component={ChildProfileScreen} />
      <Stack.Screen name="ChildUpdatePW" component={ChildUpdatePasswordScreen} />

    </Stack.Navigator>
  )
}

function StackChildTimeTablePageNavigator(){
  return(
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >

      <Stack.Screen name="TTScreen" component={ChildTimeTableScreen} />
      <Stack.Screen name="ChildSchedule" component={ScheduleScreen} />

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

      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={tabBarStyle= {  headerShown: false}}/>

        <Stack.Screen name="Tab" component={TabNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}