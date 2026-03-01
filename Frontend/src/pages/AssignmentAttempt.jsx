import { useState } from "react";
import { useParams } from "react-router-dom";
import SqlEditor from "../components/editor/SqlEditor";
import ResultTable from "../components/editor/ResultTable";
import HintBox from "../components/editor/HintBox";
import Button from "../components/common/Button";
import axios from "axios";

function AssignmentAttempt() {
    const { id } = useParams();

    const [query, setQuery] = useState("");
    const [result, setResult] = useState([]);
    const [hint, setHint] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // Execute SQL Query
    const handleExecute = async () => {
        if (!query.trim()) {
            setError("Please write a SQL query before executing.");
            return;
        }

        try {
            setLoading(true);
            setError("");
            setHint("");

            const response = await axios.post(
                "http://localhost:5000/api/query/execute",
                { query, assignmentId: id }
            );

            setResult(response.data.rows || []);
        } catch (err) {
            setResult([]);
            setError(
                err.response?.data?.error ||
                "Something went wrong while executing."
            );
        } finally {
            setLoading(false);
        }
    };

    // Get LLM Hint
    const handleHint = async () => {
        try {
            setLoading(true);
            setError("");

            const response = await axios.post(
                "http://localhost:5000/api/hint",
                {
                    assignmentId: id,
                    userQuery: query
                }
            );

            setHint(response.data.hint);
        } catch (err) {
            setError("Unable to fetch hint at the moment.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="attempt">
            <div className="attempt__question">
                <h2>Assignment #{id}</h2>
                <p>Write a SQL query to solve the problem described.</p>
            </div>

            <div className="attempt__editor">
                <SqlEditor query={query} setQuery={setQuery} />

                <div className="attempt__buttons">
                    <Button
                        onClick={handleExecute}
                        loading={loading}
                        variant="primary"
                    >
                        Execute Query
                    </Button>

                    <Button
                        onClick={handleHint}
                        loading={loading}
                        variant="secondary"
                    >
                        Get Hint
                    </Button>
                </div>
            </div>

            {error && (
                <div className="attempt__error">
                    {error}
                </div>
            )}

            <ResultTable result={result} />
            <HintBox hint={hint} />
        </div>
    );
}

export default AssignmentAttempt;