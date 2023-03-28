
import React from "react"
import { act, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Home from "../pages/index"
import { getByTagName } from "@testing-library/dom";
import App from '../pages/_app'



describe("App component", () => {
  it("h1 reads SHOP", () => {
    render(<Home />)

    expect(screen.getByRole("heading").textContent).toMatch(/SHOP/)
  })
})

describe('Cart Componenet', () => { 
  it('increments cart total', () => {
    const { container } = render(<App Component={Home}/>)
    const button = container.querySelector('.addButton');
    act(() => {
      button.click()
    })
    console.log(container.textContent)
    expect(container.querySelector('h1').textContent).toMatch(/SHOP: 1/)
  })
})