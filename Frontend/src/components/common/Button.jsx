import Loader from "./Loader";

function Button({
    children,
    onClick,
    type = "button",
    variant = "primary",
    loading = false,
    disabled = false
}) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            className={`button button--${variant}`}
        >
            {loading ? <Loader size="small" /> : children}
        </button>
    );
}

export default Button;