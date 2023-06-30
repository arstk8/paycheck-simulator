export default class PayFrequency {
    static WEEKLY = new PayFrequency('Weekly', 52)
    static BIWEEKLY = new PayFrequency('Biweekly', 26)
    static SEMIMONTHLY = new PayFrequency('Semimonthly', 24)
    static MONTHLY = new PayFrequency('Monthly', 12)

    constructor(description, paysPerYear) {
        this.description = description
        this.paysPerYear = paysPerYear
    }

    static values() {
        return [this.WEEKLY, this.BIWEEKLY, this.SEMIMONTHLY, this.MONTHLY]
    }

    static valueOf(payFrequencyText) {
        for (const value of PayFrequency.values()) {
            if (value.description === payFrequencyText) {
                return value
            }
        }

        throw new Error('Unrecognized pay frequency')
    }
}
