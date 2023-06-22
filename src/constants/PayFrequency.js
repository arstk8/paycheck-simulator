export default class PayFrequency {
    static WEEKLY = new PayFrequency('Weekly')
    static BIWEEKLY = new PayFrequency('Biweekly')
    static SEMIMONTHLY = new PayFrequency('Semimonthly')
    static MONTHLY = new PayFrequency('Monthly')

    constructor(description) {
        this.description = description
    }

    static values() {
        return [
            this.WEEKLY.description,
            this.BIWEEKLY.description,
            this.SEMIMONTHLY.description,
            this.MONTHLY.description
        ]
    }
}
