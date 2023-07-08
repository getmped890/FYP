import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
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
      <View style={styles.background}>
        <View style={styles.topLeft}>
          <Text style={styles.welcomeText}>Jason</Text>
        </View>

        <TouchableOpacity style={styles.topRight} onPress={handleUserIconClick}>
          <Ionicons name="person-outline" size={35} color="#FFFFFF" />
        </TouchableOpacity>

        <View style={styles.scrollContainer}>
          <Text style={styles.headerText}>Upcoming Classes:</Text>
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
          <Text style={styles.headerText}>Absentees Based On Last Class:</Text>
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
          <Ionicons name="checkmark" size={35} color="#1DC1B1" />
        </TouchableOpacity>
        <Text style={styles.endClassText}>End Class</Text>
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
