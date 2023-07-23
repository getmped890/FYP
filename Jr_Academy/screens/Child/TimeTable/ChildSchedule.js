import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BackgroundColor from '../../Genericscreens/BackgroundSetting/BackgroundColor';
import { useNavigation } from '@react-navigation/native';


const ChildSchedule = ({ route }) => {
  
  const handleBackButtonClick = () => {
    navigation.navigate('TTScreen');
  };


  const periods = [
    {
      day: 'Monday',
      period: 'Period 1',
      subject: 'Math',
      time: '8:00am to 8:30am',
    },
    {
      day: 'Monday',
      period: 'Period 2',
      subject: 'Science',
      time: '8:35am to 9:05am',
    },
    {
      day: 'Monday',
      period: 'Period 3',
      subject: 'English',
      time: '9:10am to 9:40am',
    },
    {
      day: 'Monday',
      period: 'Period 4',
      subject: 'History',
      time: '9:45am to 10:15am',
    },
    {
      day: 'Monday',
      period: 'Period 5',
      subject: 'Math',
      time: '10:20am to 10:50am',
    },
    {
      day: 'Monday',
      period: 'Period 6',
      subject: 'Science',
      time: '10:55am to 11:25am',
    },
    {
      day: 'Monday',
      period: 'Period 7',
      subject: 'English',
      time: '11:30am to 12:00pm',
    },
    {
      day: 'Monday',
      period: 'Period 8',
      subject: 'History',
      time: '12:05pm to 12:35pm',
    },
    {
      day: 'Monday',
      period: 'Period 9',
      subject: 'Math',
      time: '12:40pm to 1:10pm',
    },
    {
      day: 'Monday',
      period: 'Period 10',
      subject: 'Science',
      time: '1:15pm to 1:45pm',
    },
    {
      day: 'Monday',
      period: 'Period 11',
      subject: 'English',
      time: '1:50pm to 2:20pm',
    },
    {
      day: 'Tuesday',
      period: 'Period 1',
      subject: 'Physics',
      time: '8:00am to 8:30am',
    },
    {
      day: 'Tuesday',
      period: 'Period 2',
      subject: 'Chemistry',
      time: '8:35am to 9:05am',
    },
    {
      day: 'Tuesday',
      period: 'Period 3',
      subject: 'Biology',
      time: '9:10am to 9:40am',
    },
    {
      day: 'Tuesday',
      period: 'Period 4',
      subject: 'History',
      time: '9:45am to 10:15am',
    },
    {
      day: 'Tuesday',
      period: 'Period 5',
      subject: 'Math',
      time: '10:20am to 10:50am',
    },
    {
      day: 'Tuesday',
      period: 'Period 6',
      subject: 'English',
      time: '10:55am to 11:25am',
    },
    {
      day: 'Tuesday',
      period: 'Period 7',
      subject: 'Physics',
      time: '11:30am to 12:00pm',
    },
    {
      day: 'Tuesday',
      period: 'Period 8',
      subject: 'Chemistry',
      time: '12:05pm to 12:35pm',
    },
    {
      day: 'Tuesday',
      period: 'Period 9',
      subject: 'Biology',
      time: '12:40pm to 1:10pm',
    },
    {
      day: 'Tuesday',
      period: 'Period 10',
      subject: 'History',
      time: '1:15pm to 1:45pm',
    },
    {
      day: 'Tuesday',
      period: 'Period 11',
      subject: 'Math',
      time: '1:50pm to 2:20pm',
    },
  ];

  const { selectedDay } = route.params;

  const scheduleForSelectedDay = periods.filter((period) => period.day === selectedDay);
  const navigation = useNavigation();
  const BackAlert = () => {
    //navigate to GPS Page
    navigation.goBack();
  };
 

  return (
    <BackgroundColor>
      <View style={styles.container}>
        <View style={styles.backButtonContainer}>
          <TouchableOpacity style={styles.backButton} onPress={handleBackButtonClick}>
            <Ionicons name="chevron-back-outline" size={30} />
          </TouchableOpacity>
        </View>
        <Text style={styles.headingText}>Schedule for {selectedDay}</Text>
        <ScrollView style={styles.scrollView}>
          {scheduleForSelectedDay.map((period) => (
            <View key={period.period} style={styles.periodContainer}>
              <Text style={styles.periodText}>{period.period}</Text>
              <Text style={styles.subjectText}>{period.subject}</Text>
              <Text style={styles.timeText}>{period.time}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </BackgroundColor>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headingText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    paddingTop:50,
    paddingLeft:60,
  },
  scrollView: {
    flex: 1,
  },
  periodContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  periodText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subjectText: {
    fontSize: 16,
    color: '#1DC1B1',
  },
  timeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  backButtonContainer: {
    zIndex: 1,
    position: 'absolute',
    top: 20,
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  backText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default ChildSchedule;
