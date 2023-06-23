import FilingStatus from '../../constants/FilingStatus'

export default class FederalTaxTable {
    static #taxTable = {
        2023: {
            [FilingStatus.MARRIED_FILING_JOINTLY.description]: {
                standardDeduction: 27700,
                brackets: [
                    {
                        rate: 0.1,
                        lowerBound: 0,
                        upperBound: 22000
                    },
                    {
                        rate: 0.12,
                        lowerBound: 22000,
                        upperBound: 89450
                    },
                    {
                        rate: 0.22,
                        lowerBound: 89450,
                        upperBound: 190750
                    },
                    {
                        rate: 0.24,
                        lowerBound: 190750,
                        upperBound: 364200
                    },
                    {
                        rate: 0.32,
                        lowerBound: 364200,
                        upperBound: 462500
                    },
                    {
                        rate: 0.35,
                        lowerBound: 462500,
                        upperBound: 693750
                    },
                    {
                        rate: 0.37,
                        lowerBound: 693750,
                        upperBound: Number.MAX_VALUE
                    }
                ]
            },
            [FilingStatus.SINGLE_OR_MARRIED_FILING_SEPARATELY.description]: {
                standardDeduction: 13850,
                brackets: [
                    {
                        rate: 0.1,
                        lowerBound: 0,
                        upperBound: 11000
                    },
                    {
                        rate: 0.12,
                        lowerBound: 11000,
                        upperBound: 44725
                    },
                    {
                        rate: 0.22,
                        lowerBound: 44725,
                        upperBound: 95375
                    },
                    {
                        rate: 0.24,
                        lowerBound: 95375,
                        upperBound: 182100
                    },
                    {
                        rate: 0.32,
                        lowerBound: 182100,
                        upperBound: 231250
                    },
                    {
                        rate: 0.35,
                        lowerBound: 231250,
                        upperBound: 578125
                    },
                    {
                        rate: 0.37,
                        lowerBound: 578125,
                        upperBound: Number.MAX_VALUE
                    }
                ]
            }
        }
    }

    static getTaxTable({ year, filingStatus }) {
        return this.#taxTable[year][filingStatus]
    }
}
