import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    const data = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    };

    setTasks(oldState => [...oldState, data]);
  }

  function handleToggleTaskDone(id: number) {
    //TODO - toggle task done if exists
    const updatedTasks = tasks.map(task => ({ ...task }));
    const findTask = updatedTasks.find(task => task.id === id);

    if (!findTask) return;
    findTask.done = !findTask.done;
    !findTask.done ? findTask.done = false : findTask.done = true;
    setTasks(updatedTasks);
  }

  function handleRemoveTask(id: number) {
    const updateRemovedTasks = tasks.filter(task => task.id !== id);
    setTasks(updateRemovedTasks);
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList
        tasks={tasks}
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})
