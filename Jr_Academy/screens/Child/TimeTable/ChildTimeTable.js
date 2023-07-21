import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import BackgroundColor from '../../Genericscreens/BackgroundSetting/BackgroundColor';

const ChildTimeTable = () => {
  const [markedDates, setMarkedDates] = useState({});

  useEffect(() => {
    markHolidayDateInCalendar();
  }, []);

  const markHolidayDateInCalendar = () => {
    const publicHolidays = {
      '2023-08-21': { selected: true, selectedColor: 'red' },
      '2023-07-28': { selected: true, selectedColor: 'red' },
    };
    setMarkedDates(publicHolidays);
  };

  return (
    <BackgroundColor>
      <View>
        <ScrollView style={styles.container}>
          <Text style={styles.headingText}>Weekly Timetable</Text>
          <ScrollView horizontal={true} style={styles.container}>
            <View style={[styles.card, styles.cardElevated]}>
              <Text style={styles.classText}>Monday</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
              <Text style={styles.classText}>Tuesday</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
              <Text style={styles.classText}>Wednesday</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
              <Text style={styles.classText}>Thursday</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
              <Text style={styles.classText}>Friday</Text>
            </View>
          </ScrollView>
        </ScrollView>

        <View style={styles.calendar}>
          <Calendar markedDates={markedDates} />
        </View>

        <View style={styles.publicHolidayContainer}>
          <View style={styles.publicHolidayCircle} />
          <Text style={styles.textHoliday}>Public Holiday</Text>
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
  textHoliday: {
    color: 'black',
  },
});

export default ChildTimeTable;
