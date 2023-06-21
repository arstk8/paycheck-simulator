import RadioGroup from './ui/RadioGroup'
import SelectGroup from './ui/SelectGroup'
import { useState } from 'react'
import CurrencyField from './ui/CurrencyField'

function Form(props) {
    const [filingStatus, setFilingStatus] = useState('Married filing jointly')
    const [payFrequency, setPayFrequency] = useState('Biweekly')
    const [regularPay, setRegularPay] = useState('0.00')
    const [federalTax, setFederalTax] = useState('0.00')

    return (
        <form onSubmit={props.onSubmit}>
            <RadioGroup
                name="Filing Status"
                options={['Married filing jointly', 'Single or married filing separately']}
                onOptionChanged={setFilingStatus}
                value={filingStatus}
            />
            <SelectGroup
                name="Pay Frequency"
                options={['Weekly', 'Biweekly', 'Semimonthly', 'Monthly']}
                onOptionChanged={setPayFrequency}
                value={payFrequency}
            />
            <CurrencyField name="Regular Pay" value={regularPay} onValueChanged={setRegularPay} />
            <CurrencyField name="Federal Tax" value={federalTax} disabled="true" onValueChanged={setFederalTax} />

            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    )
}

export default Form
