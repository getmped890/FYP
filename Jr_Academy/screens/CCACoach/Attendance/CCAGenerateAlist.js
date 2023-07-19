import React, { useState } from 'react';
import { View, Text, Button, FlatList, TextInput, StyleSheet,TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import BackgroundColor from '../../Genericscreens/BackgroundSetting/BackgroundColor';


const CCAGenerateAlist = () => {

  //create array, when call set attendancelist, it passed the value back to attendancelist variable
  const [attendanceList, setAttendanceList] = useState([]);

  const navigation = useNavigation();

  const handlePreviousButtonClick = () => {
    navigation.navigate('CCAAttendHP');
  };

  const generateAttendanceList = () => {
    // get data from database
    const exampleAttendanceData = [
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
    setAttendanceList(exampleAttendanceData);
  };

 

  return (
    <BackgroundColor>

    <View style={styles.container}>
       <TouchableOpacity style={styles.button} onPress={handlePreviousButtonClick}>
          <Ionicons name="chevron-back-outline" size={30} style={styles.icon} />
        </TouchableOpacity>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Input Date"
        />
        <Button color="black" title="Search"  />
      </View>
      <Button  color="black" title="Generate Attendance List" onPress={generateAttendanceList} />
      {attendanceList.length > 0 ? (
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
        //else 
      ) : (
        <Text style={styles.nodatafound}>No attendance data found.</Text>
      )}
    </View>
    </BackgroundColor>
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
    maxHeight:'75%',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop:'5%',
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    marginRight: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: 'gray',
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

export default CCAGenerateAlist;
