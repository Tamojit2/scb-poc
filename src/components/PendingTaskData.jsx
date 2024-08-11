import React, { useState } from "react";
import "../css/PendingTask.css";
import { pendingtData } from "./sampleData";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const PendingTaskData = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentPendingTasks, setCurrentPendingTasks] = useState(pendingtData);
  const tasksPerPage = 3; // Number of tasks to show per page
  const totalPage = Math.ceil(pendingtData?.length / tasksPerPage);

  const handleNextClick = () => {
    const nextPage = Math.min(
      currentPage + 1,
      Math.ceil(currentPendingTasks.length / tasksPerPage) - 1
    );
    setCurrentPage(nextPage);
  };

  const handlePreviousClick = () => {
    const prevPage = Math.max(currentPage - 1, 0);
    setCurrentPage(prevPage);
  };

  const changeTab = (newTabId) => {
    setActiveTab(newTabId);
  };

  const getVisibleTasks = () => {
    const startIndex = currentPage * tasksPerPage;
    const endIndex = Math.min(
      startIndex + tasksPerPage,
      currentPendingTasks.length
    );
    return currentPendingTasks.slice(startIndex, endIndex);
  };

  return (
    <div className="pending-tasks-container">
      {activeTab === 0 && (
        <>
          <div className="tasks">
            {getVisibleTasks()?.map((task) => {
              return (
                <TaskCard
                  key={task.id}
                  title={task.description}
                  count={task.total}
                  details={task.details}
                />
              );
            })}
          </div>
          
          <div className="pagination">
            <button
              className="pagination-button-prev"
              disabled={currentPage === 0}
              onClick={handlePreviousClick}
            >
              <ArrowBackIosNewOutlinedIcon />
            </button>
            <button
              className="pagination-button-next"
              disabled={
                currentPage ===
                Math.ceil(currentPendingTasks.length / tasksPerPage) - 1
              }
              onClick={handleNextClick}
            >
              <ArrowForwardIosOutlinedIcon />
            </button>
          </div>
        </>
      )}
      {activeTab === 1 && <div className="tasks">No Data</div>}
    </div>
  );
};

const TaskCard = ({ title, count, details }) => {
  return (
    <div className="task-card">
      <h2>{count}</h2>
      <p>{title}</p>
      <ul>
        {details.map((detail, index) => (
          <li key={index}>
            {detail.title}: {detail.count}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PendingTaskData;



