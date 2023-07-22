import { labelToId } from './Utils'

function ReadOnlyField(props) {
    const fieldId = labelToId(props.name)

    return (
        <div className="mb-3">
            <label className="form-label" htmlFor={fieldId}>
                {props.name}
            </label>
            <input id={fieldId} className="form-control" value={props.value} disabled />
        </div>
    )
}

export default ReadOnlyField
