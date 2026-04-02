import React from "react";

// Child Component (Reusable Card)
function StudentCard(props) {
  return (
    <div style={{
      border: "1px solid black",
      padding: "10px",
      margin: "10px",
      width: "200px"
    }}>
      <h3>{props.name}</h3>
      <p>Department: {props.department}</p>
      <p>Marks: {props.marks}</p>
    </div>
  );
}

// Parent Component
function App() {
  return (
    <div>
      <h1>Student Cards</h1>

      <StudentCard name="Shanmukh" department="CSE" marks="85" />
      <StudentCard name="Ravi" department="ECE" marks="78" />
      <StudentCard name="Anjali" department="IT" marks="92" />

    </div>
  );
}

export default App;