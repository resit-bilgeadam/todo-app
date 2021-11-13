
function Button({
    id,
    clickHandler,
    children,
    color = 'primary', 
    block = false,
    type = 'button'
}) {
    const className = `btn ${color} ${block ? 'block' : ''}`; // 'btn primary'

    return (
        <button 
            className={className}
            id={id}
            type={type}
            onClick={clickHandler}>
                {children}
        </button>
    )
}

export default Button;
