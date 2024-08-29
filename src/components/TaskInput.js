// src/components/TaskInput.js
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const TaskInput = ({ onAddTask }) => {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task.trim()) {
      onAddTask(task);
      setTask('');
    }
  };

  return (
    <View style={styles.inputContainer}>
      <View style={styles.textInputWrapper}> 
        <TextInput
          style={styles.input}
          placeholder="Adicionar Nova Tarefa"
          value={task}
          onChangeText={setTask}
        />
      </View>
      <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  ); // "textInputWrapper = Caixa de dialogo Nova Tarefa"
  // addButton = Botao adicionar
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 40, 
    marginTop:100,
    

  },
  textInputWrapper: {
    flex: 1, 
    backgroundColor: '#fff', 
    borderRadius: 5, 
    borderColor: '#fff', 
    borderWidth: 1, 
    marginRight: 10, 
  },
  input: {
    height: 40, 
    paddingHorizontal: 10, 
  },
  addButton: {
    backgroundColor: '#fff', 
    paddingHorizontal: 15, 
    paddingVertical: 10, 
    borderRadius: 5, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  buttonText: {
    color: '#000', 
    fontSize: 16, 
  },
});

export default TaskInput;
