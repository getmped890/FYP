import React, { useState } from 'react';
import { View, TouchableOpacity, TextInput, StyleSheet, Text, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackgroundColor from '../../Genericscreens/BackgroundSetting/BackgroundColor';

const SAUpdatePassword = () => {
  const navigation = useNavigation();

  const handleCancelButtonClick = () => {
    navigation.navigate('Settings');
  };

  const handleSubmitButtonClick = () => {

    //after user click on ok in the alert box, then only clear text box and navigate back to setting page
    Alert.alert('Password Update', 'Password updated successfully!', [{ text: 'OK', onPress: () => handleAlertOK() }]);
  };

  const handleAlertOK = () => {
    // Reset the fields to empty
    setCurrentPassword('');
    setNewPassword('');
    setConfirmNewPassword('');

    // Navigate back to the Settings page
    navigation.navigate('Settings');
  };

  // Use useState to manage the input values
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const isFormValid = () => {
    return currentPassword.trim() !== '' && newPassword.trim() !== '' && confirmNewPassword.trim() !== '';
  };

  return (
    <BackgroundColor>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Current Password:</Text>
          <TextInput
            style={styles.textInput}
            value={currentPassword}
            onChangeText={(text) => setCurrentPassword(text)}
            secureTextEntry
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>New Password:</Text>
          <TextInput
            style={styles.textInput}
            value={newPassword}
            onChangeText={(text) => setNewPassword(text)}
            secureTextEntry
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Confirm New Password:</Text>
          <TextInput
            style={styles.textInput}
            value={confirmNewPassword}
            onChangeText={(text) => setConfirmNewPassword(text)}
            secureTextEntry
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title="Update"
            onPress={handleSubmitButtonClick}
            color="black"
            style={styles.submitbutton}
            disabled={!isFormValid()} // Disable the button if all fields are not filled in
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

export default SAUpdatePassword;
