import { labelToId } from './Utils'

function RadioGroup(props) {
    const groupId = labelToId(props.name)

    function optionSelectedHandler(event) {
        props.onOptionChanged(event.target.value)
    }

    const options = props.options.map(option => {
        const optionId = labelToId(option)
        return (
            <div className="form-check" key={option}>
                <input
                    className="form-check-input"
                    type="radio"
                    id={optionId}
                    name={groupId}
                    value={option}
                    onChange={optionSelectedHandler}
                    checked={props.value === option}
                />
                <label htmlFor={optionId} className="form-check-label">
                    {option}
                </label>
            </div>
        )
    })

    return (
        <div className="mb-3">
            <label className="form-label">{props.name}</label>
            <div>{options}</div>
        </div>
    )
}

export default RadioGroup
