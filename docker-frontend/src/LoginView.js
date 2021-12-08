import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { Container, Grid } from 'semantic-ui-react'
import { logInAction } from './authSlice'
import LoginForm from './LoginForm'

const LoginView = () => {    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onSubmitClick = user => {
        dispatch(logInAction(user))
        navigate('/user')
    }

    return (
        <Container>
            <Grid centered>
                <Grid.Column width={8}>
                    <LoginForm
                        onSubmit={user => onSubmitClick(user)}
                    />
                </Grid.Column>
            </Grid>
        </Container>
    )
}

export default LoginView
