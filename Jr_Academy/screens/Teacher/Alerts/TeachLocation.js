import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import BackgroundColor from '../../Genericscreens/BackgroundSetting/BackgroundColor';
import MapView, { Marker } from 'react-native-maps';

const GLocation = () => {
  //use for navigating/redirect to other page
  const navigation = useNavigation();

  const BackAlert = () => {
    //navigate to GPS Page
    navigation.goBack();
  };

  return (
    <BackgroundColor>
      

      {/* map view for child location tracking  */}
      <MapView
        style={styles.map}
        initialRegion={{
            latitude: 3.1537,
            longitude: 101.7143,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,

        }}
      >

        
        <View>
        <Text style={styles.backText}>Back</Text>
        <TouchableOpacity style={styles.backButton} onPress={BackAlert}>
          <Ionicons name="chevron-back-outline" size={30} />
        </TouchableOpacity>
      


        <Marker
          coordinate={{ latitude: 3.1537,
            longitude: 101.7143,}}  />

</View>
      </MapView>
    </BackgroundColor>
  );
};

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    top: 80,
    left: 30,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backText: {
    position: 'relative',
    top: 50,
    left: 30,
    fontSize: 15,
    fontWeight: 'bold',
  },
  map: {
    flex: 1,
  },
});

export default GLocation;
