import calculateTax from '../TaxService'

export default function calculateStateTax({ filingStatus, payFrequency, state, regularPay }) {
    const stateTaxTable = require(`./tax-tables/${state}.json`)
    const taxTable = stateTaxTable['2023'][filingStatus]

    return calculateTax({ taxTable, payFrequency, regularPay })
}
