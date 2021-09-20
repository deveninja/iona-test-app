import { Spinner } from 'react-bootstrap'

import styles from './spinner.module.scss'

const SpinnerComponent = () => {
    return (
        <div className={styles.spinnerWrapper}>
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    )
}

export default SpinnerComponent