import { StyleSheet, Text, View, Button } from "react-native";

//navigation bar
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tabs } from 'expo-router';

//navigation bar icon
import { FontAwesome } from '@expo/vector-icons';

//profile icon
import { Ionicons } from '@expo/vector-icons';

//logout icon
import { MaterialIcons } from '@expo/vector-icons';
import { Stack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import LogoutIcon from '@mui/icons-material/Logout';

//calendar for child timetable page
import React, {useState} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';



function ChildTimetable() {
  return (
    <View>
      <Ionicons name="person-circle" size={100} color="black" style={{ position: 'absolute', right:0 }}/>
      <Text style={{ position: 'absolute', left:0 }}>Calendar</Text>
      <Calendar style={{ position: 'absolute', left:0,justifyContent:'center'}}/>
    </View>
  );
}

function Dismissal() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    </View>
  );
}

function Home() {
  return (
    <View>
      <Text style={{ fontSize: 20 }}>Hi Guardian Name</Text>
      <Ionicons name="person-circle" size={100} color="black" style={{ position: 'absolute', right:0 }}/>
      <Text>{"\n\n\n"}Dismissal Time:</Text>

    </View>
  );
}

function Notification() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    </View>
  );
}

function Settings() {
  return (
    //<IconButton icon={props => <MaterialIcons name="logout" size={50} color="black" style={{ position: 'absolute', right:0 }}{...props } />} />
<IconButton>
 <LogoutIcon  />
 </IconButton>


  );

}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (

    
    <Tab.Navigator screenOptions={{ tabBarShowLabel: false}}>
      <Tab.Screen name="Child Timetable"
      options={{tabBarIcon: ({ color }) => (
        <FontAwesome name="calendar-o" size={24} color={color}/>
        
      ), 
      }}
        component={ChildTimetable} 
        />

        <Tab.Screen name="Dismissal"
      options={{tabBarIcon: ({ color }) => (
        <FontAwesome name="clock-o" size={24} color={color} />
      ),
      }}
        component={Dismissal} />

        <Tab.Screen name="Home"
              options={{tabBarIcon: ({ color }) => (
                <FontAwesome name="home" size={24} color={color} />
              ),
              }}
                component={Home} />

        <Tab.Screen name="Notification"
              options={{tabBarIcon: ({ color }) => (
                <FontAwesome name="bell" size={24} color={color} />
              ),
              }}
                component={Notification} />

        <Tab.Screen name="Settings"
              options={{tabBarIcon: ({ color }) => (
                <FontAwesome name="gear" size={24} color={color} />
              ),
              }}
                component={Settings} />
            </Tab.Navigator>
          );
        }





export default function Page() {
  return (
    
        <MyTabs />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
