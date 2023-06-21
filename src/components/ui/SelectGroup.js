import { labelToId } from './utils'

function SelectGroup(props) {
    const options = props.options.map(option => <option>{option}</option>)

    const groupId = labelToId(props.name)
    return (
        <div className="mb-3">
            <label htmlFor={groupId} className="form-label">
                Pay Frequency
            </label>
            <select className="form-select" id={groupId}>
                {options}
            </select>
        </div>
    )
}

export default SelectGroup
