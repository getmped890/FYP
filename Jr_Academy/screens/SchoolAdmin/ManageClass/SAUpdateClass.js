import React, { useState, useLayoutEffect } from 'react';
import { View, TouchableOpacity, TextInput, StyleSheet, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackgroundColor from '../../Genericscreens/BackgroundSetting/BackgroundColor';


const SAUpdateClass = () => {
  
  const navigation = useNavigation();

  const handleCancelButtonClick = () => {
    navigation.navigate('SAManageClass');
  };

  const handleSubmitButtonClick = () => {
    navigation.navigate('SAManageClass');
  };

  // Use useLayoutEffect to set the options for hiding the header
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <BackgroundColor>
    <View style={styles.container}>

    <View style={styles.inputContainer}>
        <Text style={styles.label}>Class Id:</Text>
        <TextInput
          style={styles.textInput}
          value="100"
          editable={false}
        />
      </View>

       <View style={styles.inputContainer}>
        <Text style={styles.label}>Class Name:</Text>
        <TextInput
          style={styles.textInput}
          value="CSIT801"
          editable={true}
        />
      </View>

      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Venue:</Text>
        <TextInput
          style={styles.textInput}
          value="Room 901"
          editable={true}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Teacher:</Text>
        <TextInput
          style={styles.textInput}
          value="Mr Japit"
          editable={true}
        />
      </View>

     

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Contact:</Text>
        <TextInput
          style={styles.textInput}
          value="91234567"
          editable={true}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Update"
          onPress={handleSubmitButtonClick}
          color="black"
          style={styles.submitbutton}
        />
        <Button
          title="Cancel"
          onPress={handleCancelButtonClick}
          color="black"
          style={styles.cancelbutton}
        />
      </View>
    </View>
    </BackgroundColor>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 180,
    position: 'relative',
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
    marginRight: 20, 
  },

  
});

export default SAUpdateClass;
