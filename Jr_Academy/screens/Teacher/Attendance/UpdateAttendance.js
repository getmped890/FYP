import React, { useState, useLayoutEffect } from 'react';
import { View, SafeAreaView, Switch, StyleSheet, Text, Button, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const UpdateAttendance = () => {

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

    return (

        <SafeAreaView style={styles.container}>

        <View>
      
        
          <FlatList
            data={persons}
            renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={myItemSeparator}
            ListEmptyComponent={myListEmpty}
            ListHeaderComponent={() => (
              <Text style={{ fontSize: 20, textAlign: "center",marginTop:20,fontWeight:'bold' }}>
                Update Attendance
              </Text>
      
              
       
            )}
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
      });
      
  
export default UpdateAttendance;
