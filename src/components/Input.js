
function Input({
    placeholder,
    name,
    id,
    label,
    value,
    changeHandler,
    type = 'text'
}) {
    return (
        <div className='form-group'>
            <label htmlFor={id}>{label}</label>

            <input
                placeholder={placeholder}
                id={id}
                type={type}
                name={name}
                value={value}
                onChange={changeHandler} />
        </div>
    )
}

export default Input;
