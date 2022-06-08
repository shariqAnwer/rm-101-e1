import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({ getTask }) => {
  // sample values to be replaced
  // console.log(getTask)
  let totalTask = getTask.length;
  // console.log('totalTask:', totalTask);
  let getIncTask = getTask.filter((el) => {
    return el.done !== true;
  });
  let unCompletedTask = getIncTask.length;
  // console.log('unCompletedTask', unCompletedTask);

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      <h2>TODO LIST</h2>
      <b data-testid="header-remaining-task">
        You have <span>{unCompletedTask}</span>
      </b>
      <b data-testid="header-total-task">
        of <span>{totalTask}</span> task remaining
      </b>
    </div>
  );
};

export default TaskHeader;
