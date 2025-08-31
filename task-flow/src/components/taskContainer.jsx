// TaskContainer.jsx
import { useState } from "react";
import { Header } from "./header/header";
import { TaskInput } from "./taskInput/taskInput";
import { TaskList } from "./taskList/taskList";
import { Footer } from "./footer/footer";

export const TaskContainer = () => {
  const [tasksList, setTasksList] = useState([]);

  // Ajouter une tâche
  const addTask = (title) => {
    const newTask = {
      id: tasksList.length ? tasksList[tasksList.length - 1].id + 1 : 1,
      title,
      completed: false,
    };
    setTasksList([...tasksList, newTask]);
  };

  // Modifier l'état (complétée ou non)
  const editTask = (id, completedValue) => {
    setTasksList(
      tasksList.map((task) =>
        task.id === id ? { ...task, completed: completedValue } : task
      )
    );
  };

  // Supprimer une tâche
  const deleteTask = (id) => {
    setTasksList(tasksList.filter((task) => task.id !== id));
  };

  // Calculer les tâches complétées et non complétées
  const completedTasks = tasksList.filter((task) => task.completed).length;
  const incompleteTasks = tasksList.length - completedTasks;

  return (
    <main>
      <Header />
      <TaskInput addTask={addTask} />
      <TaskList
        tasksList={tasksList}
        editTask={editTask}
        deleteTask={deleteTask}
        incompleteTasks={incompleteTasks}
      />
      <Footer completedTasks={completedTasks} />
    </main>
  );
};
