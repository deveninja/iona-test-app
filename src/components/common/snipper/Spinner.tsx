import { Spinner } from 'react-bootstrap'

import styles from './spinner.module.scss'

const SpinnerComponent: React.FC<{ message?: string }> = ({ message }: { message?: string }) => {
    return (
        <div className={styles.spinnerComponentWrapper}>
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
            {
                message &&
                <h1>{message}</h1>
            }
        </div>
    )
}

export default SpinnerComponent