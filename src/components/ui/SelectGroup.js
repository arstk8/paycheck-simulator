import { labelToId } from './Utils'

function SelectGroup(props) {
    const options = props.options.map(option => <option key={option}>{option}</option>)

    function optionSelectedHandler(event) {
        props.onOptionChanged(event.target.value)
    }

    const groupId = labelToId(props.name)
    return (
        <div className="mb-3">
            <label htmlFor={groupId} className="form-label">
                Pay Frequency
            </label>
            <select className="form-select" id={groupId} onChange={optionSelectedHandler} value={props.value}>
                {options}
            </select>
        </div>
    )
}

export default SelectGroup
