import React, { useState, useLayoutEffect } from 'react';
import { View, TouchableOpacity, TextInput, StyleSheet, Text, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Setting = () => {
    return (
        <View>

            <TouchableOpacity style={styles.endClassButton}>
        <Ionicons name="log-out-outline" size={35} />
      </TouchableOpacity>
      <Text style={styles.LogoutText}>Logout</Text>
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
        top:30,
        left: 280,
        fontSize:20,
      fontWeight: 'bold',
    },
  
  
  
  });
  
export default Setting;
