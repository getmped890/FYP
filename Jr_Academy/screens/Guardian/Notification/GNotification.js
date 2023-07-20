import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const HomePage = () => {
  //use for navigating/redirect to other page
  const navigation = useNavigation();
  const handleUserIconClick = () => {
    //navigate to setting page
    navigation.navigate('Profile');
  };
 
 

  const checkGPS = () => {
    //navigate to GPS Page
    navigation.navigate('GLocation');
  };


  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <TouchableOpacity style={styles.topRight} onPress={handleUserIconClick}>
          <Ionicons name="person-outline" size={35} color="#FFFFFF" />
        </TouchableOpacity>
        <View style={styles.scrollContainer}>
          <Text style={styles.headerText}>Notification Center</Text>
          <ScrollView horizontal={false} contentContainerStyle={styles.scrollContent}>
            <View style={[styles.card, styles.cardElevated]}>
              <Text style={styles.classText}>Your child attendance for today:</Text>
              <Text style={styles.classText}></Text>
              <Text style={styles.classText}>Child Name: James</Text>
              <Text style={styles.classText}>Attendance: Present</Text>
            </View>
          </ScrollView>
        </View>


        <View style={styles.locationContainer}>
        <TouchableOpacity onPress={checkGPS}>
        <ScrollView horizontal={false} contentContainerStyle={styles.scrollContent}>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.classText}>Your Child Location:</Text>

            <Text style={styles.classText}>Click to view location</Text>

          </View>
 
        </ScrollView>
        </TouchableOpacity>
      </View>


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
    //width: width * 0.60,
    //height: height * 0.15,
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
  locationContainer: {
    paddingTop: height * 0.05,
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
    marginBottom: height * 0.04,
    paddingHorizontal: width * 0.05,
    color: '#FFFFFF',
  },
  classText: {
    fontSize: height * 0.018,
    color: '#1DC1B1',
  },
  scrollContent: {
    alignItems: 'center',
  },
 
});
export default HomePage;