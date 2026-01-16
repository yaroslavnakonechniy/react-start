function Input ({placeholder, type = 'text',value, onChange}) {
    return (
        <input 
            placeholder = {placeholder}
            type = {type}
            value = {value}
            onChange = {onChange}
        />
    )
}

export default Input