import RadioGroup from './ui/RadioGroup'
import SelectGroup from './ui/SelectGroup'
import { useState } from 'react'
import CurrencyField from './ui/CurrencyField'
import FilingStatus from '../constants/FilingStatus'
import PayFrequency from '../constants/PayFrequency'

function Form(props) {
    const [filingStatus, setFilingStatus] = useState(FilingStatus.MARRIED_FILING_JOINTLY.description)
    const [payFrequency, setPayFrequency] = useState(PayFrequency.BIWEEKLY.description)
    const [regularPay, setRegularPay] = useState('0.00')
    const [federalTax, setFederalTax] = useState('0.00')

    return (
        <form onSubmit={props.onSubmit}>
            <RadioGroup
                name="Filing Status"
                options={FilingStatus.values()}
                onOptionChanged={setFilingStatus}
                value={filingStatus}
            />
            <SelectGroup
                name="Pay Frequency"
                options={PayFrequency.values()}
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
