import React, { useState } from 'react'
import { Container, Form } from 'semantic-ui-react'

const LoginForm = ({onSubmit}) => {
    const [user, setUser] = useState({
        username: '',
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
                    label='Password'
                    value={user.password}
                    type='password'
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

export default LoginForm
