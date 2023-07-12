import React, { useState, useLayoutEffect, Component, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView , Button, TouchableOpacity, FlatList, StyleSheet, Text, View } from "react-native";
import {useForm, Controller} from 'react-hook-form';
import DropDownPicker from "react-native-dropdown-picker";


//remove this persons const once the database is connected
//this is for testing
const persons = [
    {
        id: "1",
        name: "Earnest Green",
    },


    {
        id: "2",
        name: "Winston Orn",
    },

    {
        id: "3",
        name: "Carlton Collins",
    },

    {
        id: "4",
        name: "Malcolm Labadie",
    }
];




const MarkAttendanceScreen = () => {

  const { handleSubmit, control } = useForm();
  const [statusOpen, setStatusOpen] = useState(false);
  const [statusValue, setStatusValue] = useState(null);
  const [status, setStatus] = useState([
    { label: "Present", value: "present" },
    { label: "Absent", value: "absent" },
    { label: "Late", value: "late" },
  ]);

  const onStatusOpen = () => {
    //setStatusOpen(true);
  };

  const myItemSeparator = () => {
    return <View style={{ height: 1, backgroundColor: "grey",marginHorizontal:10}} />;
    };
  
  const myListEmpty = () => {
    return (
      <View style={{ alignItems: "center" }}>
      <Text style={styles.item}>No data found</Text>
      </View>
    );
  };

 


  const [selected, setSelected] = React.useState("");
  

  const renderNames = ({item}) => {
  return(
    <>
        <Text style={styles.item}>{item.name}</Text>
    
                  <View style={styles.dropdownprofile}>
                      <DropDownPicker
                      style={styles.dropdown}
                      open={statusOpen}
                      value={statusValue}
                      items={status}
                      setOpen={setStatusOpen}
                      setValue={setStatusValue}
                      setItems={setStatus}
                      placeholder="Status"
                      placeholderStyle={styles.placeholderStyles}
                      onOpen={onStatusOpen}
                      // onChangeValue={onChange}
                      zIndex={3000}
                      zIndexInverse={1000}
                      />
                  </View>
          
    </>
    );
  }
  
return (
  <SafeAreaView style={styles.container}>

  <View>

  
    <FlatList
      data={persons}
      renderItem={renderNames}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={myItemSeparator}
      ListEmptyComponent={myListEmpty}
      ListHeaderComponent={() => (
        <Text style={{ fontSize: 20, textAlign: "center",marginTop:20,fontWeight:'bold' }}>
          Mark Attendance
        </Text>

        
 
      )}
      />

  

            <Button 
              title={'Submit'}
            />


    

    

   </View> 

  </SafeAreaView>

  
  );
 }
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    fontSize: 30,
  },
  item: {
    padding: 20,
    marginTop: 5,
    fontSize: 15,
  },
  dropdownprofile: {
    marginHorizontal: 10,
    width: "50%",
    marginBottom: 15,
  },
  dropdown: {
    borderColor: "#B7B7B7",
    height: 50,
  },
});

export default MarkAttendanceScreen;