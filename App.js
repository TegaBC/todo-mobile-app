import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AddTask from './components/AddTask';
import Constants from 'expo-constants';
import Task from './components/Task'

export default function App() {
  const [allTasks, setAllTasks] = useState([])

  const onTaskAdd = (taskText) => {
    if (taskText.length == 0) return

    console.log("Adding task.")
    console.log(allTasks)
    setAllTasks([taskText , ...allTasks])
  }

  const onTaskRemove = (taskIndex) => {
    const currentTasks = [...allTasks]
    currentTasks.splice(taskIndex, 1)
    setAllTasks(currentTasks)

  }

  return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Tasks</Text>
        {allTasks.map((task, index) => <Task key={index} taskText={task} onTaskRemove={onTaskRemove} id={index} /> )}
        <AddTask onTaskAdd={onTaskAdd} />
        <StatusBar style="dark" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight + 20,
    alignItems: 'center'
  },
  titleText: {
    fontWeight: '600',
    fontSize: 20,
  }
});
