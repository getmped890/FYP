import React, { useState} from 'react';
import { View, TouchableOpacity, Switch, StyleSheet, Text, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import BackgroundColor from '../../Genericscreens/BackgroundSetting/BackgroundColor';



const CCASetting = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const navigation = useNavigation();

    const handleManageProfileClick = () => {
      navigation.navigate('CCAProfile'); 
    };

    const handleLogoutButtonClick = () => {
      
      navigation.navigate('Login');
    };
    
    return (
      <BackgroundColor>


        <View>

      <TouchableOpacity style={styles.endClassButton} onPress={handleLogoutButtonClick}>
        <Ionicons name="log-out-outline" size={35} />
      </TouchableOpacity>
      {/* <Text style={styles.LogoutText}>Logout</Text> */}
      <Text style={styles.headertext}>Allow Notification for</Text>  
      <Text style={styles.notificationtext}>Emergency</Text>  

      <Switch 
      style={styles.notificationswitch}
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#81b0ff' : '#81b0ff'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />

        <View style={styles.saveButton}>
          <Button   color="black" title="Manage Profile" onPress={handleManageProfileClick}/>

        </View>
  </View>

  </BackgroundColor>

    );
};


const styles = StyleSheet.create({


    endClassButton: {

        position: 'absolute',
        top: 60,
        right: 30,
        zIndex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    LogoutText:{
        position: 'relative',
        top:30,
        left: 280,
        fontSize:20,
      fontWeight: 'bold',
    },
  
    headertext: {
        position: 'relative',
        fontSize: 25,
        top: 150,
        fontWeight: 'bold',
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingBottom: '5%',
        color: 'white',
      },

      notificationswitch: {
 
        flex: 1, 
        flexDirection: 'column', 
        justifyContent: 'center',
        paddingTop: 370,
        right:20,

      },

      notificationtext: {
        top: 197,
        left:30,
        color: 'white',
        fontWeight:'bold',
        fontSize:22,

      },

     

      saveButton:{
        marginTop: -90,
        paddingLeft: '13%',
        maxWidth:'85%',
      },
  
  });
  
export default CCASetting;
