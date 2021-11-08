import React from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  function refreshPage() {
    window.location.reload();
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={refreshPage}>getTime</button>
    </div>
  );
}

export default App;
