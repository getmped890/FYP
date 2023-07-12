import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Teacherpage from './screens/Teacher/Teacherpage';
import Childpage from './screens/Child/Childpage';
import Guardianpage  from './screens/Guardian/Guardianpage';


export default function App() {
  
  return (
    <View style={styles.container}>
      <Teacherpage/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});