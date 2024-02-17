import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Task from './components/Task'
import AddTask from './components/AddTask';

export default function App() {
  return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Tasks</Text>
        <Task />
        <AddTask />
        <StatusBar style="dark" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    alignItems: 'center'
  },
  titleText: {
    fontWeight: '600',
    fontSize: 20,
  }
});
