import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet,TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const AttendanceRecord = () => {

  const navigation = useNavigation();



  const UpdateAttendance = () => {
    //navigate to setting page
    navigation.navigate('UpdateAttendance');

  };

  const handlePreviousButtonClick = () => {
    navigation.navigate('AttendHP');
  };

  const studentList = [
    { id: '1', name: 'MathClass-22july' },
    { id: '2', name: 'MathClass-23july' },
    { id: '3', name: 'MathClass-23july' },
    { id: '4', name: 'PhysicClass-25july' },
    { id: '5', name: 'AtomicClass-26july' },
    { id: '6', name: 'GeographyClass-27july' },
    { id: '7', name: 'MusicClass-28july' },
    { id: '8', name: 'Class-29july' },
    { id: '9', name: 'Class-30july' },
    { id: '10', name: 'Class-31july' },
    { id: '11', name: 'Class-1august' },
    { id: '12', name: 'Class-2august' },
    { id: '13', name: 'Class-3august' },
    { id: '14', name: 'Class-4august' },
    { id: '15', name: 'Class-5august' },
    { id: '16', name: 'Class-6august' },
    { id: '17', name: 'Class-7august' },
    { id: '18', name: 'Class-8august' },
    { id: '19', name: 'Class-9august' },
    { id: '20', name: 'Class-10august' },
  ];

  

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePreviousButtonClick}>
          <Ionicons name="chevron-back-outline" size={30} style={styles.icon} />
        </TouchableOpacity>

        <Text style={{ fontSize: 22, textAlign: "center",paddingBottom:'10%',fontWeight:'bold' }}>
          Attendance records:
      </Text>
      <View style={styles.studentlistTable}>
        <FlatList
          data={studentList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (

            <View style={styles.itemContainer}>

              <Text style={styles.studentName}>{item.name}</Text>
              <Button  style={styles.updateButton} color="black" title="Update" onPress={UpdateAttendance}/>

            </View>
          )}
        />
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
    paddingTop: '2%',
    paddingLeft: '3%',
    maxHeight:'88%',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    paddingBottom:20,
  },
  studentName: {
    flex: 1,
    marginRight: 8,
    fontSize:16,
    fontWeight:'bold',
  },



});

export default AttendanceRecord;
