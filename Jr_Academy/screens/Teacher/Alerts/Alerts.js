import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import SettingsScreen from '../Setting/Setting';
import BackgroundColor from '../../BackgroundColor';



const Alerts = () => {
  //use for navigating/redirect to other page
  const navigation = useNavigation();

  const checkGPS = () => {
    //navigate to GPS Page
    navigation.navigate('Location');
  };

  return (
    <BackgroundColor>

    <View style={styles.container}>
      <View style={styles.middle}>
        <Text style={styles.welcometext}>Emergency Alerts:</Text>
      </View>
      
      <View style={styles.scrollContainer}>
        <Text style={styles.headertext}>Latest Notification</Text>
        <TouchableOpacity onPress={checkGPS}>
        <ScrollView horizontal={true} contentContainerStyle={styles.scrollContent}>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.classText}>Child Name:</Text>
            <Text style={styles.classText}>Date:</Text>
            <Text style={styles.classText}>Time:</Text>
            <Text style={styles.classText}>Click to view location</Text>
          </View>
        </ScrollView>
        </TouchableOpacity>
      </View>

      <View style={styles.absentContainer}>
        <Text style={styles.headertext}>Previous Notification</Text>
        <TouchableOpacity>
        <ScrollView horizontal={true} contentContainerStyle={styles.scrollContent}>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.classText}>Child Name:</Text>
            <Text style={styles.classText}>Date:</Text>            
            <Text style={styles.classText}>Time:</Text>
            <Text style={styles.classText}>Click to view location</Text>

          </View>
 
        </ScrollView>
        </TouchableOpacity>
      </View>


    </View>
    </BackgroundColor>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  middle: {
    position: 'relative',
    top: 50,
    left: 5,
  },


  card:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
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
    paddingTop: 110,
    paddingBottom:50,
  },
 
  welcometext: {
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle:'italic',
    color: 'white',

  },

  headertext: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingLeft: 19,
    color: 'white',
  },
  classText: {
    fontSize: 16,
    color: '#1DC1B1',

  },
  scrollContent: {
    alignItems: 'center',
  },



});

export default Alerts;