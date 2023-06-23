export default class FilingStatus {
    static MARRIED_FILING_JOINTLY = new FilingStatus('Married filing jointly')
    static SINGLE_OR_MARRIED_FILING_SEPARATELY = new FilingStatus('Single or married filing separately')

    constructor(description) {
        this.description = description
    }

    static values() {
        return [this.MARRIED_FILING_JOINTLY, this.SINGLE_OR_MARRIED_FILING_SEPARATELY]
    }
}
