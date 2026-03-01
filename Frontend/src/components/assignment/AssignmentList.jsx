import { useEffect, useState } from "react";
import axios from "axios";
import AssignmentCard from "./AssignmentCard";

function AssignmentList() {
    const [assignments, setAssignments] = useState([]);

    useEffect(() => {
        const fetchAssignments = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/assignments");
                setAssignments(res.data.assignments);
            } catch (error) {
                console.error("Failed to fetch assignments", error);
            }
        };

        fetchAssignments();
    }, []);

    return (
        <div className="assignment-list">
            {assignments.map((assignment) => (
                <AssignmentCard
                    key={assignment.id}
                    assignment={assignment}
                />
            ))}
        </div>
    );
}

export default AssignmentList;