import calculateTax from '../TaxService'

export default function calculateFederalTax({ filingStatus, payFrequency, regularPay }) {
    const federalTaxTable = require('./federalTaxTable.json')
    const taxTable = federalTaxTable['2023'][filingStatus]

    return calculateTax({ taxTable, payFrequency, regularPay })
}
