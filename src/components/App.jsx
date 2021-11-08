import React, { useState } from "react";

function App() {
  let now = new Date().toLocaleTimeString();

  let [time, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  // function refreshPage() {
  //   window.location.reload();
  // }

  // setInterval(refreshPage, 1000);
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>getTime</button>
    </div>
  );
}

export default App;
