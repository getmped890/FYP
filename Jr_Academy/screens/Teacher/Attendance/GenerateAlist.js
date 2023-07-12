import React, { useState } from 'react';
import { View, Text, Button, FlatList, TextInput, StyleSheet } from 'react-native';

const GenerateAlist = () => {

  //create array, when call set attendancelist, it passed the value back to attendancelist variable
  const [attendanceList, setAttendanceList] = useState([]);

  const generateAttendanceList = () => {
    // get data from database
    const exampleAttendanceData = [
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
    setAttendanceList(exampleAttendanceData);
  };

 

  return (
    <View style={styles.container}>
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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

export default GenerateAlist;
