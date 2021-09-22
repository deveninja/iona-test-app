import { CardComponentType } from 'interfaces/cardComponent'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import styles from './card.module.scss'


const CardComponent = (props: CardComponentType) => {

    const {
        imgSrc,
        title,
        btnLabel,
        text,
        link,
        size
    } = props

    return (
        <Card
            key={link?.to}
            style={{ width: size }}
            className={styles.card}
        >
            <Link
                to={{ pathname: link?.to, state: { prevPath: link?.prevPath } }}
                style={{ textDecoration: 'none' }}
            >
                <div className={styles.imageWrapper}>
                    <img src={imgSrc} alt="pet" />
                </div>
                <Card.Body>
                    {title && <Card.Title>{title}</Card.Title>}
                    {text && <Card.Text>{text}</Card.Text>}
                    {btnLabel && <Button variant="secondary">{btnLabel}</Button>}

                </Card.Body>
            </Link>
        </Card>
    )
}

export default CardComponent