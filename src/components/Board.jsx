import React, { useState, useEffect } from "react";
import Column from "./Column";
import "./Board.css"; // Optional for styling

const statusIcons = {
  Backlog: "/icons_FEtask/Backlog.svg",
  Todo: "/icons_FEtask/To-do.svg",
  InProgress: "/icons_FEtask/in-progress.svg",
  Done: "/icons_FEtask/Done.svg",
  Canceled: "/icons_FEtask/Cancelled.svg",
};

const Board = () => {
  const [groupBy, setGroupBy] = useState("status"); // Default: group by status
  const [sortBy, setSortBy] = useState("priority"); // Default: sort by priority
  const [showDisplayMenu, setShowDisplayMenu] = useState(false); // Toggle for the Display menu
  const [showGroupByOptions, setShowGroupByOptions] = useState(false); // Toggle for Group By options
  const [showSortByOptions, setShowSortByOptions] = useState(false); // Toggle for Sort By options

  const [tasks, setTasks] = useState([
    {
      id: "CAM-7",
      title: "Create Onboarding Tutorial for New Users",
      tag: ["Feature Request"],
      userId: "usr-1",
      status: "Backlog",
      priority: "Medium",
    },
    {
      id: "CAM-10",
      title: "Conduct Security Vulnerability Assessment",
      tag: ["Feature Request"],
      userId: "usr-4",
      status: "Backlog",
      priority: "Low",
    },
    {
      id: "CAM-1",
      title: "Update User Profile Page UI",
      priority: "Urgent",
      userId: "usr-1",
      status: "Todo",
      tag: "Feature request",
    },
    {
      id: "CAM-6",
      title: "Third-Party Payment Gateway",
      tag: ["Feature Request"],
      userId: "usr-2",
      status: "Todo",
      priority: "Low",
    },
    {
      id: "CAM-9",
      title: "Upgrade Server Infrastructure",
      tag: ["Feature Request"],
      userId: "usr-5",
      status: "Todo",
      priority: "Medium",
    },
    {
      id: "CAM-2",
      title: "Add Multi-Language Support - Enable multi-language support within the application.",
      tag: ["Feature Request"],
      userId: "usr-2",
      status: "InProgress",
      priority: "High",
    },
    {
      id: "CAM-3",
      title: "Optimize Database Queries for Performance",
      tag: ["Feature Request"],
      userId: "usr-2",
      status: "InProgress",
      priority: "Low",
    },
    {
      id: "CAM-4",
      title: "Implement Email Notification System",
      tag: ["Feature Request"],
      userId: "usr-1",
      status: "InProgress",
      priority: "High",
    },
    {
      id: "CAM-5",
      title: "Enhance Search Functionality",
      tag: ["Feature Request"],
      userId: "usr-5",
      status: "InProgress",
      priority: "No priority",
    },
    {
      id: "CAM-8",
      title: "Another Task",
      userId: "usr-3",
      status: "Done",
      priority: "Medium",
    },
    {
      id: "CAM-9",
      title: "Yet Another Task",
      userId: "usr-4",
      status: "Canceled",
      priority: "Low",
    },
  ]);

  const users = [
    { id: "usr-1", name: "Anoop Sharma", available: false },
    { id: "usr-2", name: "Yogesh", available: true },
    { id: "usr-3", name: "Shankar Kumar", available: true },
    { id: "usr-4", name: "Ramesh", available: true },
    { id: "usr-5", name: "Suresh", available: true },
  ];

  // Get saved view from localStorage
  useEffect(() => {
    const savedGroupBy = localStorage.getItem("groupBy");
    const savedSortBy = localStorage.getItem("sortBy");
    if (savedGroupBy) setGroupBy(savedGroupBy);
    if (savedSortBy) setSortBy(savedSortBy);
  }, []);

  // Save view to localStorage
  useEffect(() => {
    localStorage.setItem("groupBy", groupBy);
    localStorage.setItem("sortBy", sortBy);
  }, [groupBy, sortBy]);

  // Group tasks by selected grouping option (status, user, priority)
  const groupedTasks = tasks.reduce((acc, task) => {
    const key =
      groupBy === "status"
        ? task.status
        : groupBy === "user"
        ? task.userId
        : task.priority;
    if (!acc[key]) acc[key] = [];
    acc[key].push(task);
    return acc;
  }, {});

  // Sorting function (priority or title)
  Object.keys(groupedTasks).forEach((group) => {
    groupedTasks[group].sort((a, b) => {
      if (sortBy === "priority") return b.priority - a.priority;
      if (sortBy === "title") return a.title.localeCompare(b.title);
      return 0;
    });
  });

  return (
    <div className="kanban-board">
      <div className="board-header">
        {/* Display Button */}
        <button
          className="display-button"
          onClick={() => setShowDisplayMenu(!showDisplayMenu)}
        >
          Display
        </button>

        {/* Conditional rendering of the Display menu */}
        {showDisplayMenu && (
          <div className="display-menu">
            <div
              className="display-option"
              onClick={() => setShowGroupByOptions(!showGroupByOptions)}
            >
              Group By
            </div>
            {showGroupByOptions && (
              <select
                onChange={(e) => setGroupBy(e.target.value)}
                value={groupBy}
              >
                <option value="status">Group by Status</option>
                <option value="user">Group by User</option>
                <option value="priority">Group by Priority</option>
              </select>
            )}

            <div
              className="display-option"
              onClick={() => setShowSortByOptions(!showSortByOptions)}
            >
              Sort By
            </div>
            {showSortByOptions && (
              <select
                onChange={(e) => setSortBy(e.target.value)}
                value={sortBy}
              >
                <option value="priority">Sort by Priority</option>
                <option value="title">Sort by Title</option>
              </select>
            )}
          </div>
        )}
      </div>

      {/* Kanban board columns */}
      <div className="kanban-columns">
        {Object.keys(groupedTasks).map((group) => {
          const user = users.find((u) => u.id === group);

          return (
            <Column
              key={group}
              name={groupBy === "user" ? user.name : group}
              tasks={groupedTasks[group]}
              icon={statusIcons[group]} // Pass the appropriate icon to the column
            />
          );
        })}
      </div>
    </div>
  );
};

export default Board;
