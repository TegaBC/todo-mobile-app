
import { Pressable, StyleSheet, Text, View, Alert } from 'react-native';

export default function AddTask() {
  
    const createNewTask = () => {
        console.log("Started new task flow")
    }
  
    return (
      <Pressable onPress={createNewTask} style={styles.container}>
        <View style={styles.taskInfoHolder}>
          <Text style={{fontSize: 25, color: '#d1d5db'}}>+</Text>
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