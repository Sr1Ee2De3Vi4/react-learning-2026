const SelectBox = (props) =>{
    return(
        <>
        <label>{props.label}</label>
        <select>
            {props.options.map((option) =>{
                <option value={option.value}></option>
            })}
        </select>
        </>
    )
}