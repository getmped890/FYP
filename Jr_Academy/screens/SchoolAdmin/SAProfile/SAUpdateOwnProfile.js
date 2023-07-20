import React, { useState } from 'react';
import { View, TouchableOpacity, TextInput, StyleSheet, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackgroundColor from '../../Genericscreens/BackgroundSetting/BackgroundColor';

const SAUpdateOwnProfile = () => {
  const navigation = useNavigation();

  const handleCancelButtonClick = () => {
    navigation.navigate('SAProfile');
  };

  const handleSubmitButtonClick = () => {
    navigation.navigate('SAProfile');
  };

  // Use useState to manage the input values
  const [name, setName] = useState('James Milner');
  const [address, setAddress] = useState('45 yishun kim');
  const [email, setEmail] = useState('jdf@gmail.com');
  const [contact, setContact] = useState('91234567');

  const isFormValid = () => {
    return name.trim() !== '' && address.trim() !== '' && email.trim() !== '' && contact.trim() !== '';
  };

  return (
    <BackgroundColor>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name:</Text>
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Address:</Text>
          <TextInput
            style={styles.textInput}
            value={address}
            onChangeText={(text) => setAddress(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.textInput}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Contact:</Text>
          <TextInput
            style={styles.textInput}
            value={contact}
            onChangeText={(text) => setContact(text)}
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
  newUsertext: {
    fontSize: 20,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 180,
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

export default SAUpdateOwnProfile;
