

import React, { useState } from 'react';
import { View, Text, Button, FlatList, TextInput, StyleSheet } from 'react-native';

const ViewAttendance = () => {

  //store it as normal variable
  const attendanceList = [
      { name: 'Navindran', status: 'Present' },
      { name: 'Chow Xuhua', status: 'Late' },
      { name: 'Qixian', status: 'Absent' },
      { name: 'Guardiola', status: 'Late' },
      { name: 'Hazard', status: 'Present' },
      { name: 'Rashford', status: 'Late' },
      { name: 'Mbappe', status: 'Absent' },
      
      { name: 'zii jia', status: 'Late' },
      { name: 'lim ck', status: 'Present' },
      { name: 'bacon', status: 'Late' },
      { name: 'niece', status: 'Absent' },
    ];


 

  return (
    <View style={styles.container}>
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
  studentlistTable:{
    paddingTop:30,
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
