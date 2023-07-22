import { act, render, screen } from '@testing-library/react'
import App from './App'
import userEvent from '@testing-library/user-event'

describe('Basic workflows', () => {
    it('Should calculate federal tax correctly in a basic scenario', async () => {
        render(<App />)

        act(() => {
            const singleFilingStatusOption = screen.getByLabelText('Single or married filing separately')
            userEvent.click(singleFilingStatusOption)

            const payFrequencySelect = screen.getByLabelText('Pay Frequency')
            userEvent.selectOptions(payFrequencySelect, 'Weekly')

            const regularPayInput = screen.getByLabelText('Regular Pay')
            userEvent.type(regularPayInput, '{backspace}{backspace}{backspace}{backspace}4000')

            const submitButton = screen.getByText('Submit')
            userEvent.click(submitButton)
        })

        const federalTax = await screen.findByLabelText('Federal Tax')
        expect(federalTax).toHaveValue('787.69')
    })

    it('Should calculate state tax correctly in a basic scenario', async () => {
        render(<App />)

        act(() => {
            const singleFilingStatusOption = screen.getByLabelText('Single or married filing separately')
            userEvent.click(singleFilingStatusOption)

            const payFrequencySelect = screen.getByLabelText('Pay Frequency')
            userEvent.selectOptions(payFrequencySelect, 'Weekly')

            const regularPayInput = screen.getByLabelText('Regular Pay')
            userEvent.type(regularPayInput, '{backspace}{backspace}{backspace}{backspace}4000')

            const submitButton = screen.getByText('Submit')
            userEvent.click(submitButton)
        })

        const stateTax = await screen.findByLabelText('State Tax')
        expect(stateTax).toHaveValue('181.00')
    })
})
