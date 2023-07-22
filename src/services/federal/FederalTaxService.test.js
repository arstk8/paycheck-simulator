import calculateFederalTax from './FederalTaxService'
import FilingStatus from '../../constants/FilingStatus'
import PayFrequency from '../../constants/PayFrequency'

describe('calculateFederalTax', () => {
    it('should use the correct tax bracket for married filing jointly', async () => {
        const actualFederalTax = calculateFederalTax({
            filingStatus: FilingStatus.MARRIED_FILING_JOINTLY.description,
            payFrequency: PayFrequency.WEEKLY.description,
            regularPay: 50_000
        })
        expect(actualFederalTax).toBe('16955.10')
    })

    it('should use the correct tax bracket for single or married filing separately', async () => {
        const actualFederalTax = calculateFederalTax({
            filingStatus: FilingStatus.SINGLE_OR_MARRIED_FILING_SEPARATELY.description,
            payFrequency: PayFrequency.WEEKLY.description,
            regularPay: 50_000
        })
        expect(actualFederalTax).toBe('17638.61')
    })
})
