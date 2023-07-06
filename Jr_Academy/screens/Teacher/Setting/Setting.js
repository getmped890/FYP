import React, { useState, useLayoutEffect } from 'react';
import { View, TouchableOpacity, TextInput, StyleSheet, Text, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Setting = () => {
    return (
        <View>

            <TouchableOpacity style={styles.endClassButton}>
        <Ionicons name="log-out-outline" size={30} />
      </TouchableOpacity>
      <Text style={styles.endClassText}>Logout</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative',
    },
    topLeft: {
      position: 'relative',
      top: 50,
      left: 5,
    },
    topRight: {
      position: 'absolute',
      top: 40,
      right: 10,
      zIndex: 1,
    },
  
    card:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: 250,
      height: 120,
      borderRadius: 4,
      margin: 25
    },
    cardElevated:{
      backgroundColor: 'white',
      elevation: 4,
      shadowOffset: {
          width: 1,
          height: 1
        },
    },
    scrollContainer: {
      paddingTop: 150,
    },
  
    absentContainer: {
      paddingTop: 50,
    },
  
   
    welcometext: {
      fontSize: 20,
      fontWeight: 'bold',
      fontStyle:'italic',
      fontFamily: 'Arial', 
    },
  
    headertext: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      paddingHorizontal: 8
    },
    classText: {
      fontSize: 16,
    },
    scrollContent: {
      alignItems: 'center',
    },
    classItem: {
      width: 250,
      height: 120,
      marginRight: 10,
      backgroundColor: 'lightgray',
      justifyContent: 'center',
      alignItems: 'center',
    },
    endClassButton: {

        position: 'absolute',
        top: 40,
        right: 10,
        zIndex: 1,
 
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    endClassText:{
        top: 40,

      right:25,
      fontWeight: 'bold',
    },
  
  
  
  });
  
export default Setting;
