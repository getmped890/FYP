import React from 'react';
import { View, Text , ScrollView, Dimensions, StyleSheet} from 'react-native';

const DismissalPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.background}>

      <View style={styles.dismissalTimeContainer}>
          <Text style={styles.headerText}>Class Dismissal Time:</Text>
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

        <View style={styles.ccaTimeContainer}>
          <Text style={styles.headerText}>CCA Dismissal Time:</Text>
          <ScrollView horizontal={true} contentContainerStyle={styles.scrollContent}>
            <View style={[styles.card, styles.cardElevated]}>
              <Text style={styles.classText}>Badminton</Text>
              <Text style={styles.classText}>Date: 26th Jun 2023</Text>
              <Text style={styles.classText}>Dismissal Time: 3:30pm - 6:30pm</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
              <Text style={styles.classText}>Football</Text>
              <Text style={styles.classText}>Date: 26th Jun 2023</Text>
              <Text style={styles.classText}>Dismissal Time: 3:30pm - 6:30pm</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
              <Text style={styles.classText}>Class: Dancing</Text>
              <Text style={styles.classText}>Date: 26th Jun 2023</Text>
              <Text style={styles.classText}>Dismissal Time: 3:30pm - 6:30pm</Text> 
            </View>
          </ScrollView>
        </View>

        <View style={styles.reminderContainer}>
        <Text style={styles.headerText}>Dismissal Reminder:</Text>

          <ScrollView horizontal={true} contentContainerStyle={styles.scrollContent}>

            <View style={[styles.card, styles.cardElevated]}>
                  <Text style={styles.classText}>Dismissal Reminder:</Text>
                  <Text style={styles.classText}></Text>
                  <Text style={styles.classText}>Child Name: James</Text>
                  <Text style={styles.classText}>Your child will be dismissed in an hour</Text>
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
  dismissalTimeContainer: {
    paddingTop: height * 0.05,
  },

  ccaTimeContainer:{
    paddingTop: height * 0.03,
    paddingBottom:0,
  },

  reminderContainer:{
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
    fontSize: height * 0.018,
    color: '#1DC1B1',
  },
  scrollContent: {
    alignItems: 'center',
  },

});
export default DismissalPage;
