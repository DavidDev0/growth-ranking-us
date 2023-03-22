import { Col, Form, Row } from 'react-bootstrap'
import { SelectForm } from '../Components/SelectForm'
import { OPTIONS_GROWTH, OPTIONS_MEASURES, OPTIONS_YEAR } from './Constants'

interface Props {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
export const Filter = ({ onChange }: Props) => {
    return (
        <Form onChange={onChange as any}>
            <Row>
                <Col>
                    <SelectForm label='Year' options={OPTIONS_YEAR} name='year' />
                </Col>
                <Col>
                    <SelectForm label='Measure' options={OPTIONS_MEASURES} name='measure' />
                </Col>
                <Col>
                    <SelectForm label='Growth period' options={OPTIONS_GROWTH} name='period' />
                </Col>
            </Row>
        </Form>
    )
}
