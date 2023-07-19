import React from 'react';
import {Alert, View, Text , TextInput, Button, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackgroundColor from '../../Genericscreens/BackgroundSetting/BackgroundColor';


const SARegisterProfile = () => {

  const navigation = useNavigation();
  const SARegisterSubmitButtonClick = () => {
    Alert.alert('New User Created!');
  };

  const SACancelButton = () => {
    navigation.navigate('Home');
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
          secureTextEntry
        />
        
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.textInput}
          secureTextEntry
        />
        <Text style={styles.label}>Contact:</Text>
        <TextInput
          style={styles.textInput}
          secureTextEntry
        />
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
});

export default SARegisterProfile;