import renderer from 'react-test-renderer'
import App from 'App'
import Root from 'Root'
import { cleanup, render } from '@testing-library/react'



describe('<HomePage />', () => {

    let app

    beforeEach(() => {
        app = render(<Root><App /></Root>)
    })

    afterEach(() => cleanup())

    it('displays the pageHeading section', () => {
        const section = app.getByTestId('pageHeading')
        expect(section).toBeTruthy()
    })


    it('displays the cardSection section', () => {
        const section = app.getByTestId('cardSection')
        expect(section).toBeTruthy()
    })

    it('matches snapshot', () => {
        const appSnapshot = renderer.create(<Root><App /></Root>).toJSON()
        expect(appSnapshot).toMatchSnapshot()
    })
})
