import PayFrequency from '../../constants/PayFrequency'
import federalTaxTable from './federalTaxTable.json'

export default function calculateFederalTax({ filingStatus, payFrequency, regularPay }) {
    const taxTable = federalTaxTable['2023'][filingStatus]

    const payFrequencyEnum = PayFrequency.valueOf(payFrequency)
    const adjustedStandardDeduction = taxTable.standardDeduction / payFrequencyEnum.paysPerYear
    const adjustedPay = regularPay - adjustedStandardDeduction

    return +taxTable.brackets
        .reduce((total, bracket) => {
            const adjustedLowerBound = bracket.lowerBound / payFrequencyEnum.paysPerYear
            const adjustedUpperBound = bracket.upperBound / payFrequencyEnum.paysPerYear

            let payInRange
            if (adjustedPay < adjustedLowerBound) {
                payInRange = 0
            } else if (adjustedPay > adjustedUpperBound) {
                payInRange = adjustedUpperBound - adjustedLowerBound
            } else {
                payInRange = adjustedPay - adjustedLowerBound
            }

            return total + payInRange * bracket.rate
        }, 0)
        .toFixed(2)
}
