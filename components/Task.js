
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Task( { taskText, onTaskRemove, id } ) {
  return (
      <Pressable onPress={() => {onTaskRemove(id)}} style={styles.container}>
        <View style={styles.taskInfoHolder}>
          <View style={styles.taskIcon}></View>
          <Text style={{fontSize: 15}}>{taskText}</Text>
        </View>
      </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flexWrap: 'wrap',
    backgroundColor: '#f3f4f6',
    padding: 10,
    borderRadius: 5,
    width: '80%',
    minHeight: 60,
    marginTop: 10,
  },
  taskInfoHolder : {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },  
  taskIcon: {
    width: 20,
    height: 20,
    borderRadius: 4,
    backgroundColor: '#d1d5db',
    marginRight: 10
  }
})