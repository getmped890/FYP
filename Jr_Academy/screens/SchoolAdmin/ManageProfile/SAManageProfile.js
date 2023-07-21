import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
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
    Alert.alert('Profile suspended!');
  };

  const profileList = [
    { id: 100, username: 'user1', role: 'admin', email: 'user1@example.com', status: 'active' },
    { id: 101, username: 'user2', role: 'user', email: 'user2@example.com', status: 'inactive' },
    { id: 102, username: 'user3', role: 'user', email: 'user3@example.com', status: 'active' },
    { id: 103, username: 'user4', role: 'admin', email: 'user4@example.com', status: 'inactive' },
    { id: 104, username: 'user1', role: 'admin', email: 'user1@example.com', status: 'active' },
    { id: 105, username: 'user2', role: 'user', email: 'user2@example.com', status: 'inactive' },
    { id: 106, username: 'user3', role: 'user', email: 'user3@example.com', status: 'active' },
    { id: 107, username: 'user4', role: 'admin', email: 'user4@example.com', status: 'inactive' },
    { id: 108, username: 'user1', role: 'admin', email: 'user1@example.com', status: 'active' },
    { id: 109, username: 'user2', role: 'user', email: 'user2@example.com', status: 'inactive' },
    { id: 112, username: 'user3', role: 'user', email: 'user3@example.com', status: 'active' },
    { id: 113, username: 'user4', role: 'admin', email: 'user4@example.com', status: 'inactive' },
    { id: 114, username: 'user1', role: 'admin', email: 'user1@example.com', status: 'active' },
    { id: 115, username: 'user2', role: 'user', email: 'user2@example.com', status: 'inactive' },
    { id: 116, username: 'user3', role: 'user', email: 'user3@example.com', status: 'active' },
    { id: 117, username: 'user4', role: 'admin', email: 'user4@example.com', status: 'inactive' },
  ];

  const columns = [
    { name: 'User Id', selector: 'id', sortable: true, width: 100 },
    { name: 'Username', selector: 'username', sortable: true, width: 100 },
    { name: 'Role', selector: 'role', sortable: true, width: 100 },
    { name: 'Email', selector: 'email', sortable: true, width: 100 },
    { name: 'Status', selector: 'status', sortable: true, width: 100 },
    {
      name: 'Actions',
      selector: 'actions',
      cell: (row) => (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => handleEdit(row.id)}
          >
            <Text style={{ color: 'white' }}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.suspendButton}
            onPress={() => handleActivate(row.id)}
          >
            <Text style={{ color: 'white' }}>Suspend</Text>
          </TouchableOpacity>
        </View>
      ),
      width: 200,
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
        <ScrollView >
        <ScrollView horizontal>
          <DataTable style={styles.dataTable}>
            <DataTable.Header>
              {columns.map((column) => (
                <DataTable.Title
                  key={column.selector}
                  style={{ ...styles.headerCell, width: column.width }}
                >
                  {column.name}
                </DataTable.Title>
              ))}
            </DataTable.Header>

            {searchedData.map((item) => (
              <DataTable.Row key={item.id}>
                {columns.map((column) => (
                  <DataTable.Cell
                    key={column.selector}
                    style={{ ...styles.dataTableCell, width: column.width }}
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
  dataTable: {},
  headerCell: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  dataTableCell: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  editButton: {
    backgroundColor: 'grey',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  suspendButton: {
    backgroundColor: 'green',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
});

export default SAManageProfile;
