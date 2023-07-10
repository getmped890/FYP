import React, { useState, useLayoutEffect } from 'react';
import { View, TouchableOpacity, Switch, StyleSheet, Text, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const persons = [
    {
        id: "1",
        name: "Earnest Green",
        status: "present",
    },


    {
        id: "2",
        name: "Winston Orn",
        status: "absent",
    },

    {
        id: "3",
        name: "Carlton Collins",
        status: "late",
    },

    {
        id: "4",
        name: "Malcolm Labadie",
        status: "present",
    }
];


const ViewAttendance = () => {

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
      
    
    return (

  <View style={styles.container}>

  
    <FlatList
      data={persons}
      renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={myItemSeparator}
      ListEmptyComponent={myListEmpty}
      ListHeaderComponent={() => (
        <Text style={{ fontSize: 20, textAlign: "center",marginTop:20,fontWeight:'bold' }}>
          Attendance for today:
        </Text>

        
 
      )}/>


   </View> 


    );
};


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
        textAlign: 'center',
      },

  });
  
export default ViewAttendance;
