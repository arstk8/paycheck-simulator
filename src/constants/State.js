export default class State {
    static MISSOURI = new State('Missouri')

    constructor(name) {
        this.name = name
    }

    static values() {
        return [this.MISSOURI]
    }
}
