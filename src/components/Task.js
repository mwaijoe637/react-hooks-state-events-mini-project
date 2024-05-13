import React from "react";

function Task({ task, onDelete }) {
  // Handle case when task is undefined
  if (!task) {
    return null;
  }

  return (
    <div className="task">
      {/* Check if task.category exists before accessing it */}
      <div className="label">{task.category}</div>
      {/* Check if task.text exists before accessing it */}
      <div className="text">{task.text}</div>
      <button className="delete" onClick={onDelete}>X</button>
    </div>
  );
}

export default Task;
