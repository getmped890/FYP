import React from 'react';
import { View, Text, FlatList, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {Calendar, LocaleConfig} from 'react-native-calendars';

const TimeTable = () => {
  //use for navigating/redirect to other page
  const navigation = useNavigation();

  return (
<View>
<ScrollView style={styles.container}>
    <Text style={styles.headingText}>Timetable</Text>
    <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>CSIT203</Text>
            <Text>26th Jun 2023</Text>
            <Text>3.30pm - 6.30pm</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>CSIT115</Text>
            <Text>27th Jun 2023</Text>
            <Text>12.00am - 3.00pm</Text>
        </View>
    </ScrollView>

   
    </ScrollView>

    <View style={styles.calendar}>
        <Calendar  style={styles.calendartest}/>
    </View> 
  
</View>

  );
};

const styles = StyleSheet.create({
    headingText: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        paddingTop:'20%',
    },
    card:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 100,
        borderRadius: 4,
        margin: 25
    },
    cardElevated:{
        backgroundColor: 'white',
        elevation: 4,
        shadowOffset: {
            width: 1,
            height: 1
        },
    },
  
    calendar:{
      //paddingLeft:20,
      //flex: 1,
      alignItems:'center',
      //width: "10%",
      //height:"10%",
    },
  
    container: {
      padding: 8
    },
    scrollView: {
      backgroundColor: 'white',
      marginHorizontal: 20,
    },
    text: {
      fontSize: 42,
    },
  });

export default TimeTable;


