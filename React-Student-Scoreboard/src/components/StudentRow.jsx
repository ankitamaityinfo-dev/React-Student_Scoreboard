function StudentRow({ student, updateScore, removeStudent }) {
    const status = student.score >= 40 ? "Pass" : "Fail";

    return (
        <tr>
            <td>{student.name}</td>

            <td>
                <input
                    type="number"
                    value={student.score}
                    min="0"
                    max="100"
                    onChange={(e) =>
                        updateScore(
                            student.id,
                            Math.max(0, Math.min(100, e.target.value))
                        )
                    }
                />
            </td>

            <td className={status === "Pass" ? "pass" : "fail"}>
                {status}
            </td>

            <td>
                <button onClick={() => removeStudent(student.id)}>
                    Remove
                </button>
            </td>
        </tr>
    );
}

export default StudentRow;