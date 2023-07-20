import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import {Calendar} from 'react-native-calendars';
import BackgroundColor from '../../Genericscreens/BackgroundSetting/BackgroundColor';


const ChildTimeTable = () => {
  //use for navigating/redirect to other page
  const navigation = useNavigation();

  return (
<BackgroundColor>

<View>
<ScrollView style={styles.container}>
    <Text style={styles.headingText}>Weekly Timetable</Text>
    <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
              <Text style={styles.classText}>Monday</Text> 
        </View>
        <View style={[styles.card, styles.cardElevated]}>
              <Text style={styles.classText}>Tuesday</Text> 
        </View>
        <View style={[styles.card, styles.cardElevated]}>
              <Text style={styles.classText}>Wednesday</Text> 
        </View>
        <View style={[styles.card, styles.cardElevated]}>
              <Text style={styles.classText}>Thursday</Text> 
        </View>
        <View style={[styles.card, styles.cardElevated]}>
              <Text style={styles.classText}>Friday</Text> 
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

export default ChildTimeTable;


