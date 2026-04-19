import { useState } from "react";

function AddStudentForm({ addStudent }) {
    const [name, setName] = useState("");
    const [score, setScore] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !score) return;

        addStudent(name, score);
        setName("");
        setScore("");
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <input
                type="text"
                placeholder="Student Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Score"
                value={score}
                min="0"
                max="100"
                onChange={(e) =>
                    setScore(Math.max(0, Math.min(100, e.target.value)))}

            />
            <button type="submit">Add Student</button>
        </form>
    );
}

export default AddStudentForm;