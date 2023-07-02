import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Teacherpage from './screens/Teacher/Teacherpage';
import MainStack from './navi/navigation';

export default function App() {
  
  return (
    // <View>
      /* <Teacherpage /> */
      <MainStack/>
      /* <StatusBar style="auto" /> */
    // </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
