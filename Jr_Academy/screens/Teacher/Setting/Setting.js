import React, { useState, useLayoutEffect } from 'react';
import { View, TouchableOpacity, Switch, StyleSheet, Text, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Setting = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View>

            <TouchableOpacity style={styles.endClassButton}>
        <Ionicons name="log-out-outline" size={35} />
      </TouchableOpacity>
      <Text style={styles.LogoutText}>Logout</Text>
      <Text style={styles.headertext}>Allow Notification for</Text>  
      <Text style={styles.notificationtext}>Emergency</Text>  

      <Switch 
      style={styles.notificationswitch}
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#81b0ff' : '#81b0ff'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
        </View>
    );
};


const styles = StyleSheet.create({


    endClassButton: {

        position: 'absolute',
        top: 60,
        right: 30,
        zIndex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    LogoutText:{
        position: 'relative',
        top:30,
        left: 280,
        fontSize:20,
      fontWeight: 'bold',
    },
  
    headertext: {
        position: 'relative',
        fontSize: 20,
        top: 150,
        fontWeight: 'bold',
        marginBottom: 10,
        paddingHorizontal: 8
      },

      notificationswitch: {
 
        flex: 1, 
        flexDirection: 'column', 
        justifyContent: 'center',
        paddingTop: 370,
        right:20,
      },

      notificationtext: {
        top: 190,
        left:30,

      },
  
  });
  
export default Setting;
