import renderer from 'react-test-renderer'
import Root from 'Root'
import CatList from '../CatList'
import { mount } from 'enzyme';
import { render, cleanup } from '@testing-library/react';


describe('<CatList />', () => {

    const match = { params: { breed: '' }, isExact: true, path: "", url: "" }
    const Element = <Root><CatList match={match} /></Root>
    let component
    let componentSnaphot


    beforeEach(() => {
        component = render(Element)
        componentSnaphot = mount(Element)
    })

    afterEach(() => {
        componentSnaphot.unmount()
        cleanup()
    })

    it('displays the pageHeading section', () => {
        const section = component.getByTestId('pageHeading')
        expect(section).toBeTruthy()
    })


    it('displays the breedDropdown section', () => {
        const section = component.getByTestId('breedDropdown')
        expect(section).toBeTruthy()
    })

    it('displays the returnHomeBtn section', () => {
        const section = component.getByTestId('returnHomeBtn')
        expect(section).toBeTruthy()
    })

    it('displays the listSection section', () => {
        const section = component.getByTestId('listSection')
        expect(section).toBeTruthy()
    })

    it('matches snapshot', () => {
        const element = renderer.create(Element).toJSON()
        expect(element).toMatchSnapshot()
    })
})
