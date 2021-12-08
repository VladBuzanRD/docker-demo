import React, { useState } from 'react'
import { Container, Form } from 'semantic-ui-react'

const RegisterForm = ({ onSubmit }) => {
    const [user, setUser] = useState({
        username: '',
        firstName: '',
        lastName: '',
        password: ''
    })

    return (
        <Container textAlign='center'>
            <Form size='big'>
                <Form.Input
                    label='Username'
                    placeholder='username'
                    value={user.username}
                    onChange={e => setUser({
                        ...user,
                        username: e.target.value
                    })}
                />
                <Form.Input
                    label='Firstname'
                    placeholder='firstname'
                    value={user.firstname}
                    onChange={e => setUser({
                        ...user,
                        firstName: e.target.value
                    })}
                />
                <Form.Input
                    label='Lastname'
                    placeholder='lastname'
                    value={user.lastname}
                    onChange={e => setUser({
                        ...user,
                        lastName: e.target.value
                    })}
                />
                <Form.Input
                    label='Password'
                    type='password'
                    value={user.password}
                    onChange={e => setUser({
                        ...user,
                        password: e.target.value
                    })}
                />
                <Form.Button
                    content={'Submit'}
                    onClick={() => onSubmit(user)}
                />
            </Form>
        </Container>
    )
}

export default RegisterForm
