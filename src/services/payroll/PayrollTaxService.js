export function calculateMedicareTax({ regularPay }) {
    return (regularPay * 0.0145).toFixed(2)
}

export function calculateFicaTax({ regularPay }) {
    return (regularPay * 0.062).toFixed(2)
}
