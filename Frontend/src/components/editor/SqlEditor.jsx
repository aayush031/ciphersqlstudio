import Editor from "@monaco-editor/react";

function SqlEditor({ query, setQuery }) {
    return (
        <div className="sql-editor">
            <Editor
                height="300px"
                defaultLanguage="sql"
                value={query}
                onChange={(value) => setQuery(value)}
                theme="vs-dark"
            />
        </div>
    );
}

export default SqlEditor;