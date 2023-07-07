import React, { useState, useLayoutEffect } from 'react';
import { View, TouchableOpacity, TextInput, StyleSheet, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const AttendanceHomepage = () => {

    //use for navigating/redirect to other page
    const navigation = useNavigation();

    const handleMarkAttendanceClick = () => {
        //navigate to setting page
        navigation.navigate('MarkAttendance');

    };


    

    return (
        
        <View style={styles.container}>
        
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={handleMarkAttendanceClick}>

                    <Text style={styles.buttonText}>Mark Attendance</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={() => {}}>
                    <Text style={styles.buttonText}>Update Attendance</Text>

                </TouchableOpacity>

            </View>

            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={() => {}}>
                    <Text style={styles.buttonText}>Generate Attendance List</Text>

                </TouchableOpacity>

            </View>

            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={() => {}}>
                    <Text style={styles.buttonText}>View Attendance</Text>

                </TouchableOpacity>

            </View>

            

        </View>
        
  
        


        
    );
};


const styles = StyleSheet.create({
   
    button:{
      alignItems:'center',
      backgroundColor: '#FFFFFF',
      padding: 20,
        
    },
    container: {

        justifyContent: 'center',
        paddingTop: 60,
    },



});

export default AttendanceHomepage;
