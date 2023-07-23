import React, { useState, useLayoutEffect } from 'react';
import { View, TouchableOpacity, TextInput, StyleSheet, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackgroundColor from '../../Genericscreens/BackgroundSetting/BackgroundColor';

const ChildUpdatePassword = () => {
  
  const navigation = useNavigation();

  const handleCancelButtonClick = () => {
    navigation.navigate('ChildProfile');
  };

  const handleSubmitButtonClick = () => {
    navigation.navigate('ChildProfile');
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
        <Text style={styles.label}>Current Password:</Text>
        <TextInput
          style={styles.textInput}
          secureTextEntry
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>New Password:</Text>
        <TextInput
          style={styles.textInput}
          secureTextEntry
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Confirm New Password:</Text>
        <TextInput
          style={styles.textInput}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          style={styles.submitbutton}
          title="Update"
          onPress={handleSubmitButtonClick}
          color="black"

        />
        <Button
          style={styles.cancelbutton}
          title="Cancel"
          onPress={handleCancelButtonClick}
          color="black"

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
    paddingTop: 250,
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
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  submitbutton:{
    marginRight: 20,
  },

  cancelbutton:{
    paddingBottom: 20,

  },
  
});

export default ChildUpdatePassword;