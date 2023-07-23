import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const SAHomePage = () => {
  //use for navigating/redirect to other page
  const navigation = useNavigation();
  const handleUserIconClick = () => {
    //navigate to setting page
    navigation.navigate('SAProfile');
  };
  const EmergencyButton = () => {
    Alert.alert('Notification sent? Do we include a timer for 5 second to count?');
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
          <Text style={styles.headerText}>Absent Teacher Today:</Text>
          <ScrollView horizontal={true} contentContainerStyle={styles.scrollContent}>
            <View style={[styles.card, styles.cardElevated]}>
              <Text style={styles.classText}>Dr Tan Jia Song</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
              <Text style={styles.classText}>Prof Lim Big Yong</Text>

            </View>
            <View style={[styles.card, styles.cardElevated]}>
              <Text style={styles.classText}>Mr Tan Yap Ming</Text>

            </View>


                    
          </ScrollView>
        </View>


        <View style={styles.absentContainer}>
          <Text style={styles.headerText}>Available Relief Teacher:</Text>
          <ScrollView horizontal={true} contentContainerStyle={styles.scrollContent}>
          <View style={[styles.card, styles.cardElevated]}>
              <Text style={styles.classText}>Mr Albert Einstein</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
              <Text style={styles.classText}>Mrs Thomas Edison</Text>

            </View>
            <View style={[styles.card, styles.cardElevated]}>
              <Text style={styles.classText}>Dr Tan Yap Ming</Text>

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
export default SAHomePage;