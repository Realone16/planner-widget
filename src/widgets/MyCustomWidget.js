import React, { useEffect, useState } from 'react'
 
export default function MyCustomWidget() {
  const [stopwatchData, setStopwatchData] = useState([
    { id: 0, name: "Stopwatch", time: 0, isRunning: false, lap: [], time_started: 0, pause: [] },
   ])
   const [selectedRow, setSelectedRow] = useState(0)
   useEffect(() => {
    const interval = setInterval(() => {
     setStopwatchData(stopwatchData.map((stopwatch) => {
      if (stopwatch.isRunning) {
       return { ...stopwatch, time: new Date() - stopwatch.time_started - stopwatch.pause.reduce((a, b) => a + b, 0) }
      }
      return stopwatch
     }))
    }, 10)
    return () => clearInterval(interval)
   }, [stopwatchData])
   const handleStart = (id) => {
    setStopwatchData(stopwatchData.map((stopwatch) => {
     if (stopwatch.id === id) {
      return { ...stopwatch, isRunning: true, time_started: new Date() - stopwatch.time - stopwatch.pause.reduce((a, b) => a + b, 0) }
     }
     return stopwatch
    }))
   }
   
   const handleStop = (id) => {
    setStopwatchData(stopwatchData.map((stopwatch) => {
     if (stopwatch.id === id) {
      return { ...stopwatch, isRunning: false, pause: [...stopwatch.pause, new Date() - stopwatch.time_started - stopwatch.pause.reduce((a, b) => a + b, 0)] }
     }
     return stopwatch
    }))
   }
   
   const handleReset = (id) => {
    setStopwatchData(stopwatchData.map((stopwatch) => {
     if (stopwatch.id === id) {
      return { ...stopwatch, time: 0, isRunning: false, lap: [] }
     }
     return stopwatch
    }))
   }
   
   const handleLap = (id) => {
    setStopwatchData(stopwatchData.map((stopwatch) => {
     if (stopwatch.id === id) {
      return { ...stopwatch, lap: [...stopwatch.lap, stopwatch.time] }
     }
     return stopwatch
    }))
   }
  return (
    <div >
      {stopwatchData.map((stopwatch) => (
      <div className="stopwatchContainer" key={stopwatch.id} style={{ cursor: "pointer" }} onClick={() => {
       setSelectedRow(stopwatch.id)
      }}>
       <div className="stopwatchName">
        <input className='name-label' value={stopwatch.name} onChange={(e) => {
         setStopwatchData(stopwatchData.map((stopwatchItem) => {
          if (stopwatchItem.id === stopwatch.id) {
           return { ...stopwatchItem, name: e.target.value }
          }
          return stopwatchItem
         }))
        }} />
       </div>
       <div className="stopwatchTime">
        <p className='time-label'>{new Date(stopwatch.time).toISOString().slice(11, -1)}</p>
        <p>{stopwatch.lap.length} laps</p>
       </div>
       <div className="stopwatchButtons">
        <button className={"control-buttons"} onClick={() => handleStart(stopwatch.id)}>Start</button>
        <button className={"control-buttons"} onClick={() => handleLap(stopwatch.id)}>Lap</button>
        <button className={"control-buttons"} onClick={() => handleStop(stopwatch.id)}>Stop</button>
        <button className={"control-buttons"} onClick={() => handleReset(stopwatch.id)}>Reset</button>
       </div>
      </div>
     ))}
     </div>
  )
}