import React, { useState,useEffect } from 'react'

const Bar = () => {
    const [progress,setProgress] = useState(0)
    const[isRunning,setIsRunning ] = useState(false)

    useEffect(()=>{
if(progress < 100 && isRunning){
      setTimeout(()=>
        setProgress(prev => prev += 1),50)
}
    },[progress,isRunning])
  return (
    <div className='container'>
    <h1>Progress Bar</h1>
    <div className="progressbar">
        <div style={{
            height: "100%",
            width: `${progress}%`,
            backgroundColor: "#a66cff",
            transition:"width 0.5s"
        }}></div>
        <span className="progressPercent">{progress }%</span>
    </div>
    <button className="btn" onClick={() => {setIsRunning(true)}}>Run</button>
    {/* <button className="btn" onClick={() => {setProgress(0)}}>Reset</button> */}
</div>
  )
}

export default Bar