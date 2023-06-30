import calculateFederalTax from './FederalTaxService'
import FilingStatus from '../../constants/FilingStatus'
import PayFrequency from '../../constants/PayFrequency'

describe('calculateFederalTax', () => {
    describe('Weekly', () => {
        describe('Married filing jointly', () => {
            it.each`
                regularPay | federalTax
                ${532.7}   | ${0.0}
                ${532.8}   | ${0.01}
                ${532.9}   | ${0.02}
                ${533}     | ${0.03}
                ${600}     | ${6.73}
                ${1_000}   | ${47.62}
                ${2_500}   | ${252.33}
                ${8_000}   | ${1_575.38}
                ${50_000}  | ${16_955.1}
            `(
                "An income of '$regularPay' should have federal tax of '$federalTax'",
                async ({ regularPay, federalTax }) => {
                    const actualFederalTax = calculateFederalTax({
                        filingStatus: FilingStatus.MARRIED_FILING_JOINTLY.description,
                        payFrequency: PayFrequency.WEEKLY.description,
                        regularPay: regularPay
                    })
                    expect(actualFederalTax).toBe(federalTax)
                }
            )
        })

        describe('Single or married filing separately', () => {
            it.each`
                regularPay | federalTax
                ${266.3}   | ${0.0}
                ${266.4}   | ${0.01}
                ${266.5}   | ${0.02}
                ${266.6}   | ${0.03}
                ${300}     | ${3.37}
                ${500}     | ${23.81}
                ${1_250}   | ${126.16}
                ${4_000}   | ${787.69}
                ${25_000}  | ${8_388.61}
            `(
                "An income of '$regularPay' should have federal tax of '$federalTax'",
                async ({ regularPay, federalTax }) => {
                    const actualFederalTax = calculateFederalTax({
                        filingStatus: FilingStatus.SINGLE_OR_MARRIED_FILING_SEPARATELY.description,
                        payFrequency: PayFrequency.WEEKLY.description,
                        regularPay: regularPay
                    })
                    expect(actualFederalTax).toBe(federalTax)
                }
            )
        })
    })

    describe('Biweekly', () => {
        describe('Married filing jointly', () => {
            it.each`
                regularPay | federalTax
                ${1_065.4} | ${0.0}
                ${1_065.5} | ${0.01}
                ${1_065.6} | ${0.02}
                ${1_066}   | ${0.06}
                ${1_200}   | ${13.46}
                ${2_000}   | ${95.23}
                ${5_000}   | ${504.65}
                ${16_000}  | ${3_150.77}
                ${100_000} | ${33_910.19}
            `(
                "An income of '$regularPay' should have federal tax of '$federalTax'",
                async ({ regularPay, federalTax }) => {
                    const actualFederalTax = calculateFederalTax({
                        filingStatus: FilingStatus.MARRIED_FILING_JOINTLY.description,
                        payFrequency: PayFrequency.BIWEEKLY.description,
                        regularPay: regularPay
                    })
                    expect(actualFederalTax).toBe(federalTax)
                }
            )
        })

        describe('Single or married filing separately', () => {
            it.each`
                regularPay | federalTax
                ${532.7}   | ${0.0}
                ${532.8}   | ${0.01}
                ${532.9}   | ${0.02}
                ${533}     | ${0.03}
                ${600}     | ${6.73}
                ${1_000}   | ${47.62}
                ${2_500}   | ${252.33}
                ${8_000}   | ${1_575.38}
                ${50_000}  | ${16_777.21}
            `(
                "An income of '$regularPay' should have federal tax of '$federalTax'",
                async ({ regularPay, federalTax }) => {
                    const actualFederalTax = calculateFederalTax({
                        filingStatus: FilingStatus.SINGLE_OR_MARRIED_FILING_SEPARATELY.description,
                        payFrequency: PayFrequency.BIWEEKLY.description,
                        regularPay: regularPay
                    })
                    expect(actualFederalTax).toBe(federalTax)
                }
            )
        })
    })

    describe('Semimonthly', () => {
        describe('Married filing jointly', () => {
            it.each`
                regularPay    | federalTax
                ${1154.2}     | ${0.0}
                ${1154.3}     | ${0.01}
                ${1154.4}     | ${0.02}
                ${1154.5}     | ${0.03}
                ${1_300}      | ${14.58}
                ${2_166.66}   | ${103.17}
                ${5_416.66}   | ${546.71}
                ${17_333.33}  | ${3_413.33}
                ${108_333.33} | ${36_736.04}
            `(
                "An income of '$regularPay' should have federal tax of '$federalTax'",
                async ({ regularPay, federalTax }) => {
                    const actualFederalTax = calculateFederalTax({
                        filingStatus: FilingStatus.MARRIED_FILING_JOINTLY.description,
                        payFrequency: PayFrequency.SEMIMONTHLY.description,
                        regularPay: regularPay
                    })
                    expect(actualFederalTax).toBe(federalTax)
                }
            )
        })

        describe('Single or married filing separately', () => {
            it.each`
                regularPay   | federalTax
                ${577.1}     | ${0.0}
                ${577.2}     | ${0.01}
                ${577.3}     | ${0.02}
                ${577.4}     | ${0.03}
                ${650}       | ${7.29}
                ${1_083.33}  | ${51.58}
                ${2_708.33}  | ${273.35}
                ${8_666.66}  | ${1_706.66}
                ${54_166.66} | ${18_175.31}
            `(
                "An income of '$regularPay' should have federal tax of '$federalTax'",
                async ({ regularPay, federalTax }) => {
                    const actualFederalTax = calculateFederalTax({
                        filingStatus: FilingStatus.SINGLE_OR_MARRIED_FILING_SEPARATELY.description,
                        payFrequency: PayFrequency.SEMIMONTHLY.description,
                        regularPay: regularPay
                    })
                    expect(actualFederalTax).toBe(federalTax)
                }
            )
        })
    })

    describe('Monthly', () => {
        describe('Married filing jointly', () => {
            it.each`
                regularPay    | federalTax
                ${2308.3}     | ${0.0}
                ${2308.4}     | ${0.01}
                ${2308.5}     | ${0.02}
                ${2308.6}     | ${0.03}
                ${2_600}      | ${29.17}
                ${4_333.32}   | ${206.33}
                ${10_833.32}  | ${1_093.41}
                ${34_666.66}  | ${6_826.66}
                ${216_666.66} | ${73_472.08}
            `(
                "An income of '$regularPay' should have federal tax of '$federalTax'",
                async ({ regularPay, federalTax }) => {
                    const actualFederalTax = calculateFederalTax({
                        filingStatus: FilingStatus.MARRIED_FILING_JOINTLY.description,
                        payFrequency: PayFrequency.MONTHLY.description,
                        regularPay: regularPay
                    })
                    expect(actualFederalTax).toBe(federalTax)
                }
            )
        })

        describe('Single or married filing separately', () => {
            it.each`
                regularPay    | federalTax
                ${1154.2}     | ${0.0}
                ${1154.3}     | ${0.01}
                ${1154.4}     | ${0.02}
                ${1154.5}     | ${0.03}
                ${1_300}      | ${14.58}
                ${2_166.66}   | ${103.17}
                ${5_416.66}   | ${546.71}
                ${17_333.32}  | ${3_413.33}
                ${108_333.32} | ${36_350.62}
            `(
                "An income of '$regularPay' should have federal tax of '$federalTax'",
                async ({ regularPay, federalTax }) => {
                    const actualFederalTax = calculateFederalTax({
                        filingStatus: FilingStatus.SINGLE_OR_MARRIED_FILING_SEPARATELY.description,
                        payFrequency: PayFrequency.MONTHLY.description,
                        regularPay: regularPay
                    })
                    expect(actualFederalTax).toBe(federalTax)
                }
            )
        })
    })
})
