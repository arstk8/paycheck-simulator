import { labelToId } from './Utils'
import { useState } from 'react'

function CurrencyField(props) {
    function formatValue(value) {
        return (+value).toFixed(2)
    }

    function valueChangedHandler(event) {
        setFormattedValue(event.target.value)
        props.onValueChanged(+event.target.value)
    }

    function blurHandler(event) {
        setFormattedValue(formatValue(event.target.value))
    }

    const [formattedValue, setFormattedValue] = useState(formatValue(props.value))
    const fieldId = labelToId(props.name)

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
                value={formattedValue}
                onChange={valueChangedHandler}
                onBlur={blurHandler}
            />
        </div>
    )
}

export default CurrencyField
