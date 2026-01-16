function Button ({text, type = 'submit', onClick}) {
    return (
        <button type = {type} onClick = {onClick}>
            {text}
        </button>
    )
}

export default Button
