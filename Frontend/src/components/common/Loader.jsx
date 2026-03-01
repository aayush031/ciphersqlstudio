function Loader({ size = "medium" }) {
    return (
        <div className={`loader loader--${size}`}></div>
    );
}

export default Loader;