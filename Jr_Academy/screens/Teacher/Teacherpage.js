import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View, Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Teacherpage= ({}) => {
  return (
    <SafeAreaView style={styles.root}>

      <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Attendance" component={AttendanceScreen} />
        <Tab.Screen name="Manage Profiles" component={ManageScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Alerts" component={AlertScreen} />
        <Tab.Screen name="Setting" component={SettingsScreen} />        
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
    <ManageProfiles />

    </View>
  );
}

function HomeScreen() {
  return (
    <View>
       <Text>Hi Teacher so and so</Text>
    </View>
  );
}

function AlertScreen() {
  return (
    <View>

    </View>
  );
}

function SettingsScreen() {
  return (
    <View>
      <Text>Hi School Admin</Text>
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