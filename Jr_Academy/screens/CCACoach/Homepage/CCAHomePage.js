import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import BackgroundColor from '../../Genericscreens/BackgroundSetting/BackgroundColor';

const CCAHomePage = () => {
  //use for navigating/redirect to other page
  const navigation = useNavigation();
  const handleUserIconClick = () => {
    //navigate to setting page
    navigation.navigate('CCAProfile');
  };
  //End Class message 
  const handleEndClass = () => {
    Alert.alert('End Class', 'Are you sure to end class now?', [

      {
        text: 'Yes',
        onPress: () => Alert.alert('Class Ended!'),
      },      
      {
        text: 'Cancel',
      },
    ]);

    
    
  };
  return (
    <BackgroundColor>
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

        <View style={styles.dismissalTimeContainer}>
            <Text style={styles.headerText}>Class Dismissal Timing</Text>

                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.classText}>CSIT203</Text>
                    <Text style={styles.classText}>6.30pm</Text>
                </View>

        </View>


        <View style={styles.absentContainer}>
          <Text style={styles.headerText}>Absentees Yesterday:</Text>
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


        <TouchableOpacity style={styles.endClassButton} onPress={handleEndClass}>
          <Ionicons name="checkmark" size={32} color="#1DC1B1" />
        </TouchableOpacity>
        <Text style={styles.endClassText}>End Class</Text>
      </View>
    </View>
    </BackgroundColor>
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
    marginTop:'32%',
    height:'21%',
  },

  dismissalTimeContainer: {
    marginTop:'8%',

    height:'20%',

  },

  absentContainer: {
    marginTop:'8%',

    height:'17%',
  },

  welcomeText: {
    fontSize: height * 0.03,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#FFFFFF',
  },
  headerText: {
    fontSize: height * 0.026,
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
    bottom: "4.5%",
    right: width * 0.026,
    width: width * 0.17,
    height: width * 0.105,
    borderRadius: width * 0.1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  endClassText: {
    position: 'absolute',
    bottom: height * 0.007,
    right: width * 0.01,
    fontWeight: 'bold',
    fontSize: height * 0.023,
    color: '#FFFFFF',
  },
});
export default CCAHomePage;