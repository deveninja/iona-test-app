import renderer from 'react-test-renderer'
import App from 'App'
import Root from 'Root'
import { cleanup, render } from '@testing-library/react'



describe('<Main />', () => {

  let app

  beforeEach(() => {
    app = render(<Root><App /></Root>)
  })

  afterEach(() => cleanup())

  it('displays the main section', () => {
    const mainSection = app.getByTestId('mainSection')
    expect(mainSection).toBeTruthy()
  })

  it('matches snapshot', () => {
    const appSnapshot = renderer.create(<Root><App /></Root>).toJSON()
    expect(appSnapshot).toMatchSnapshot()
  })
})
