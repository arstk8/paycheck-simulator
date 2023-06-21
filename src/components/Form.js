import RadioGroup from './ui/RadioGroup'
import SelectGroup from './ui/SelectGroup'

function Form(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <RadioGroup
                name="Filing Status"
                options={['Married filing jointly', 'Single or married filing separately']}
            />
            <SelectGroup name="Pay Frequency" options={['Weekly', 'Biweekly', 'Semimonthly', 'Monthly']} />
            <div className="mb-3">
                <label className="form-label" htmlFor="regular-pay">
                    Regular Pay
                </label>
                <input id="regular-pay" className="form-control" type="number" min="0.01" step="0.01" value="2500.00" />
            </div>

            <div className="mb-3">
                <label className="form-label" htmlFor="federal-tax">
                    Federal Tax
                </label>
                <input
                    id="federal-tax"
                    className="form-control"
                    type="number"
                    min="0.01"
                    step="0.01"
                    value="264.24"
                    disabled
                />
            </div>

            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    )
}

export default Form
