import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Location = () => {

     //use for navigating/redirect to other page
  const navigation = useNavigation();

  const checkGPS = () => {
    //navigate to GPS Page
    navigation.navigate('Alerts');
  };

 return (
    <View>
        <Text>
        Button Return
        </Text>
    </View>
 );


};

export default Location;