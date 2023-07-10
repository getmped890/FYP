import React, { useState } from 'react';
import { View, TouchableOpacity, TextInput, StyleSheet, Text, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {


  const navigation = useNavigation();

  const handlePreviousButtonClick = () => {
    navigation.navigate('HomePage');
  };

  const handleLogoutButtonClick = () => {
    navigation.navigate('Login');
  };

  const handleUpdatePasswordClick = () => {
    navigation.navigate('UpdatePassword'); // Navigate to the UpdatePassword screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handlePreviousButtonClick}>
          <Ionicons name="chevron-back-outline" size={30} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.userButton}>
          <Ionicons name="person-outline" size={30} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLogoutButtonClick}>
          <Ionicons name="log-out-outline" size={30} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.textInput}
          value="James Milner"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.textInput}
          value="********"
          secureTextEntry
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Address:</Text>
        <TextInput
          style={styles.textInput}
          value="45 yishun kim"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.textInput}
          value="jdf@gmail.com"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Student ID:</Text>
        <TextInput
          style={styles.textInput}
          value="23231"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Class Number:</Text>
        <TextInput
          style={styles.textInput}
          value="1A"
        />
      </View>

      <Button
        title="Update Password"
        onPress={handleUpdatePasswordClick}
        color="gray"
        style={styles.updateButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    padding: 10,
  },
  userButton: {
    padding: 10,
    backgroundColor: 'lightgray',
    borderRadius: 15,
  },
  icon: {
    color: 'black',
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
  updateButton: {
    marginTop: 10,
  },
});

export default Profile;
