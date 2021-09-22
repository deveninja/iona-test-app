import { Provider } from 'react-redux';
import Store from 'store';

/**
 * @description - This will be used to improve testing suites and
 * as single source of provider wrapper
 * @param param0 - children props
 * @returns Provider wrapper for all children
 */
const Root: React.FC = ({ children }) => {
    return (
        <Provider store={Store}>
            {children}
        </Provider>
    )
}

export default Root