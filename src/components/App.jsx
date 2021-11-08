import React from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  function refreshPage() {
    window.location.reload();
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button>Get Time</button>
    </div>
  );
}

export default App;
