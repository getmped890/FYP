import React, { useState } from 'react';
import {DatePicker} from 'react-native-date-picker';
import {Text, Button, View} from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';


const GenerateAlist = () => {

    const [date, setDate] = useState(new Date())

    return (
        <View>
            <Text>Select Date to view attendance list</Text>

            <DatePicker date={date} onDateChange={setDate} />
            <Button title="Search" onPress={() => setOpen(true)} />
            
        </View>
    );
};


const styles = StyleSheet.create({


  });
  
export default GenerateAlist;
