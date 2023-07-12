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
 
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <View style={styles.topLeft}>
          <Text style={styles.welcomeText}>Jason</Text>
        </View>
        <TouchableOpacity style={styles.topRight} onPress={handleUserIconClick}>
          <Ionicons name="person-outline" size={35} color="#FFFFFF" />
        </TouchableOpacity>
        <View style={styles.scrollContainer}>
          <Text style={styles.headerText}>Dismissal Time:</Text>
          <ScrollView horizontal={true} contentContainerStyle={styles.scrollContent}>
            <View style={[styles.card, styles.cardElevated]}>
              <Text style={styles.classText}>Class: CSIT203</Text>
              <Text style={styles.classText}>Date: 26th Jun 2023</Text>
              <Text style={styles.classText}>Dismissal Time: 3:30pm - 6:30pm</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
              <Text style={styles.classText}>Class: CSIT203</Text>
              <Text style={styles.classText}>Date: 26th Jun 2023</Text>
              <Text style={styles.classText}>Dismissal Time: 3:30pm - 6:30pm</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
              <Text style={styles.classText}>Class: CSIT203</Text>
              <Text style={styles.classText}>Date: 26th Jun 2023</Text>
              <Text style={styles.classText}>Dismissal Time: 3:30pm - 6:30pm</Text> 
            </View>
          </ScrollView>
        </View>
        <View style={styles.absentContainer}>
          <Text style={styles.headerText}>Your child's attendance:</Text>
          <ScrollView horizontal={true} contentContainerStyle={styles.scrollContent}>
            <View style={[styles.card, styles.cardElevated]}>
              <Text style={styles.classText}>Class: CSIT203</Text>
              <Text style={styles.classText}>Date: 26th Jun 2023</Text>
              <Text style={styles.classText}>Attendance: Present</Text> 
            </View>
            <View style={[styles.card, styles.cardElevated]}>
              <Text style={styles.classText}>Class: CSIT203</Text>
              <Text style={styles.classText}>Date: 26th Jun 2023</Text>
              <Text style={styles.classText}>Attendance: Absent</Text> 
            </View>
            <View style={[styles.card, styles.cardElevated]}>
               <Text style={styles.classText}>Class: CSIT203</Text>
              <Text style={styles.classText}>Date: 26th Jun 2023</Text>
              <Text style={styles.classText}>Attendance: Late</Text> 
            </View>
          </ScrollView>
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
    paddingTop: height * 0.07,
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
    fontSize: height * 0.018,
    color: '#1DC1B1',
  },
  scrollContent: {
    alignItems: 'center',
  },
  endClassButton: {
    position: 'absolute',
    bottom: height * 0.05,
    right: width * 0.03,
    width: width * 0.2,
    height: width * 0.14,
    borderRadius: width * 0.1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  endClassText: {
    position: 'absolute',
    bottom: height * 0.01,
    right: width * 0.03,
    fontWeight: 'bold',
    fontSize: height * 0.024,
    color: '#FFFFFF',
  },
});
export default HomePage;