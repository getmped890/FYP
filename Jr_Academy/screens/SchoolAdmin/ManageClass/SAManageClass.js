import React from 'react';
import { View, Text , ScrollView, Dimensions, StyleSheet} from 'react-native';
import BackgroundColor from '../../Genericscreens/BackgroundSetting/BackgroundColor';

const SAManageClass = () => {
  return (
    <BackgroundColor>
    <View style={styles.container}>
   
    </View>
    </BackgroundColor>
  );
};

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  
  },
);

export default SAManageClass;