import React, { useState } from 'react';
import { View, TextInput , StyleSheet, TouchableOpacity, Text, Alert} from 'react-native';
import { DataTable } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import BackgroundColor from '../../Genericscreens/BackgroundSetting/BackgroundColor';


const SAManageClass = () => {


  const [searchValue, setsearchValue] = useState('');

  const navigation = useNavigation();

  const handleEdit = () => {
    navigation.navigate('SAUpdateClass');
  };

 

  const classlist = [
    { id: 100, className: 'Math', venue: 'Room 1', teacher: 'Mr Japit' },
    { id: 101, className: 'Science', venue: 'Room 2', teacher: 'Mr Kyrie' },
    { id: 102, className: 'Geography', venue: 'Room 3', teacher: 'Mr Rooney' },
    { id: 103, className: 'Math', venue: 'Room 4', teacher: 'Mr Lim' },
    { id: 104, className: 'Science', venue: 'Room 2', teacher: 'Mr Kyrie' },
    { id: 105, className: 'Geography', venue: 'Room 3', teacher: 'Mr Rooney' },
    { id: 106, className: 'Math', venue: 'Room 4', teacher: 'Mr Lim' },
    { id: 107, className: 'Science', venue: 'Room 2', teacher: 'Mr Kyrie' },
    { id: 108, className: 'Geography', venue: 'Room 3', teacher: 'Mr Rooney' },
    { id: 109, className: 'Math', venue: 'Room 4', teacher: 'Mr Lim' },
    { id: 110, className: 'Science', venue: 'Room 2', teacher: 'Mr Kyrie' },
    { id: 111, className: 'Geography', venue: 'Room 3', teacher: 'Mr Rooney' },
    { id: 112, className: 'Math', venue: 'Room 4', teacher: 'Mr Lim' },
    { id: 113, className: 'Science', venue: 'Room 2', teacher: 'Mr Kyrie' },
    { id: 114, className: 'Geography', venue: 'Room 3', teacher: 'Mr Rooney' },
    { id: 115, className: 'Math', venue: 'Room 4', teacher: 'Mr Lim' },
    { id: 116, className: 'Science', venue: 'Room 2', teacher: 'Mr Kyrie' },
    { id: 117, className: 'Geography', venue: 'Room 3', teacher: 'Mr Rooney' },
  ];
  
  const columns = [
    { name: 'Class ID', selector: 'id', sortable: true },
    { name: 'Class Name', selector: 'className', sortable: true },
    { name: 'Venue', selector: 'venue', sortable: true },
    { name: 'Form Teacher', selector: 'teacher', sortable: true },
    {
      name: 'Actions',
      selector: 'actions',
      cell: (row) => (
        <View style={{ flexDirection: 'row'}}>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => handleEdit(row.id)}
          >
            <Text style={{ color: 'white' }}>Edit</Text>
          </TouchableOpacity>
       
        </View>
      ),
    },

  ];


  //retrieve the searched value by the user, and then store in searchedData
  const searchedData = classlist.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchValue.toLowerCase())
    )
  );

  return (
    <BackgroundColor>

    <View style={styles.container}>
      <TextInput
        style={{   borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal:10 }}
        placeholder="Enter Input"
        value={searchValue}
        onChangeText={(text) => setsearchValue(text)}
      />
       <ScrollView> 
      <DataTable>

        <DataTable.Header>
          {columns.map((column) => (
            <DataTable.Title key={column.selector}>{column.name}</DataTable.Title>
          ))}
        </DataTable.Header>

        {searchedData.map((item) => (
            <DataTable.Row key={item.id}>

              {columns.map((column) => (
                <DataTable.Cell key={column.selector}>
                  {/* if cell exist, then display cell, else display column value  */}
                  {column.cell ? (<Text >{column.cell(item)}</Text>) : (item[column.selector])}
                </DataTable.Cell>
              ))}

            </DataTable.Row>
          ))}


      </DataTable>
      </ScrollView>
    </View>
    </BackgroundColor>

  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 1,
    paddingTop: 100,
    maxHeight:'94%',
  },

  editButton: {
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  
});

export default SAManageClass;
