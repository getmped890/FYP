import React from 'react';
import { View, Text, FlatList, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import BackgroundColor from '../../Genericscreens/BackgroundSetting/BackgroundColor';


const TeachTimeTable = () => {
  //use for navigating/redirect to other page
  const navigation = useNavigation();

  return (
<BackgroundColor>

<View>
<ScrollView style={styles.container}>
    <Text style={styles.headingText}>Timetable</Text>
    <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.classText}>CSIT203</Text>
            <Text style={styles.classText}>26th Jun 2023</Text>
            <Text style={styles.classText}>3.30pm - 6.30pm</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.classText}>CSIT115</Text>
            <Text style={styles.classText}>27th Jun 2023</Text>
            <Text style={styles.classText}>12.00am - 3.00pm</Text>
        </View>
    </ScrollView>

   
    </ScrollView>

    <View style={styles.calendar}>
        <Calendar  style={styles.calendartest}/>
    </View> 
  
</View>

</BackgroundColor>


  );
};

const styles = StyleSheet.create({
    headingText: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        paddingTop:'20%',
        color:'white',
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
    classText: {
      color: '#1DC1B1',
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

export default TeachTimeTable;


