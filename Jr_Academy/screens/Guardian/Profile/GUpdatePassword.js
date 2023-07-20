import React, { useLayoutEffect } from 'react';
import { View,  TextInput, StyleSheet, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UpdatePassword = () => {
  
  const navigation = useNavigation();

  const handleCancelButtonClick = () => {
    navigation.navigate('Profile');
  };

  const handleSubmitButtonClick = () => {
    navigation.navigate('Profile');
  };

  // Use useLayoutEffect to set the options for hiding the header
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

 
  
});

export default UpdatePassword;
