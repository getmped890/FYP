import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import SettingsScreen from '../Setting/Setting';

const HomePage = () => {
  //use for navigating/redirect to other page
  const navigation = useNavigation();

  const handleUserIconClick = () => {
    //navigate to setting page
    navigation.navigate('Setting');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topLeft}>
        <Text style={styles.welcometext}>Jason</Text>
      </View>

      <TouchableOpacity style={styles.topRight} onPress={handleUserIconClick}>
        <Ionicons name="person-outline" size={35} color="black" />
      </TouchableOpacity>

      <View style={styles.scrollContainer}>
        <Text style={styles.headertext}>Upcoming Classes:</Text>
        <ScrollView horizontal={true} contentContainerStyle={styles.scrollContent}>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.classText}>CSIT203</Text>
            <Text style={styles.classText}>26th Jun 2023</Text>
            <Text style={styles.classText}>3:30pm - 6:30pm</Text>
          </View>
          <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.classText}>CSIT503</Text>
            <Text style={styles.classText}>20th Jun 2023</Text>
            <Text style={styles.classText}>2:30pm - 4:30pm</Text>
          </View>
          <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.classText}>CSIT123</Text>
            <Text style={styles.classText}>29th Jun 2023</Text>
            <Text style={styles.classText}>3:30pm - 6:30pm</Text>
          </View>
        </ScrollView>
      </View>

      <View style={styles.absentContainer}>
        <Text style={styles.headertext}>Absentees Based On Last Class:</Text>
        <ScrollView horizontal={true} contentContainerStyle={styles.scrollContent}>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.classText}>1. Wong Kai Yih</Text>
          </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.classText}>2. Navindran a/l duraisingam</Text>
          </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.classText}>3. Chow Xuhua</Text>
          </View>
        </ScrollView>
      </View>

      <TouchableOpacity style={styles.endClassButton}>
        <Ionicons name="checkmark" size={35} />
      </TouchableOpacity>
      <Text style={styles.endClassText}>End Class</Text>
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
    bottom: 30,
    right: 20,
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },

  endClassText:{
    position: 'absolute',
    bottom:8,
    right:25,
    fontWeight: 'bold',
  },



});

export default HomePage;
