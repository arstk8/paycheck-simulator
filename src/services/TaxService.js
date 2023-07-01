import PayFrequency from '../constants/PayFrequency'

export default function calculateTax({ taxTable, payFrequency, regularPay }) {
    const payFrequencyEnum = PayFrequency.valueOf(payFrequency)
    const adjustedStandardDeduction = taxTable.standardDeduction / payFrequencyEnum.paysPerYear
    const adjustedPay = regularPay - adjustedStandardDeduction

    const taxablePay = +taxTable.brackets.reduce((total, bracket) => {
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
    return (taxTable.roundToNearestDollar ? Math.round(taxablePay) : taxablePay).toFixed(2)
}
