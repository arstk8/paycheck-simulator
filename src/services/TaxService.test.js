import calculateTax from './TaxService'
import PayFrequency from '../constants/PayFrequency'

describe('calculateTax', () => {
    describe('Applying Tax Brackets', () => {
        it('should calculate zero tax when brackets are empty', async () => {
            const emptyTaxTable = {
                standardDeduction: 0,
                roundToNearestDollar: false,
                brackets: []
            }
            const actualTax = calculateTax({
                taxTable: emptyTaxTable,
                payFrequency: PayFrequency.MONTHLY.description,
                regularPay: 10_000
            })
            expect(actualTax).toBe('0.00')
        })

        it('should calculate correctly when there is one bracket and all income falls within it', async () => {
            const taxTable = {
                standardDeduction: 0,
                roundToNearestDollar: false,
                brackets: [
                    {
                        lowerBound: 0,
                        upperBound: Number.MAX_VALUE,
                        rate: 0.1
                    }
                ]
            }
            const actualTax = calculateTax({
                taxTable: taxTable,
                payFrequency: PayFrequency.MONTHLY.description,
                regularPay: 10_000
            })
            expect(actualTax).toBe('1000.00')
        })

        it('should calculate correctly when there are multiple brackets and all income falls within them', async () => {
            const taxTable = {
                standardDeduction: 0,
                roundToNearestDollar: false,
                brackets: [
                    {
                        lowerBound: 0,
                        upperBound: 2_500 * PayFrequency.MONTHLY.paysPerYear,
                        rate: 0.1
                    },
                    {
                        lowerBound: 2_500 * PayFrequency.MONTHLY.paysPerYear,
                        upperBound: 5_000 * PayFrequency.MONTHLY.paysPerYear,
                        rate: 0.2
                    },
                    {
                        lowerBound: 5_000 * PayFrequency.MONTHLY.paysPerYear,
                        upperBound: Number.MAX_VALUE,
                        rate: 0.25
                    }
                ]
            }
            const actualTax = calculateTax({
                taxTable: taxTable,
                payFrequency: PayFrequency.MONTHLY.description,
                regularPay: 10_000
            })
            expect(actualTax).toBe('2000.00')
        })

        it('should calculate correctly when there are multiple brackets and not all income falls within them', async () => {
            const taxTable = {
                standardDeduction: 0,
                roundToNearestDollar: false,
                brackets: [
                    {
                        lowerBound: 0,
                        upperBound: 2_500 * PayFrequency.MONTHLY.paysPerYear,
                        rate: 0.1
                    },
                    {
                        lowerBound: 2_500 * PayFrequency.MONTHLY.paysPerYear,
                        upperBound: 5_000 * PayFrequency.MONTHLY.paysPerYear,
                        rate: 0.2
                    },
                    {
                        lowerBound: 5_000 * PayFrequency.MONTHLY.paysPerYear,
                        upperBound: 15_000 * PayFrequency.MONTHLY.paysPerYear,
                        rate: 0.25
                    },
                    {
                        lowerBound: 15_000 * PayFrequency.MONTHLY.paysPerYear,
                        upperBound: Number.MAX_VALUE,
                        rate: 0.5
                    }
                ]
            }
            const actualTax = calculateTax({
                taxTable: taxTable,
                payFrequency: PayFrequency.MONTHLY.description,
                regularPay: 10_000
            })
            expect(actualTax).toBe('2000.00')
        })

        it('should calculate correctly when there is a standard deduction present', async () => {
            const taxTable = {
                standardDeduction: 1_000 * PayFrequency.MONTHLY.paysPerYear,
                roundToNearestDollar: false,
                brackets: [
                    {
                        lowerBound: 0,
                        upperBound: 2_500 * PayFrequency.MONTHLY.paysPerYear,
                        rate: 0.1
                    },
                    {
                        lowerBound: 2_500 * PayFrequency.MONTHLY.paysPerYear,
                        upperBound: 5_000 * PayFrequency.MONTHLY.paysPerYear,
                        rate: 0.2
                    },
                    {
                        lowerBound: 5_000 * PayFrequency.MONTHLY.paysPerYear,
                        upperBound: 15_000 * PayFrequency.MONTHLY.paysPerYear,
                        rate: 0.25
                    },
                    {
                        lowerBound: 15_000 * PayFrequency.MONTHLY.paysPerYear,
                        upperBound: Number.MAX_VALUE,
                        rate: 0.5
                    }
                ]
            }
            const actualTax = calculateTax({
                taxTable: taxTable,
                payFrequency: PayFrequency.MONTHLY.description,
                regularPay: 10_000
            })
            expect(actualTax).toBe('1750.00')
        })
    })

    describe('Adjusting for pay frequency', () => {
        it('should adjust pay for weekly pay frequency', async () => {
            const taxTable = {
                standardDeduction: 12_000,
                roundToNearestDollar: false,
                brackets: [
                    {
                        lowerBound: 0,
                        upperBound: 30_000,
                        rate: 0.1
                    },
                    {
                        lowerBound: 30_000,
                        upperBound: 60_000,
                        rate: 0.2
                    },
                    {
                        lowerBound: 60_000,
                        upperBound: 180_000,
                        rate: 0.25
                    },
                    {
                        lowerBound: 180_000,
                        upperBound: Number.MAX_VALUE,
                        rate: 0.5
                    }
                ]
            }
            const actualTax = calculateTax({
                taxTable: taxTable,
                payFrequency: PayFrequency.WEEKLY.description,
                regularPay: 10_000
            })
            expect(actualTax).toBe('3903.85')
        })

        it('should adjust pay for biweekly pay frequency', async () => {
            const taxTable = {
                standardDeduction: 12_000,
                roundToNearestDollar: false,
                brackets: [
                    {
                        lowerBound: 0,
                        upperBound: 30_000,
                        rate: 0.1
                    },
                    {
                        lowerBound: 30_000,
                        upperBound: 60_000,
                        rate: 0.2
                    },
                    {
                        lowerBound: 60_000,
                        upperBound: 180_000,
                        rate: 0.25
                    },
                    {
                        lowerBound: 180_000,
                        upperBound: Number.MAX_VALUE,
                        rate: 0.5
                    }
                ]
            }
            const actualTax = calculateTax({
                taxTable: taxTable,
                payFrequency: PayFrequency.BIWEEKLY.description,
                regularPay: 10_000
            })
            expect(actualTax).toBe('2807.69')
        })

        it('should adjust pay for semimonthly pay frequency', async () => {
            const taxTable = {
                standardDeduction: 12_000,
                roundToNearestDollar: false,
                brackets: [
                    {
                        lowerBound: 0,
                        upperBound: 30_000,
                        rate: 0.1
                    },
                    {
                        lowerBound: 30_000,
                        upperBound: 60_000,
                        rate: 0.2
                    },
                    {
                        lowerBound: 60_000,
                        upperBound: 180_000,
                        rate: 0.25
                    },
                    {
                        lowerBound: 180_000,
                        upperBound: Number.MAX_VALUE,
                        rate: 0.5
                    }
                ]
            }
            const actualTax = calculateTax({
                taxTable: taxTable,
                payFrequency: PayFrequency.SEMIMONTHLY.description,
                regularPay: 10_000
            })
            expect(actualTax).toBe('2625.00')
        })

        it('should adjust pay for monthly pay frequency', async () => {
            const taxTable = {
                standardDeduction: 12_000,
                roundToNearestDollar: false,
                brackets: [
                    {
                        lowerBound: 0,
                        upperBound: 30_000,
                        rate: 0.1
                    },
                    {
                        lowerBound: 30_000,
                        upperBound: 60_000,
                        rate: 0.2
                    },
                    {
                        lowerBound: 60_000,
                        upperBound: 180_000,
                        rate: 0.25
                    },
                    {
                        lowerBound: 180_000,
                        upperBound: Number.MAX_VALUE,
                        rate: 0.5
                    }
                ]
            }
            const actualTax = calculateTax({
                taxTable: taxTable,
                payFrequency: PayFrequency.MONTHLY.description,
                regularPay: 10_000
            })
            expect(actualTax).toBe('1750.00')
        })
    })

    describe('Rounding', () => {
        it('should round the nearest dollar if bracket is so configured', async () => {
            const taxTable = {
                standardDeduction: 12_000,
                roundToNearestDollar: true,
                brackets: [
                    {
                        lowerBound: 0,
                        upperBound: 30_000,
                        rate: 0.1
                    },
                    {
                        lowerBound: 30_000,
                        upperBound: 60_000,
                        rate: 0.2
                    },
                    {
                        lowerBound: 60_000,
                        upperBound: 180_000,
                        rate: 0.25
                    },
                    {
                        lowerBound: 180_000,
                        upperBound: Number.MAX_VALUE,
                        rate: 0.5
                    }
                ]
            }
            const actualTax = calculateTax({
                taxTable: taxTable,
                payFrequency: PayFrequency.WEEKLY.description,
                regularPay: 10_000
            })
            expect(actualTax).toBe('3904.00')
        })
    })

    describe('Error Cases', () => {
        it('should throw an error if an invalid pay frequency is passed in', async () => {
            const taxTable = {
                standardDeduction: 12_000,
                roundToNearestDollar: true,
                brackets: [
                    {
                        lowerBound: 0,
                        upperBound: 30_000,
                        rate: 0.1
                    },
                    {
                        lowerBound: 30_000,
                        upperBound: 60_000,
                        rate: 0.2
                    },
                    {
                        lowerBound: 60_000,
                        upperBound: 180_000,
                        rate: 0.25
                    },
                    {
                        lowerBound: 180_000,
                        upperBound: Number.MAX_VALUE,
                        rate: 0.5
                    }
                ]
            }
            const actualTaxCall = () => {
                calculateTax({
                    taxTable: taxTable,
                    payFrequency: 'not a pay frequency',
                    regularPay: 10_000
                })
            }
            expect(actualTaxCall).toThrow(Error)
            expect(actualTaxCall).toThrow('Unrecognized pay frequency')
        })
    })
})
