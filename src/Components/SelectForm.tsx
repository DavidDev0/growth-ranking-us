import { FormEventHandler } from 'react'
import { Form } from 'react-bootstrap'

interface Props {
    options: string[]
    label: string
    onChange?: FormEventHandler<any> | undefined
    name: string
}
export const SelectForm = ({ options, label, name, onChange }: Props) => {
    return (
        <Form.Group onChange={onChange}>
            <Form.Label>{label}</Form.Label>
            <Form.Control as='select' name={name}>
                {options.map((item) => (
                    <option key={item}>{item}</option>
                ))}
            </Form.Control>
        </Form.Group>
    )
}
