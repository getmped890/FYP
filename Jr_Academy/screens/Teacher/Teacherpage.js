import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View, Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

//import from the respective file path
import HomePageScreen from './Homepage/HomePage';
import SettingsScreen from './Setting/Setting';

import TimeTableScreen from './TimeTable/TimeTable';


const Teacherpage= ({}) => {
  return (
    <SafeAreaView style={styles.root}>

      <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown:false}}>
          <Tab.Screen name="Attendance" component={AttendanceScreen} options={{
            tabBarIcon: () => (
              <Ionicons name="checkbox-outline" size={24} color="black" />
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
            
            <Tab.Screen name="Alerts" component={AlertScreen} options={{
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
    </NavigationContainer>   

    </SafeAreaView>
  );
}


function AttendanceScreen() {
  return (
    <View>

      
    </View>
  );
}

function ManageScreen() {
  return (
    <View>


    </View>
  );
}


function AlertScreen() {
  return (
    <View>

    </View>
  );
}



const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',

    justifyContent: 'center',
  },
});

export default Teacherpage;
