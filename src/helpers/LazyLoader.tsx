import { Component } from "react"

/**
 * =================================================================
 * @description - This will help in code splitting by lazy loading 
 * imported components
 * @param getComponent - typeof function 
 * @returns HOC
 * =================================================================
 */
const LazyLoad = (getComponent: any) => {
    class AsyncComponent extends Component {
        static Component = null
        state = { Component: AsyncComponent.Component }

        componentDidMount() {
            if (!this.state.Component) {
                getComponent().then((Component: any) => {
                    AsyncComponent.Component = Component
                    this.setState({ Component })
                })
            }
        }
        render() {
            const { Component }: { Component: any } = this.state
            if (Component) {
                return <Component {...this.props} />
            }
            return null
        }
    }
    return AsyncComponent
}

export default LazyLoad