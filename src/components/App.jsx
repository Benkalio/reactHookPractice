import React, { useEffect, useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString();

  function refreshPage() {
    window.location.reload();
  }
  setInterval(refreshPage, 1000);
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={refreshPage}>getTime</button>
    </div>
  );
}

export default App;
