import React, { useState, useEffect } from "react";

const Bar = () => {
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);


  const handleProgress = () => {
   
    if(progress == 100){
        setProgress(0)
        setIsRunning(false)
    }
  };

 if (progress < 100 && isRunning) {
      setTimeout(() => setProgress((prev) => (prev += 1)), 50);
    }

    
  return (
    <div className="container">
      <h1>Progress Bar</h1>
      <div className="progressbar">
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            backgroundColor: "#a66cff",
            transition: "width 0.5s",
          }}
        ></div>
        <span className="progressPercent">{progress}%</span>
      </div>
      <div className="button">
      <button className="btn" onClick={()=>setIsRunning(!isRunning)}>
        Run
      </button>
      <button className="btn" onClick={handleProgress}>Reset</button>
      </div>
    </div>
  );
};

export default Bar;
