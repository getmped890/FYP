import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const ChildHomePage = () => {
  //use for navigating/redirect to other page
  const navigation = useNavigation();
  const handleUserIconClick = () => {
    //navigate to setting page
    navigation.navigate('Setting');
  };
  const EmergencyButton = () => {
    Alert.alert('Notification sent? Do we include a timer for 5 second to count?');
  };
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <View style={styles.topLeft}>
          <Text style={styles.welcomeText}>Child</Text>
        </View>
        <TouchableOpacity style={styles.topRight} onPress={handleUserIconClick}>
          <Ionicons name="person-outline" size={35} color="#FFFFFF" />
        </TouchableOpacity>
        <View style={styles.scrollContainer}>
          <Text style={styles.headerText}>Upcoming Classes Today:</Text>
          <ScrollView horizontal={true} contentContainerStyle={styles.scrollContent}>
            <View style={[styles.card, styles.cardElevated]}>
              <Text style={styles.classText}>Period 1</Text>
              <Text style={styles.classText}>Math</Text>
              <Text style={styles.classText}>8:00am to 8.30am</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.classText}>Period 2</Text>
              <Text style={styles.classText}>Math</Text>
              <Text style={styles.classText}>8:30am to 9.00am</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.classText}>Period 3</Text>
              <Text style={styles.classText}>English</Text>
              <Text style={styles.classText}>9:00am to 9.30am</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.classText}>Period 4</Text>
              <Text style={styles.classText}>English</Text>
              <Text style={styles.classText}>9:30am to 10.00am</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.classText}>Period 5</Text>
              <Text style={styles.classText}>Recess</Text>
              <Text style={styles.classText}>10:00am to 10.30am</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.classText}>Period 6</Text>
              <Text style={styles.classText}>Math</Text>
              <Text style={styles.classText}>10:30am to 11.00am</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.classText}>Period 7</Text>
              <Text style={styles.classText}>Math</Text>
              <Text style={styles.classText}>11:00am to 11.30am</Text>
            </View>             
            <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.classText}>Period 8</Text>
              <Text style={styles.classText}>Mother Tongue</Text>
              <Text style={styles.classText}>11:00am to 11.30am</Text>
              <Text style={styles.classText}>Mother Tongue Classroom 1</Text>
              </View>        
              <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.classText}>Period 9</Text>
              <Text style={styles.classText}>Mother Tongue</Text>
              <Text style={styles.classText}>11:30am to 12.00am</Text>
              <Text style={styles.classText}>Mother Tongue Classroom 1</Text>           
            </View>
            <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.classText}>Period 10</Text>
              <Text style={styles.classText}>Art</Text>
              <Text style={styles.classText}>12:00pm to 12.30pm</Text>           
            </View>
            <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.classText}>Period 11</Text>
              <Text style={styles.classText}>Art</Text>
              <Text style={styles.classText}>12:30pm to 1.00pm</Text>           
            </View>                                            
          </ScrollView>
        </View>
        <View style={styles.absentContainer}>
          <Text style={styles.headerText}>Attendance Record:</Text>
          <ScrollView horizontal={true} contentContainerStyle={styles.scrollContent}>
            <View style={[styles.card, styles.cardElevated]}>
              <Text style={styles.classText}>Date: 20th Jun 2023</Text>
              <Text style={styles.classText}>Absent</Text>             
            </View>


          </ScrollView>
        </View>
        <TouchableOpacity style={styles.endClassButton} onPress={EmergencyButton}>
          <Ionicons name="alert-circle" size={80} color="red" />
        </TouchableOpacity>
        <Text style={styles.EmergencyText}>Emergency</Text>
      </View>
    </View>
  );
};
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    backgroundColor: '#B3EAE5',
  },
  topLeft: {
    position: 'absolute',
    top: height * 0.08,
    left: width * 0.05,
  },
  topRight: {
    position: 'absolute',
    top: height * 0.07,
    right: width * 0.05,
    zIndex: 1,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.65,
    height: height * 0.16,
    width: width * 0.60,
    height: height * 0.15,
    borderRadius: 4,
    margin: width * 0.05,
    backgroundColor: '#FFFFFF',
  },
  cardElevated: {
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  scrollContainer: {
    paddingTop: height * 0.2,
  },
  absentContainer: {
    paddingTop: height * 0.03,
  },
  welcomeText: {
    fontSize: height * 0.03,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#FFFFFF',
  },
  headerText: {
    fontSize: height * 0.03,
    fontWeight: 'bold',
    marginBottom: height * 0.01,
    paddingHorizontal: width * 0.05,
    color: '#FFFFFF',
  },
  classText: {
    fontSize: height * 0.02,
    color: '#1DC1B1',
  },
  scrollContent: {
    alignItems: 'center',
  },
  endClassButton: {
    position: 'absolute',


    bottom: height * 0.05,
    right: width * 0.03,
  },
  EmergencyText: {
    position: 'absolute',
    bottom: height * 0.01,
    right: width * 0.03,
    fontWeight: 'bold',
    fontSize: height * 0.024,
    color: 'black',
  },
});
export default ChildHomePage;