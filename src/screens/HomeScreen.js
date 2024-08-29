// src/screens/HomeScreen.js
import React, { useState } from 'react';
import { View, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import TaskInput from '../components/TaskInput';
import TaskItem from '../components/TaskItem';

const HomeScreen = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Math.random().toString(), value: task, completed: false }
    ]);
  };

  const handleRemoveTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter(task => task.id !== taskId));
  };

  const handleCompleteTask = (taskId) => {
    setTasks((prevTasks) => 
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TaskInput onAddTask={handleAddTask} />
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onRemove={handleRemoveTask}
            onComplete={handleCompleteTask}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});

export default HomeScreen;
