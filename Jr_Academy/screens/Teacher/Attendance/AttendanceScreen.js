import React , {useState, useLayoutEffect} from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';




const AttendanceScreen = () => {

    const navigation = useNavigation();

    return(

        <View style={styles.container}>
        
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={() => {
            // Handle button press
            }}>
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

export default AttendanceScreen;