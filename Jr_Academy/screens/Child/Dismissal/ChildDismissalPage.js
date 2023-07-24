import React from 'react';
import { View, Text, ScrollView, StyleSheet,Dimensions } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import BackgroundColor from '../../Genericscreens/BackgroundSetting/BackgroundColor';

const ChildDismissalPage = () => {
  //use for navigating/redirect to other page
  const navigation = useNavigation();

  return (
  <BackgroundColor>
<View>

<ScrollView >
    <Text style={styles.headingText}>Class Dismissal Timing</Text>
    <ScrollView horizontal={true} contentContainerStyle={styles.scrollContent}>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.sizeText}>Form Class: 1A</Text>
            <Text style={styles.sizeText}>1.00pm</Text>
        </View>
    </ScrollView>
    </ScrollView>


    <Text style={styles.headingText}>CCA Notification</Text>
    <ScrollView horizontal={true} contentContainerStyle={styles.scrollContent}>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.sizeText}>BasketBall</Text>
            <Text style={styles.sizeText}>3.30pm to 6.30pm</Text>
        </View>

    </ScrollView>
  
</View>
</BackgroundColor>
  );
};
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    headingText: {
        position: 'relative',
        padding:20,
        top: 20,
        left: 20,
        fontSize: 20,
        fontWeight: 'bold',


    },
    sizeText:{
      fontSize:20,
    },
    card:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: width * 0.65,
      height: height * 0.16,
      width: width * 0.60,
      height: height * 0.15,
      borderRadius: 4,
      margin: width * 0.05,
      backgroundColor: '#FFFFFF',

    },
    cardElevated:{
        backgroundColor: 'white',
        elevation: 4,
        shadowOffset: {
            width: 1,
            height: 1
        },
    },
  
    container: {
      alignContent:'Middle'
    },
    scrollView: {
      backgroundColor: 'white',
      marginHorizontal: 20,
    },
    scrollContent: {
      alignItems: 'center',
    },
  });

export default ChildDismissalPage;
