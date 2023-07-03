import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HomePage = () => {
  //use for navigating/redirect to other page
  const navigation = useNavigation();

  const handleUserIconClick = () => {
    //navigate to setting page
    navigation.navigate('setting');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topLeft}>
        <Text style={styles.welcometext}>Hi Jason</Text>
      </View>

      <TouchableOpacity style={styles.topRight} onPress={handleUserIconClick}>
        <Ionicons name="person-outline" size={24} color="black" />
      </TouchableOpacity>

      <View style={styles.scrollContainer}>
        <Text style={styles.headertext}>Upcoming Classes:</Text>
        <ScrollView horizontal={true} contentContainerStyle={styles.scrollContent}>
          <View style={styles.classItem}>
            <Text style={styles.classText}>CSIT203</Text>
            <Text style={styles.classText}>26th Jun 2023</Text>
            <Text style={styles.classText}>3:30pm - 6:30pm</Text>
          </View>
          <View style={styles.classItem}>
            <Text style={styles.classText}>CSIT503</Text>
            <Text style={styles.classText}>20th Jun 2023</Text>
            <Text style={styles.classText}>2:30pm - 4:30pm</Text>
          </View>
          <View style={styles.classItem}>
            <Text style={styles.classText}>CSIT123</Text>
            <Text style={styles.classText}>29th Jun 2023</Text>
            <Text style={styles.classText}>3:30pm - 6:30pm</Text>
          </View>
        </ScrollView>
      </View>

      <View style={styles.absentContainer}>
        <Text style={styles.headertext}>Absent Classes:</Text>
        <ScrollView horizontal={true} contentContainerStyle={styles.scrollContent}>
          <View style={styles.classItem}>
            <Text style={styles.classText}>CSIT203</Text>
            <Text style={styles.classText}>26th Jun 2023</Text>
            <Text style={styles.classText}>3:30pm - 6:30pm</Text>
          </View>
          <View style={styles.classItem}>
            <Text style={styles.classText}>CSIT503</Text>
            <Text style={styles.classText}>20th Jun 2023</Text>
            <Text style={styles.classText}>2:30pm - 4:30pm</Text>
          </View>
          <View style={styles.classItem}>
            <Text style={styles.classText}>CSIT123</Text>
            <Text style={styles.classText}>29th Jun 2023</Text>
            <Text style={styles.classText}>3:30pm - 6:30pm</Text>
          </View>
        </ScrollView>
      </View>

      <TouchableOpacity style={styles.emergencyButton}>
        <Ionicons name="alert" size={24} />
      </TouchableOpacity>
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
    top: 70,
    left: 5,
  },
  topRight: {
    position: 'absolute',
    top: 60,
    right: 10,
    zIndex: 1,
  },

  scrollContainer: {
    paddingTop: 190,
  },

  absentContainer: {
    paddingTop: 100,
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Arial', 
  },

  welcometext: {
    fontSize: 20,
    fontWeight: 'light',
    fontStyle:'italic',
    fontFamily: 'Arial', 
  },

  headertext: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'Arial', 
  },
  classText: {
    fontSize: 16,
    fontFamily: 'Arial', 
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
  emergencyButton: {
    position: 'absolute',
    bottom: 2,
    right: 20,
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomePage;
