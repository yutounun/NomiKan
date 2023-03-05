import MyButton from './MyButton'
import { render, screen } from '@testing-library/react'

describe('MyButton', () => {
  it('renders correctly', () => {
    render(<MyButton />)
    expect(screen.getByTestId('button')).toBeInTheDocument()
  })
  it('takes a snapshot', () => {
    const { asFragment } = render(<MyButton />)
    expect(asFragment()).toMatchSnapshot()
  })
})
