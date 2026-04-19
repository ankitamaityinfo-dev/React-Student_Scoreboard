import { useState } from "react";
import Header from "./components/Header";
import StudentTable from "./components/StudentTable";
import AddStudentForm from "./components/AddStudentForm";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Aman", score: 50 },
    { id: 2, name: "Riya", score: 30 },
  ]);

  const updateScore = (id, newScore) => {
    setStudents(
      students.map((s) =>
        s.id === id ? { ...s, score: Number(newScore) } : s
      )
    );
  };

  const addStudent = (name, score) => {
    const newStudent = {
      id: students.length + 1,
      name,
      score: Number(score),
    };
    setStudents([...students, newStudent]);
  };

  // ✅ NEW
  const removeStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  const clearAll = () => {
    setStudents([]);
  };

  return (
    <div className="app">
      <Header />
      <AddStudentForm addStudent={addStudent} />

      <StudentTable
        students={students}
        updateScore={updateScore}
        removeStudent={removeStudent}
      />

      <button onClick={clearAll} className="clear-btn">
        Clear All
      </button>
    </div>
  );
}

export default App;
