
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native';

export default function AddTask({ onTaskAdd }) {

    const [task, setTask] = useState('')

    const createNewTask = () => {
      onTaskAdd(task)
      setTask('')
    }
  
    return (
      <Pressable onPress={createNewTask} style={styles.container}>
        <View style={styles.taskInfoHolder}>
          <TextInput style={{fontSize: 25}} value={task} onChangeText={setTask} placeholder='+' onSubmitEditing={createNewTask}/>
  
        </View>
      </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    borderColor: '#f3f4f6',
    borderRadius: 5,
    borderWidth: 3,
    borderStyle: 'dashed',
    width: '80%',
    minHeight: 60,
    marginTop: 10,
    padding: 10.
  },
  taskInfoHolder : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },  

})