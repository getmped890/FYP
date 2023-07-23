import React, {  useLayoutEffect } from 'react';
import { View, TextInput, StyleSheet, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackgroundColor from '../../Genericscreens/BackgroundSetting/BackgroundColor';
const UpdateProfile = () => {
  
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
    <BackgroundColor>
    <View style={styles.container}>
       <View style={styles.inputContainer}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.textInput}
          value="James Milner"
          editable={false}
        />
      </View>

      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Address:</Text>
        <TextInput
          style={styles.textInput}
          value="45 yishun kim"
          editable={false}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.textInput}
          value="jdf@gmail.com"
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

export default UpdateProfile;
