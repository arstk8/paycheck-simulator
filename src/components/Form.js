import RadioGroup from './ui/RadioGroup'
import SelectGroup from './ui/SelectGroup'
import { useState } from 'react'
import CurrencyField from './ui/CurrencyField'
import FilingStatus from '../constants/FilingStatus'
import PayFrequency from '../constants/PayFrequency'
import calculateFederalTax from '../services/federal/FederalTaxService'

function Form() {
    function submitHandler(event) {
        event.preventDefault()

        const federalTax = calculateFederalTax({
            filingStatus,
            payFrequency,
            regularPay
        })
        setFederalTax(federalTax)
    }

    const [filingStatus, setFilingStatus] = useState(FilingStatus.MARRIED_FILING_JOINTLY.description)
    const [payFrequency, setPayFrequency] = useState(PayFrequency.BIWEEKLY.description)
    const [regularPay, setRegularPay] = useState('0.00')
    const [federalTax, setFederalTax] = useState('0.00')

    return (
        <form onSubmit={submitHandler}>
            <RadioGroup
                name="Filing Status"
                options={FilingStatus.values().map(f => f.description)}
                onOptionChanged={setFilingStatus}
                value={filingStatus}
            />
            <SelectGroup
                name="Pay Frequency"
                options={PayFrequency.values().map(p => p.description)}
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
