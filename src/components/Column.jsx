import React from 'react'; 
import TaskCard from './TaskCard';
import './Column.css'; // Optional for styling

const Column = ({ name, tasks, icon }) => {
  return (
    <div className="kanban-column">
<div className="column-header">
        {/* Render the icon next to the title */}
        <div className="column-title">
          {icon && <img src={icon} alt={name} className="status-icon" />}
          <h2>{    name}</h2>
        </div>
      </div>
       <div className="task-list">
         {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))
        ) : (
          <p>No tasks available</p>
        )}
      </div>
    </div>
  );
};

export default Column;

// Column.js
// import React from "react";
// import "./Column.css"; // Optional for styling

// const Column = ({ name, tasks, icon }) => {
//   return (
//     <div className="column">
//       <div className="column-header">
//         {/* Render the icon next to the title */}
//         <div className="column-title">
//           {icon && <img src={icon} alt={name} className="status-icon" />}
//           <h3>{name}</h3>
//         </div>
//       </div>
//       <div className="task-list">
//         {tasks.map((task) => (
//           <div key={task.id} className="task">
//             <h4>{task.title}</h4>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Column;


// Column.js
// import React from "react";
// import "./Column.css"; // Optional for styling

// const Column = ({ name, tasks, icon }) => {
//   return (
//     <div className="column">
//       <div className="column-header">
//         {/* Render the icon here */}
//         {icon && <img src={icon} alt={name} className="status-icon" />}
//         <h3>{name}</h3>
//       </div>
//       <div className="task-list">
//         {tasks.map((task) => (
//           <div key={task.id} className="task">
//             <h4>{task.title}</h4>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Column;


// const Column = ({ name, tasks }) => {
//   // Define image paths for different column names
//   const getImageForColumn = (name) => {
//     switch (name) {
//       case "Backlog":
//         return "/images/backlog.png"; // Path to the Backlog image
//       case "Todo":
//         return "/images/todo.png"; // Path to the Todo image
//       case "In Progress":
//         return "/images/in-progress.png"; // Path to the In Progress image
//       case "Done":
//         return "/images/done.png"; // Path to the Done image
//       default:
//         return "/images/default.png"; // Default image if no match
//     }
//   };

//   return (
//     <div className="column">
//       <div
//         className="column-header"
//         style={{
//           backgroundImage: `url(${getImageForColumn(name)})`,
//           backgroundSize: "contain",
//           backgroundRepeat: "no-repeat",
//           paddingLeft: "50px", // Adjust padding to make room for the image
//         }}
//       >
//         <span className="column-title">{name}</span>
//       </div>
//       <div className="task-list">
//        {tasks.length > 0 ? (
//           tasks.map((task) => (
//             <TaskCard key={task.id} task={task} />
//           ))
//         ) : (
//           <p>No tasks available</p>
//         )}
//       </div>
//     </div>
//   );
// };


// export default Column;