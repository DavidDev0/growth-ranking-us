import { Container, Row, Col, Spinner } from 'react-bootstrap'
import { CardInfo } from '../Components/CardInfo.tsx'
import { ItemCardModel, RequestStatusModel } from './Types'
interface Props {
    data: ItemCardModel[]
    status: RequestStatusModel
}
export const WrapperStates = ({ data, status }: Props) => {
    return (
        <div className='results'>
            <Container className='results-container'>
                {status === 'loading' ? (
                    <div className='d-flex justify-content-center pt-5'>
                        <Spinner animation='border' variant='light' />
                    </div>
                ) : (
                    <Row className='pt-2'>
                        {status === 'error' && (
                            <p className='d-flex justify-content-center pt-5 text-white'>
                                Unable to load data, please try again later
                            </p>
                        )}
                        {data.length === 0 ? (
                            <p className='d-flex justify-content-center pt-5 text-white'>
                                There is not data
                            </p>
                        ) : (
                            <>
                                {data.map((item, index) => {
                                    const value = item.value.toLocaleString('en-GB')
                                    return (
                                        <Col xs={6} key={index.toString()}>
                                            <CardInfo
                                                value={value}
                                                title={item.state}
                                                subtitle={`${item.growth.toFixed(2)}% Growth`}
                                            />
                                        </Col>
                                    )
                                })}
                            </>
                        )}
                    </Row>
                )}
            </Container>
        </div>
    )
}
