import { act, render, screen } from '@testing-library/react'
import App from './App'
import userEvent from '@testing-library/user-event'

describe('Basic workflows', () => {
    const basicScenario = () => {
        const singleFilingStatusOption = screen.getByLabelText('Single or married filing separately')
        userEvent.click(singleFilingStatusOption)

        const payFrequencySelect = screen.getByLabelText('Pay Frequency')
        userEvent.selectOptions(payFrequencySelect, 'Weekly')

        const regularPayInput = screen.getByLabelText('Regular Pay')
        userEvent.type(regularPayInput, '{backspace}{backspace}{backspace}{backspace}4000')

        const submitButton = screen.getByText('Submit')
        userEvent.click(submitButton)
    }

    it('Should calculate federal tax correctly in a basic scenario', async () => {
        render(<App />)

        act(basicScenario)

        const federalTax = await screen.findByLabelText('Federal Tax')
        expect(federalTax).toHaveValue('787.69')
    })

    it('Should calculate state tax correctly in a basic scenario', async () => {
        render(<App />)

        act(basicScenario)

        const stateTax = await screen.findByLabelText('State Tax')
        expect(stateTax).toHaveValue('181.00')
    })

    it('Should calculate fica tax correctly in a basic scenario', async () => {
        render(<App />)

        act(basicScenario)

        const ficaTax = await screen.findByLabelText('Fica Tax')
        expect(ficaTax).toHaveValue('248.00')
    })

    it('Should calculate medicare tax correctly in a basic scenario', async () => {
        render(<App />)

        act(basicScenario)

        const ficaTax = await screen.findByLabelText('Medicare Tax')
        expect(ficaTax).toHaveValue('58.00')
    })
})
