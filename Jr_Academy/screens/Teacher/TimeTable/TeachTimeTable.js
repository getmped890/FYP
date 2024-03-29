import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import BackgroundColor from '../../Genericscreens/BackgroundSetting/BackgroundColor';

const TeachTimeTable = ({ navigation }) => {
  const [markedDates, setMarkedDates] = useState({});

  useEffect(() => {
    markHolidayDateInCalendar();
  }, []);

  const markHolidayDateInCalendar = () => {
    // Put all the public holiday dates here 
    const publicHolidays = {      
      '2023-01-01': { selected: true, selectedColor: 'red' },
      '2023-01-02': { selected: true, selectedColor: 'red' },
      '2023-01-22': { selected: true, selectedColor: 'red' },  
      '2023-01-23': { selected: true, selectedColor: 'red' }, 
      '2023-01-24': { selected: true, selectedColor: 'red' },
      '2023-04-07': { selected: true, selectedColor: 'red' },
      '2023-05-01': { selected: true, selectedColor: 'red' },                        
      '2023-06-02': { selected: true, selectedColor: 'red' },
      '2023-06-29': { selected: true, selectedColor: 'red' },                       
      '2023-08-09': { selected: true, selectedColor: 'red' },
      '2023-08-25': { selected: true, selectedColor: 'blue' },
      '2023-11-12': { selected: true, selectedColor: 'red' },
      '2023-11-13': { selected: true, selectedColor: 'red' },
      '2023-12-25': { selected: true, selectedColor: 'red' },            
    };
    setMarkedDates(publicHolidays);
  };

  const scheduleDay = (day) => {
    navigation.navigate('TeachSchedule', { selectedDay: day });
  };

  return (
    <BackgroundColor>
      <View>
        <ScrollView style={styles.container}>
          <Text style={styles.headingText}>Teacher's Schedule/TimeTable</Text>
          <ScrollView horizontal={true} style={styles.container}>
            <TouchableOpacity onPress={() => scheduleDay('Monday')}>
              <View style={[styles.card, styles.cardElevated]}>
                <Text style={styles.classText}>Monday</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => scheduleDay('Tuesday')}>
              <View style={[styles.card, styles.cardElevated]}>
                <Text style={styles.classText}>Tuesday</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => scheduleDay('Wednesday')}>
              <View style={[styles.card, styles.cardElevated]}>
                <Text style={styles.classText}>Wednesday</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => scheduleDay('Thursday')}>
              <View style={[styles.card, styles.cardElevated]}>
                <Text style={styles.classText}>Thursday</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => scheduleDay('Friday')}>
              <View style={[styles.card, styles.cardElevated]}>
                <Text style={styles.classText}>Friday</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </ScrollView>

        <View style={styles.calendar}>
          <Calendar markedDates={markedDates} />
        </View>

        <View style={styles.publicHolidayContainer}>
          <View style={styles.publicHolidayCircle} />
          <Text style={styles.textHoliday}>Public Holiday</Text>
        </View>
        <View style={styles.publicHolidayContainer}>
          <View style={styles.SchoolEventCircle} />
          <Text style={styles.textHoliday}>School Event  </Text>
        </View>
      </View>
    </BackgroundColor>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingTop: '20%',
    color: 'white',
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 100,
    borderRadius: 4,
    margin: 25,
  },
  cardElevated: {
    backgroundColor: 'white',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  calendar: {
    alignItems: 'center',
  },
  classText: {
    color: '#1DC1B1',
  },
  container: {
    padding: 8,
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
  publicHolidayContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  publicHolidayCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'red',
    marginRight: 5,
  },
  SchoolEventCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'blue',
    marginRight: 5,
  },
  textHoliday: {
    color: 'black',
  },
});

export default TeachTimeTable;
