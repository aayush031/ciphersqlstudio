function ResultTable({ result }) {
    if (!result || result.length === 0) return null;

    return (
        <div className="result-table">
            <table>
                <thead>
                    <tr>
                        {Object.keys(result[0]).map((key) => (
                            <th key={key}>{key}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {result.map((row, index) => (
                        <tr key={index}>
                            {Object.values(row).map((val, i) => (
                                <td key={i}>{val}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ResultTable;