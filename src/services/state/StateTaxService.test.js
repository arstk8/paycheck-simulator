import calculateStateTax from './StateTaxService'
import FilingStatus from '../../constants/FilingStatus'
import PayFrequency from '../../constants/PayFrequency'
import State from '../../constants/State'

describe('calculateStateTax', () => {
    describe('Missouri', () => {
        it('should use the correct tax bracket for married filing jointly', async () => {
            const actualStateTax = calculateStateTax({
                filingStatus: FilingStatus.MARRIED_FILING_JOINTLY.description,
                payFrequency: PayFrequency.BIWEEKLY.description,
                state: State.MISSOURI.name,
                regularPay: 2_500
            })
            expect(actualStateTax).toBe('64.00')
        })

        it('should use the correct tax bracket for single or married filing separately', async () => {
            const actualStateTax = calculateStateTax({
                filingStatus: FilingStatus.SINGLE_OR_MARRIED_FILING_SEPARATELY.description,
                payFrequency: PayFrequency.BIWEEKLY.description,
                state: State.MISSOURI.name,
                regularPay: 2_500
            })
            expect(actualStateTax).toBe('90.00')
        })
    })
})
