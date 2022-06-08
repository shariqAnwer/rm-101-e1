import React from "react";

import styles from "./taskApp.module.css";

import { TaskHeader } from "./TaskHeader";
import { AddTask } from "./AddTask";
// import { Tasks } from "./Tasks/Tasks";

const TaskApp = () => {
  // NOTE: do not delete `data-testid` key value pair
  return (
    <>
      <div data-testid="task-app" className={styles.taskApp}>
        <h2>Todo List</h2>
        <TaskHeader />
      </div>
      <AddTask />
      {/* <Tasks /> */}
    </>
  );
};

export default TaskApp;
