import React from "react";

function App() {
  const name = "Shanmukh";
  const department = "CSE";
  const year = "3rd Year";
  const section = "A";

  return (
    <div>
      <h1>Student Profile</h1>
      <h2>{name}</h2>
      <p>Department: {department}</p>
      <p>Year: {year}</p>
      <p>Section: {section}</p>
    </div>
  );
}

export default App;