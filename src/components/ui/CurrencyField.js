import { labelToId } from './utils'

function CurrencyField(props) {
    const fieldId = labelToId(props.name)

    function valueChangedHandler(event) {
        props.onValueChanged(event.target.value)
    }

    return (
        <div className="mb-3">
            <label className="form-label" htmlFor={fieldId}>
                {props.name}
            </label>
            <input
                id={fieldId}
                className="form-control"
                type="number"
                min="0.01"
                step="0.01"
                value={props.value}
                disabled={props.disabled === 'true'}
                onChange={valueChangedHandler}
            />
        </div>
    )
}

export default CurrencyField
