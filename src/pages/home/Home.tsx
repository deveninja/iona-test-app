import CardComponent from 'components/common/card/Card';
import { useMemo } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router-dom';

import styles from './home.module.scss'

const HomePage: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {

    const dogImg = useMemo(() => ('https://i.pinimg.com/originals/de/41/7f/de417fa33ab730fab446d44b7749703d.jpg'), [])

    const catImg = useMemo(() => ('https://i.pinimg.com/originals/83/01/aa/8301aa7d789494566ea9ea1e229c5a36.jpg'), [])

    const { match, location } = props

    return (
        <Container className={styles.home}>
            <Row className={styles.row}>
                <>
                    <h1>Select Species</h1>
                    <Col lg={true} className={styles.card}>
                        <CardComponent
                            imgSrc={catImg}
                            title="Feline"
                            size="300px"
                            link={{
                                to: `${match.path}cats`,
                                prevPath: location.pathname
                            }}
                        />
                    </Col>
                    <Col lg={true} className={styles.card}>
                        <CardComponent
                            imgSrc={dogImg}
                            title="Canine"
                            size="300px"
                            link={{
                                to: `${match.path}dogs`,
                                prevPath: location.pathname
                            }}
                        />
                    </Col>
                </>
            </Row>
        </Container>
    )
}

export default HomePage