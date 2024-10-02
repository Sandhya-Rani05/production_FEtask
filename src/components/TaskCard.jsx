// import React from 'react';
// import './TaskCard.css'; // Optional for styling

// const TaskCard = ({ task }) => {
//   return (
//     <div className="task-card">
//       <div className="task-header">
//         <h3>{task.title}</h3>
//         <span className="task-id">{task.id}</span>
//       </div>
//       <p className="task-description">{task.description}</p>
//       <div className="task-footer">
//         <div className="task-type">
//           <span> {task.type}</span>
//         </div>
//         <div className="task-avatar">
//           <img src={task.avatar} alt="User Avatar" className="avatar-img" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TaskCard;


// src/TaskCard.js
import React from 'react';
import './TaskCard.css';

const TaskCard = ({ task }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      <div className="task-card">
        {/* Avatar in the top-right corner */}
        <div className="task-avatar">
          <img src={task.image} alt="User" className="avatar-img" />
        </div>

        {/* Task ID and Title */}
        <div className="task-id">{task.id}</div>
        <div className="task-title">{task.title}</div>

        {/* Task Type with an icon */}
        <div className="task-type">
          <span className="type-indicator">
            <img src='./icons_FEtask/3 dot menu.svg' alt='img' />
          </span>
          <span className="type-text">{task.tag}</span>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
