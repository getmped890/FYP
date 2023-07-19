import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet,TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import BackgroundColor from '../../Genericscreens/BackgroundSetting/BackgroundColor';


const CCAAttendanceRecord = () => {

  const navigation = useNavigation();



  const UpdateAttendance = () => {
    //navigate to setting page
    navigation.navigate('CCAUpdateAttendance');

  };

  const handlePreviousButtonClick = () => {
    navigation.navigate('CCAAttendHP');
  };

  const studentList = [
    { id: '1', name: '3 July 2023' },
    { id: '2', name: '4 July 2023' },
    { id: '3', name: '5 July 2023' },
    { id: '4', name: '6 July 2023' },
    { id: '5', name: '7 July 2023' },
    { id: '6', name: '10 July 2023' },
    { id: '7', name: '11 July 2023' },
    { id: '8', name: '12 July 2023' },
    { id: '9', name: '13 July 2023' },
    { id: '10', name: '14 July 2023' },
    { id: '11', name: '17 July 2023' },
    { id: '12', name: '18 July 2023' },
    { id: '13', name: '19 July 2023' },
    { id: '14', name: '20 July 2023' },
    { id: '15', name: '21 July 2023' },
    { id: '16', name: '24 July 2023' },
    { id: '17', name: '25 July 2023' },
    { id: '18', name: '26 July 2023' },
    { id: '19', name: '27 July 2023' },
    { id: '20', name: '28 July 2023' },
  ];

  

  return (
    <BackgroundColor>

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
    </BackgroundColor>
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

export default CCAAttendanceRecord;
