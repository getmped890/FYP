import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AttendanceRecord = () => {

  const navigation = useNavigation();



  const UpdateAttendance = () => {
    //navigate to setting page
    navigation.navigate('UpdateAttendance');

  };


  const studentList = [
    { id: '1', name: 'MathClass-22july' },
    { id: '2', name: 'MathClass-23july' },
    { id: '3', name: 'MathClass-23july' },
    { id: '4', name: 'PhysicClass-25july' },
    { id: '5', name: 'AtomicClass-26july' },
    { id: '6', name: 'GeographyClass-27july' },
    { id: '7', name: 'MusicClass-28july' },
  ];

  

  return (
    <View style={styles.container}>
        <Text style={{ fontSize: 22, textAlign: "center",marginTop:20,fontWeight:'bold' }}>
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
    paddingTop: 30,
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
