import { Nav } from 'react-bootstrap'

export const Header = () => {
    return (
        <Nav>
            <Nav.Item className='logo'>
                <img src='/images/lative-logo.svg' alt='Lative Software' />
            </Nav.Item>
        </Nav>
    )
}
