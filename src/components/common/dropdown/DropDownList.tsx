import { DropDownProps, DropDownType } from 'interfaces/dropdown'
import { useCallback } from 'react'
import { Form } from 'react-bootstrap'

import styles from './dropdown.module.scss'

const DropDown: React.FC<DropDownProps> = (props: DropDownProps) => {
    const { options, onChange, selected } = props

    const renderDropDown = useCallback((arr: DropDownType[]) => {
        return arr.map((item: DropDownType, index: number) => {
            return (
                <option key={item.id + index} value={item.id}>{item.name}</option>
            )
        })
    }, [])

    return (
        <Form.Select
            aria-label="Default select example"
            className={styles.dropDown}
            value={selected}
            onChange={onChange}
        >
            <option value="" disabled>Select Breed</option>
            {renderDropDown(options)}
        </Form.Select>
    )
}

export default DropDown