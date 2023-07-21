import React, { useState, useLayoutEffect } from 'react';
import { View, TouchableOpacity, TextInput, StyleSheet, Text, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
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

  const formTeacherOptions = [
    'Mr Japit',
    'Relieve Teacher 1',
    'Relieve Teacher 2',
    'Relieve Teacher 3',
  ];

  const venueOptions = Array.from({ length: 20 }, (_, i) => `Room ${i + 1}`);

  const [selectedFormTeacher, setSelectedFormTeacher] = useState(formTeacherOptions[0]);
  const [selectedVenue, setSelectedVenue] = useState(venueOptions[0]);

  return (
    <BackgroundColor>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Class Id:</Text>
          <TextInput style={styles.textInput} value="100" editable={false} />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Class Name:</Text>
          <TextInput style={styles.textInput} value="Math" editable={false} />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Venue:</Text>
          <Picker
            selectedValue={selectedVenue}
            onValueChange={(itemValue) => setSelectedVenue(itemValue)}
          >
            {venueOptions.map((venue) => (
              <Picker.Item key={venue} label={venue} value={venue} />
            ))}
          </Picker>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Form Teacher:</Text>
          <Picker
            selectedValue={selectedFormTeacher}
            onValueChange={(itemValue) => setSelectedFormTeacher(itemValue)}
          >
            {formTeacherOptions.map((teacher) => (
              <Picker.Item key={teacher} label={teacher} value={teacher} />
            ))}
          </Picker>
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Update" onPress={handleSubmitButtonClick} color="black" />
          <Button title="Cancel" onPress={handleCancelButtonClick} color="black" />
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
