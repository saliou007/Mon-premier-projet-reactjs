// TaskList.jsx
import { TaskItem } from "../taskItem/taskItem";
import styles from "./TaskList.module.css";

export const TaskList = ({ tasksList, editTask, deleteTask, incompleteTasks }) => {
  if (!tasksList || tasksList.length === 0) {
    return (
      <div className="box">
        <h2 className={styles.emptyState}>
          👋 Salut, tu n'as rien à faire, profite de ton temps libre !
        </h2>
      </div>
    );
  }

  return (
    <div className="box">
      <h2 className={styles.title}>
        {incompleteTasks > 0 ? (
          <>Il te reste encore <span className="important">{incompleteTasks}</span> tâche(s) à accomplir</>
        ) : (
          <>👌 Génial, tu as accompli toutes tes tâches !</>
        )}
      </h2>

      <ul className={styles.container}>
        {tasksList.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            editTask={editTask}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
};
