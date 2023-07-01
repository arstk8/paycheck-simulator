import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CurrencyField from './CurrencyField'

describe('Input formatting', () => {
    it('should truncate decimal places past two', async () => {
        render(<CurrencyField name="test" value="0.00" onValueChanged={() => {}} />)

        const input = screen.getByLabelText('test')
        act(() => {
            userEvent.type(input, '{backspace}{backspace}{backspace}{backspace}1.123')
            userEvent.tab()
        })

        const inputAfterUpdate = await screen.findByLabelText('test')
        await expect(inputAfterUpdate).toHaveValue(1.12)
    })

    it('should add decimal places if none are present', async () => {
        render(<CurrencyField name="test" value="0.00" onValueChanged={() => {}} />)

        const input = screen.getByLabelText('test')
        act(() => {
            userEvent.type(input, '{backspace}{backspace}{backspace}{backspace}1')
            userEvent.tab()
        })

        const inputAfterUpdate = await screen.findByLabelText('test')
        await expect(inputAfterUpdate.value).toBe('1.00')
    })

    it('should add a decimal place if only one is present', async () => {
        render(<CurrencyField name="test" value="0.00" onValueChanged={() => {}} />)

        const input = screen.getByLabelText('test')
        act(() => {
            userEvent.type(input, '{backspace}{backspace}{backspace}{backspace}1.1')
            userEvent.tab()
        })

        const inputAfterUpdate = await screen.findByLabelText('test')
        await expect(inputAfterUpdate.value).toBe('1.10')
    })
})
