function HintBox({ hint }) {
    if (!hint) return null;

    return (
        <div className="hint-box">
            <h3>Hint</h3>
            <p>{hint}</p>
        </div>
    );
}

export default HintBox;