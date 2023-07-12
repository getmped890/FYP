import React, { useState, useLayoutEffect } from 'react';
import { View, TouchableOpacity, Switch, StyleSheet, Text, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const SASetting = () => {

    const navigation = useNavigation();
    const handleLogoutButtonClick = () => {
        navigation.navigate('Login');
    };

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View>
            <TouchableOpacity style={styles.endClassButton} onPress={handleLogoutButtonClick}>
                <Ionicons name="log-out-outline" size={35} />
            </TouchableOpacity>
            <Text style={styles.LogoutText}>Logout</Text>
            <Text style={styles.headertext}>Allow Notification for</Text>
            
            <View style={styles.switchContainer}>
                <View style={styles.rowContainer}>
                    <Text style={styles.notificationtext}>Emergency</Text>
                    <Switch
                        style={styles.notificationswitch}
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isEnabled ? '#81b0ff' : '#81b0ff'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
                <View style={styles.rowContainer}>
                    <Text style={styles.notificationtext}>Child's dimissal timing</Text>
                    <Switch
                        style={styles.notificationswitch}
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isEnabled ? '#81b0ff' : '#81b0ff'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
                <View style={styles.rowContainer}>
                    <Text style={styles.notificationtext}>Child's attendance status</Text>
                    <Switch
                        style={styles.notificationswitch}
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isEnabled ? '#81b0ff' : '#81b0ff'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>


            </View>
            
        </View>
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
    LogoutText: {
        position: 'relative',
        top: 30,
        left: 280,
        fontSize: 20,
        fontWeight: 'bold',
    },
    headertext: {
        position: 'relative',
        fontSize: 20,
        top: 150,
        fontWeight: 'bold',
        marginBottom: 10,
        paddingHorizontal: 8
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        paddingHorizontal: 8,
    },
    notificationswitch: {
        marginLeft: 'auto',
    },
    notificationtext: {
        marginRight: 8,
    },
    switchContainer:{
        paddingTop:190,
        paddingLeft:20,
    }
});

export default SASetting;
