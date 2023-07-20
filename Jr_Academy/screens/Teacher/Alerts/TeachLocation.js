import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import BackgroundColor from '../../Genericscreens/BackgroundSetting/BackgroundColor';
import MapView, { Marker } from 'react-native-maps';

const TeachLocation = () => {
  //use for navigating/redirect to other page
  const navigation = useNavigation();

  const BackAlert = () => {
    //navigate to GPS Page
    navigation.goBack();
  };

  return (
    <BackgroundColor>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 3.1537,
          longitude: 101.7143,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: 3.1537, longitude: 101.7143 }}
        />
      </MapView>

      <View style={styles.backButtonContainer}>
        <TouchableOpacity style={styles.backButton} onPress={BackAlert}>
          <Ionicons name="chevron-back-outline" size={30} />
        </TouchableOpacity>
        <Text style={styles.backText}>Back</Text>
      </View>
    </BackgroundColor>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  backButtonContainer: {
    position: 'absolute',
    top: 50,
    left: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  backText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default TeachLocation;
