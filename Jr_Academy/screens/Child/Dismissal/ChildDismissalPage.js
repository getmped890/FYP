import React from 'react';
import { View, Text, ScrollView, StyleSheet, } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import {Calendar} from 'react-native-calendars';
import BackgroundColor from '../../Genericscreens/BackgroundSetting/BackgroundColor';

const ChildDismissalPage = () => {
  //use for navigating/redirect to other page
  const navigation = useNavigation();

  return (
  <BackgroundColor>
<View>

<ScrollView style={styles.container}>
    <Text style={styles.headingText}>Class Dismissal Timing</Text>
    <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.sizeText}>CSIT203</Text>
            <Text style={styles.sizeText}>6.30pm</Text>
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
        position: 'relative',
        textAlign: 'center',
        top: 20,
        left: 20,
        fontSize: 20,
        fontWeight: 'bold',


    },
    sizeText:{
      fontSize:20,
    },
    card:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height: 100,
        borderRadius: 4,
        margin: 20,

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

  });

export default ChildDismissalPage;
