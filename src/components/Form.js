import RadioGroup from './ui/RadioGroup'
import SelectGroup from './ui/SelectGroup'
import { useState } from 'react'
import CurrencyField from './ui/CurrencyField'
import FilingStatus from '../constants/FilingStatus'
import PayFrequency from '../constants/PayFrequency'
import calculateFederalTax from '../services/federal/FederalTaxService'
import calculateStateTax from '../services/state/StateTaxService'
import State from '../constants/State'
import ReadOnlyField from './ui/ReadOnlyField'
import { calculateFicaTax, calculateMedicareTax } from '../services/payroll/PayrollTaxService'

function Form() {
    function submitHandler(event) {
        event.preventDefault()

        const stateTax = calculateStateTax({
            filingStatus,
            payFrequency,
            state,
            regularPay
        })
        setStateTax(stateTax)

        const federalTax = calculateFederalTax({
            filingStatus,
            payFrequency,
            regularPay
        })
        setFederalTax(federalTax)

        const ficaTax = calculateFicaTax({ regularPay })
        setFicaTax(ficaTax)

        const medicareTax = calculateMedicareTax({ regularPay })
        setMedicareTax(medicareTax)
    }

    const [filingStatus, setFilingStatus] = useState(FilingStatus.MARRIED_FILING_JOINTLY.description)
    const [payFrequency, setPayFrequency] = useState(PayFrequency.BIWEEKLY.description)
    const [state, setState] = useState(State.MISSOURI.name)
    const [regularPay, setRegularPay] = useState('0.00')
    const [federalTax, setFederalTax] = useState('0.00')
    const [stateTax, setStateTax] = useState('0.00')
    const [ficaTax, setFicaTax] = useState('0.00')
    const [medicareTax, setMedicareTax] = useState('0.00')

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
            <SelectGroup
                name="State"
                options={State.values().map(s => s.name)}
                onOptionChanged={setState}
                value={state}
            />
            <CurrencyField name="Regular Pay" value={regularPay} onValueChanged={setRegularPay} />
            <ReadOnlyField name="State Tax" value={stateTax} />
            <ReadOnlyField name="Federal Tax" value={federalTax} />
            <ReadOnlyField name="Fica Tax" value={ficaTax} />
            <ReadOnlyField name="Medicare Tax" value={medicareTax} />

            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    )
}

export default Form
