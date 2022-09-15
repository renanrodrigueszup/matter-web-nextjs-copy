import { render, screen } from '@testing-library/react'
import Web from './index.page'

describe('Web Page example', () => {
  const renderComponent = () => <Web />

  test('render PageFooter', () => {
    render(renderComponent())
    const pageFooter = screen.getByTestId('web-page')
    expect(pageFooter).not.toBeNull()
  })
})
