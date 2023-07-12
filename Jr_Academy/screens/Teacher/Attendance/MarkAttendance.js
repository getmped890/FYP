import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Alert } from 'react-native';

const MarkAttendance = () => {
  const [selectedAttendance, setSelectedAttendance] = useState({});


  const updateStatus = (studentId, status) => {
    setSelectedAttendance((prevAttendance) => ({
      ...prevAttendance,
      [studentId]: status,
    }));
  };
 
  const AttendanceSaved = () => {
    //navigate to setting page
    Alert.alert('Attendance Saved!');
  };
  const studentList = [
    { id: '1', name: 'Navindran' },
    { id: '2', name: 'Chow Xuhua' },
    { id: '3', name: 'Qixian' },
    { id: '4', name: 'Guardiola' },
    { id: '5', name: 'Hazard' },
    { id: '6', name: 'Rashford' },
    { id: '7', name: 'Mbappe' },
  ];

  

  return (
    <View style={styles.container}>
      <View style={styles.studentlistTable}>
        <FlatList
          data={studentList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (

            <View style={styles.itemContainer}>

              <Text style={styles.studentName}>{item.name}</Text>


              <Picker
                style={styles.attendancePicker}
                selectedValue={selectedAttendance[item.id]}
                //status means value selected in the dropdown box
                onValueChange={(status) => updateStatus(item.id, status)}
              >
                <Picker.Item label="Present" value="Present" />
                <Picker.Item label="Absent" value="Absent" />
                <Picker.Item label="Late" value="Late" />

              </Picker>
            </View>
          )}
        />
      </View>
      <Button color="black" title="Save Attendance" onPress={AttendanceSaved}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    padding: 16,
  },
  studentlistTable: {
    paddingTop: 30,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  studentName: {
    flex: 1,
    marginRight: 8,
  },
  attendancePicker: {
    width: 150,
  },
});

export default MarkAttendance;
