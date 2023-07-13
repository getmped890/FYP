import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const MarkAttendance = () => {
  const [selectedAttendance, setSelectedAttendance] = useState({});

  const navigation = useNavigation();

  const updateStatus = (studentId, status) => {
    setSelectedAttendance((prevAttendance) => ({
      ...prevAttendance,
      [studentId]: status,
    }));
  };
 
  const AttendanceSaved = () => {
    Alert.alert('Attendance Saved!');
  };

  const CancelButton = () => {
    navigation.navigate('AttendHP');
  };
  const studentList = [
    { id: '1', name: 'student1' },
    { id: '2', name: 'student2' },
    { id: '3', name: 'student3' },
    { id: '4', name: 'student4' },
    { id: '5', name: 'student5' },
    { id: '6', name: 'student6' },
    { id: '7', name: 'student7' },
    { id: '8', name: 'student8' },
    { id: '9', name: 'student9' },
    { id: '10', name: 'student10' },
    { id: '11', name: 'student11' },
    { id: '12', name: 'student12' },
    { id: '13', name: 'student13' },
    { id: '14', name: 'student14' },
    { id: '15', name: 'student15' },
    { id: '16', name: 'student16' },
    { id: '17', name: 'student17' },
    { id: '18', name: 'student18' },
    { id: '19', name: 'student19' },
    { id: '20', name: 'student20' },
    { id: '21', name: 'student21' },
    { id: '22', name: 'student22' },
    { id: '23', name: 'student23' },
    { id: '24', name: 'student24' },
    { id: '25', name: 'student25' },
    { id: '26', name: 'student26' },
    { id: '27', name: 'student27' },
    { id: '28', name: 'student28' },
    { id: '29', name: 'student29' },
    { id: '30', name: 'student30' },
    { id: '31', name: 'student31' },
    { id: '32', name: 'student32' },
    { id: '33', name: 'student33' },
    { id: '34', name: 'student34' },
    { id: '35', name: 'student35' },

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
        <View style={styles.saveButton}>
          <Button   color="black" title="Save Attendance" onPress={AttendanceSaved}/>

        </View>

        <View style={styles.cancelButton}>
          <Button  color="grey" title="Cancel" onPress={CancelButton}/>
        </View>
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
    maxHeight:'85%',

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
  saveButton:{
    paddingBottom:20,
    maxWidth:'98%',
  },
  cancelButton:{
    paddingBottom:20,
    maxWidth:'98%',

  }
});

export default MarkAttendance;
