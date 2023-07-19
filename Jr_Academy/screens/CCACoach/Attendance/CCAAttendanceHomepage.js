import React, { useState, useLayoutEffect } from 'react';
import { View, TouchableOpacity, TextInput, StyleSheet, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackgroundColor from '../../Genericscreens/BackgroundSetting/BackgroundColor';

const CCAAttendanceHomepage = () => {

    //use for navigating/redirect to other page
    const navigation = useNavigation();

    const handleMarkAttendanceClick = () => {
        navigation.navigate('CCAMarkAttendance');

    };

    const handleUpdateAttendanceClick = () => {
        navigation.navigate('CCAAttendanceRecord');

    };

    const handleGenerateAttendanceListClick = () => {
        navigation.navigate('CCAGenerateAlist');

    };

    const handleViewAttendanceClick = () => {
        navigation.navigate('CCAViewAttendance');

    };


    

    return (
        <BackgroundColor>
        <View style={styles.container}>
            <Text style={styles.fclass}>
                CCA Sport: Basket Ball
            </Text>
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={handleMarkAttendanceClick}>

                    <Text style={styles.buttonText}>Mark Attendance</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={handleUpdateAttendanceClick}>
                    <Text style={styles.buttonText}>Update Attendance</Text>

                </TouchableOpacity>

            </View>

            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={handleGenerateAttendanceListClick}>
                    <Text style={styles.buttonText}>Generate Attendance List</Text>

                </TouchableOpacity>

            </View>

            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={handleViewAttendanceClick}>
                    <Text style={styles.buttonText}>View Attendance</Text>

                </TouchableOpacity>

            </View>

            

        </View>
        
  
    </BackgroundColor>


        
    );
};


const styles = StyleSheet.create({

    fclass:{
        fontSize: 35,
        fontWeight: 'bold',
    },
   
    button:{
      alignItems:'center',
      backgroundColor: '#FFFFFF',
      padding: 20,
        
    },
    buttonText:{
        color: '#1DC1B1',
        fontSize:15,

    },

    container: {

        paddingTop: 70,
        paddingLeft:20,
        width:'95%',
    },



});

export default CCAAttendanceHomepage;
