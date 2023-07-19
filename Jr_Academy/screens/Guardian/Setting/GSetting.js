import React, { useState, useLayoutEffect } from 'react';
import { View, TouchableOpacity, Switch, StyleSheet, Text, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Setting = () => {
    const navigation = useNavigation();

    const handleLogoutButtonClick = () => {
        navigation.navigate('Login');
    };

    const [emergencyEnabled, setEmergencyEnabled] = useState(false);
    const [dismissalTimingEnabled, setDismissalTimingEnabled] = useState(false);
    const [attendanceStatusEnabled, setAttendanceStatusEnabled] = useState(false);

    const emergencySwitch = () => setEmergencyEnabled(previousState => !previousState);
    const dismissalSwitch = () => setDismissalTimingEnabled(previousState => !previousState);
    const attendanceSwitch = () => setAttendanceStatusEnabled(previousState => !previousState);

    return (
        <View style={styles.background}> 
            <TouchableOpacity style={styles.endClassButton} onPress={handleLogoutButtonClick}>
                <Ionicons name="log-out-outline" size={35} />
            </TouchableOpacity>
            <Text style={styles.headertext}>Allow Notification for</Text>
            
            <View style={styles.switchContainer}>
                <View style={styles.rowContainer}>
                    <Text style={styles.notificationtext}>Emergency</Text>
                    <Switch
                        style={styles.notificationswitch}
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={emergencyEnabled ? '#81b0ff' : '#81b0ff'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={emergencySwitch}
                        value={emergencyEnabled}
                    />
                </View>
                <View style={styles.rowContainer}>
                    <Text style={styles.notificationtext}>Child's dimissal timing</Text>
                    <Switch
                        style={styles.notificationswitch}
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={dismissalTimingEnabled ? '#81b0ff' : '#81b0ff'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={dismissalSwitch}
                        value={dismissalTimingEnabled}
                    />
                </View>
                <View style={styles.rowContainer}>
                    <Text style={styles.notificationtext}>Child's attendance status</Text>
                    <Switch
                        style={styles.notificationswitch}
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={attendanceStatusEnabled ? '#81b0ff' : '#81b0ff'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={attendanceSwitch}
                        value={attendanceStatusEnabled}
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
        color:'white',
    },
    headertext: {
        position: 'relative',
        fontSize: 25,
        top: 150,
        fontWeight: 'bold',
        marginBottom: 10,
        paddingHorizontal: 8,
        color:'white',
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
        fontSize:15,
    },
    switchContainer:{
        paddingTop:190,
        paddingLeft:20,
    },
    background: {
        flex: 1,
        backgroundColor: '#B3EAE5',
    },
});

export default Setting;
