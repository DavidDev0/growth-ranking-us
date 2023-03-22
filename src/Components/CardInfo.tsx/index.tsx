import { Col, Row } from 'react-bootstrap'
import './styles.scss'

interface Props {
    title: string
    subtitle: string
    value: string
}
export const CardInfo = ({ title, subtitle, value }: Props) => {
    return (
        <div className='card-state'>
            <Row className='p-4 '>
                <Col xs={7}>
                    <p className='fw-bolder fs-3 title'>{title}</p>
                    <p className='text-start inline'>{subtitle}</p>
                </Col>

                <Col className='text-end align-bottom'>
                    <p className='fs-2 align-bottom'>{value}</p>
                </Col>
            </Row>
        </div>
    )
}
