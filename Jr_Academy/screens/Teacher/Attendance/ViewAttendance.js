import React, { useState } from 'react';
import { View, Text, Button, FlatList, TextInput, StyleSheet , TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ViewAttendance = () => {

  const navigation = useNavigation();

  const handlePreviousButtonClick = () => {
    navigation.navigate('AttendHP');
  };

  //store it as normal variable
  const attendanceList = [
    { id: '1', name: 'student1', status: 'present' },
    { id: '2', name: 'student2', status: 'absent' },
    { id: '3', name: 'student3', status: 'late' },
    { id: '4', name: 'student4', status: 'present' },
    { id: '5', name: 'student5', status: 'absent' },
    { id: '6', name: 'student6', status: 'late' },
    { id: '7', name: 'student7', status: 'present' },
    { id: '8', name: 'student8', status: 'present' },
    { id: '9', name: 'student9', status: 'absent' },
    { id: '10', name: 'student10', status: 'late' },
    { id: '11', name: 'student11', status: 'present' },
    { id: '12', name: 'student12', status: 'absent' },
    { id: '13', name: 'student13', status: 'late' },
    { id: '14', name: 'student14', status: 'present' },
    { id: '15', name: 'student15', status: 'present' },
    { id: '16', name: 'student16', status: 'absent' },
    { id: '17', name: 'student17', status: 'late' },
    { id: '18', name: 'student18', status: 'present' },
    { id: '19', name: 'student19', status: 'absent' },
    { id: '20', name: 'student20', status: 'late' },
    { id: '21', name: 'student21', status: 'present' },
    { id: '22', name: 'student22', status: 'present' },
    { id: '23', name: 'student23', status: 'absent' },
    { id: '24', name: 'student24', status: 'late' },
    { id: '25', name: 'student25', status: 'present' },
    { id: '26', name: 'student26', status: 'absent' },
    { id: '27', name: 'student27', status: 'late' },
    { id: '28', name: 'student28', status: 'present' },
    { id: '29', name: 'student29', status: 'present' },
    { id: '30', name: 'student30', status: 'absent' },
    { id: '31', name: 'student31', status: 'late' },
    { id: '32', name: 'student32', status: 'present' },
    { id: '33', name: 'student33', status: 'absent' },
    { id: '34', name: 'student34', status: 'late' },
    { id: '35', name: 'student35', status: 'present' },
  ];


 

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePreviousButtonClick}>
          <Ionicons name="chevron-back-outline" size={30} style={styles.icon} />
        </TouchableOpacity>

      <Text style={{ fontSize: 20, textAlign: "center",marginTop:20,fontWeight:'bold' }}>
          Attendance for today:
      </Text>
      <View style={styles.studentlistTable}>
            <FlatList
            data={attendanceList}
                keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
                <View style={styles.itemContainer}>
                <Text style={styles.studentName}>{item.name}</Text>
                <Text style={styles.studentStatus}>{item.status}</Text>
                </View>
            )} 
             />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop:50,
    flex: 1,
    padding: 16,
  },
 
  nodatafound:{
    paddingTop:20,
  },
  studentlistTable: {
    paddingTop: '9%',
    paddingLeft: '3%',
    maxHeight:'83%',
  },
 
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  studentName: {
    flex: 1,
    marginRight: 8,
    fontSize:20,
  },
  studentStatus: {
    fontWeight: 'bold',
    fontSize:20,

  },
});

export default ViewAttendance;
