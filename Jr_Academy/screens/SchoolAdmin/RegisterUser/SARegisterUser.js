import React, { useState, useLayoutEffect } from 'react';
import {Alert, View, Text , TextInput, Button, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackgroundColor from '../../Genericscreens/BackgroundSetting/BackgroundColor';
import { Picker } from '@react-native-picker/picker';

const SARegisterProfile = () => {

  const navigation = useNavigation();
  const SARegisterSubmitButtonClick = () => {
    Alert.alert('New User Created!');
  };

  const SACancelButton = () => {
    navigation.navigate('Home');
  };

  const [role, setRole] = useState('teacher');
  const [status, setStatus] = useState('active');

  const handleRoleChange = (value) => {
    setRole(value);
  };

  const handleStatusChange = (value) => {
    setStatus(value);
  };
 
  return (
    <BackgroundColor>
    <View style={styles.container}>
      <View style={styles.background}>

        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.textInput}
          secureTextEntry
        />

        <Text style={styles.label}>Address:</Text>
        <TextInput
          style={styles.textInput}
   
        />
        
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.textInput}
        />
        <Text style={styles.label}>Contact:</Text>
        <TextInput
          style={styles.textInput}
          
        />

      <View style={styles.inputContainer}>
          <Text style={styles.label}>Role:</Text>
          <View style={styles.pickerstyle}>
          <Picker
            selectedValue={role}
            onValueChange={(value) => handleRoleChange(value)}
            style={styles.picker}
          >
            <Picker.Item label="Teacher" value="teacher" />
            <Picker.Item label="Student" value="student" />
            <Picker.Item label="CCA Coach" value="cca coach" />
            <Picker.Item label="Guardian" value="guardian" />
          </Picker>
          </View>
        </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Submit"
          onPress={SARegisterSubmitButtonClick}
          color="black"
          style={styles.submitbutton}
        />
      </View>     
      <View style={styles.buttonContainer}>
        <Button
          title="Cancel"
          onPress={SACancelButton}
          color="black"
          style={styles.submitbutton}
        />
      </View>  
              

      </View>
    </View>
    </BackgroundColor>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 150,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  textInput: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  pickerstyle:{
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 5,
    

  }
});

export default SARegisterProfile;