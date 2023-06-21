import { labelToId } from './utils'

function RadioGroup(props) {
    const groupId = labelToId(props.name)

    const options = props.options.map(option => {
        const optionId = labelToId(option)
        return (
            <div className="form-check">
                <input className="form-check-input" type="radio" id={optionId} name={groupId} />
                <label htmlFor={optionId} className="form-check-label">
                    {option}
                </label>
            </div>
        )
    })

    return (
        <div className="mb-3">
            <label htmlFor="radio-group" className="form-label">
                {props.name}
            </label>
            <div id="radio-group">{options}</div>
        </div>
    )
}

export default RadioGroup
