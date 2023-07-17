import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, TouchableOpacity, Text, Alert } from 'react-native';
import { DataTable } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import BackgroundColor from '../../Genericscreens/BackgroundSetting/BackgroundColor';


const SAManageProfile = () => {
  const [searchValue, setsearchValue] = useState('');
  const navigation = useNavigation();

  const handleEdit = () => {
    navigation.navigate('SAUpdateProfile');
  };

  const handleActivate = () => {
    Alert.alert("Profile suspended!");
  };

  const profileList = [
    { id: 100, username: 'jason', role: 'teacher', email: 'testemail@gmail.com', status: 'active' },
    { id: 101, username: 'philip', role: 'teacher', email: 'mbappe429@gmail.com', status: 'inactive' },
    { id: 102, username: 'mbappe647', role: 'teacher', email: 'mbappe647@gmail.com', status: 'inactive' },
    { id: 103, username: 'mbappe152', role: 'teacher', email: 'mbappe152@gmail.com', status: 'inactive' },
    { id: 104, username: 'mbappe777', role: 'teacher', email: 'mbappe777@gmail.com', status: 'inactive' },
    { id: 105, username: 'mbappe38', role: 'teacher', email: 'mbappe38@gmail.com', status: 'inactive' },
    { id: 107, username: 'mbappe499', role: 'teacher', email: 'mbappe499@gmail.com', status: 'active' },
    { id: 108, username: 'mbappe108', role: 'student', email: 'mbappe108@gmail.com', status: 'active' },
    { id: 109, username: 'mbappe109', role: 'student', email: 'mbappe109@gmail.com', status: 'active' },
    { id: 110, username: 'mbappe110', role: 'cca coach', email: 'mbappe110@gmail.com', status: 'active' },
    { id: 111, username: 'mbappe111', role: 'guardian', email: 'mbappe111@gmail.com', status: 'active' },
    { id: 112, username: 'mbappe112', role: 'student', email: 'mbappe112@gmail.com', status: 'active' },
    { id: 113, username: 'mbappe113', role: 'cca coach', email: 'mbappe113@gmail.com', status: 'active' },
    { id: 114, username: 'mbappe114', role: 'guardian', email: 'mbappe114@gmail.com', status: 'active' },
    { id: 115, username: 'mbappe115', role: 'student', email: 'mbappe115@gmail.com', status: 'active' },
    { id: 116, username: 'mbappe116', role: 'cca coach', email: 'mbappe116@gmail.com', status: 'active' },
    { id: 117, username: 'mbappe117', role: 'guardian', email: 'mbappe117@gmail.com', status: 'active' }
];

  const columns = [
    { name: 'User Id', selector: 'id', sortable: true },
    { name: 'Username', selector: 'username', sortable: true },
    { name: 'Role', selector: 'role', sortable: true },
    { name: 'Email', selector: 'email', sortable: true },
    { name: 'Status', selector: 'status', sortable: true },
    {
      name: 'Actions',
      selector: 'actions',
      cell: (row) => (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={{ backgroundColor: 'grey' }}
            onPress={() => handleEdit(row.id)}
          >
            <Text style={{ color: 'white' }}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ backgroundColor: 'green' }}
            onPress={() => handleActivate(row.id)}
          >
            <Text style={{ color: 'white' }}>Suspend</Text>
          </TouchableOpacity>
        </View>
      ),
    },
  ];

  const searchedData = profileList.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchValue.toLowerCase())
    )
  );

  return (
    <BackgroundColor>

    <View style={styles.container}>
      <TextInput
        style={{ borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="Enter Input"
        value={searchValue}
        onChangeText={(text) => setsearchValue(text)}
      />
      <ScrollView style={styles.scrollView}>
        <ScrollView horizontal>
          <DataTable>
            <DataTable.Header>
              {columns.map((column) => (
                <DataTable.Title key={column.selector}>{column.name}</DataTable.Title>
              ))}
            </DataTable.Header>

            {searchedData.map((item) => (
              <DataTable.Row key={item.id}>
                {columns.map((column) => (
                  <DataTable.Cell
                    key={column.selector}
                    style={styles.dataTableCell}
                    flex={column.flex}
                  >
                    {column.cell ? <Text>{column.cell(item)}</Text> : item[column.selector]}
                  </DataTable.Cell>
                ))}
              </DataTable.Row>
            ))}
          </DataTable>
        </ScrollView>
      </ScrollView>
    </View>
    </BackgroundColor>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 2,
    paddingTop: 100,
    maxHeight: '94%',
  },
  scrollView: {
    flex: 1,
  },
  dataTableCell: {
    paddingLeft: 0,
    width:100,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});

export default SAManageProfile;
