import React from "react";

const WorkflowChart = () => {
  
  return (
    
          <div className="workflow" style={{display: 'flex', justifyContent: 'space-around', alignItems: 'flex-end' }}>
            <BarChart label="Processed by Bank" value={25} color="#3de98d" />
            <BarChart label="Rejected by Bank" value={14} color="#21adfe" />
          </div>
        
  );
};

const BarChart = ({ label, value, color }) => {
  return (
    <div className="bar-chart" style={{textAlign: 'center', position: 'relative'}}>
      <div
        className="bar"
        style={{ height: `${value * 5}px`, backgroundColor: color, textAlign: 'center', position: 'relative', width: '50px' }}
      >
        <span className="value" style={{position: 'absolute',color: 'black', fontWeight: 'bold', margin: '-18px'}}>{value}</span>
      </div>
      <div
        style={{
        //   borderBottom: "1px solid black",
          position: "absolute",
          width: "50px",
          //   top: "140px",
          bottom: "85px",
          right: "-40%",
        }}
      ></div>
      <p className="chart-label" style={{marginLeft:'-25px'}}>{label}</p>
    </div>
  );
};

export default WorkflowChart;
