// src/components/TaskItem.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TaskItem = ({ task, onRemove, onComplete }) => {
  return (
    <View style={[styles.taskContainer, task.completed && styles.completed]}>
      <Text style={[styles.taskText, task.completed && styles.completedText]}>
        {task.value}
      </Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => onComplete(task.id)}>
          <Text style={styles.buttonText}>☑</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => onRemove(task.id)}>
          <Text style={styles.buttonText}>x</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  completed: {
    backgroundColor: '#d3ffd3', // Cor de fundo para tarefas concluídas
    borderColor: '#8bc34a', // Cor da borda para tarefas concluídas
  },
  taskText: {
    fontSize: 16,
    color: '#333',
  },
  completedText: {
    textDecorationLine: 'line-through', // Linha através do texto para tarefas concluídas
    color: '#888',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    padding: 10,
    marginLeft: 5,
  },
  buttonText: {
    fontSize: 18,
  },
});

export default TaskItem;
