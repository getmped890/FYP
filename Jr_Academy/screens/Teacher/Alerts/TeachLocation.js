import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import TeachAlerts from './TeachAlerts';
import BackgroundColor from '../../Genericscreens/BackgroundSetting/BackgroundColor';


const TeachLocation = () => {

     //use for navigating/redirect to other page
  const navigation = useNavigation();

  const BackAlert = () => {
    //navigate to GPS Page
    navigation.goBack();

  };

 return (
  <BackgroundColor>

    <View>
       <Text style={styles.backText}>Back</Text>       
        <TouchableOpacity style={styles.backButton}>
        <Ionicons name="chevron-back-outline" size={30} onPress={BackAlert}/>
      </TouchableOpacity>
    </View>
    </BackgroundColor>

 );};


 const styles = StyleSheet.create({


    backButton: {

        position: 'absolute',
        top: 80,
        left: 30,
        zIndex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    backText:{
        position: 'relative',
        top:50,
        left:30,
        fontSize:15,
      fontWeight: 'bold',
    },
  
});
  
export default TeachLocation;