import React, { useState, useLayoutEffect } from 'react';
import { View, TextInput, StyleSheet, Text, Button} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import BackgroundColor from '../../Genericscreens/BackgroundSetting/BackgroundColor';

const SAUpdateProfile = () => {
  const navigation = useNavigation();

  const handleCancelButtonClick = () => {
    navigation.navigate('SAManageProfile');
  };

  const handleSubmitButtonClick = () => {
    navigation.navigate('SAManageProfile');
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

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
        <View style={styles.inputContainer}>
          <Text style={styles.label}>User Id:</Text>
          <TextInput style={styles.textInput} value="100" editable={false} />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username:</Text>
          <TextInput style={styles.textInput} value="james34" editable={true} />
        </View>

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

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.textInput}
            value="Japit34@gmail.com"
            editable={true}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Status:</Text>
          <View style={styles.pickerstyle}>

          <Picker
            selectedValue={status}
            onValueChange={(value) => handleStatusChange(value)}
            style={styles.picker}
          >
            <Picker.Item label="Active" value="active" />
            <Picker.Item label="Inactive" value="inactive" />
          </Picker>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title="Update"
            onPress={handleSubmitButtonClick}
            color="black"
          />
          <Button
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
  picker: {

  },
  pickerstyle:{
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 5,
    

  }
});

export default SAUpdateProfile;
