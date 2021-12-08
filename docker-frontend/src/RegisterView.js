import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Grid, Loader, Message } from 'semantic-ui-react'
import { registerAction, resetRegisterStatus } from './authSlice'
import RegisterForm from './RegisterForm'

const RegisterView = () => {
    const registerStatus = useSelector(state => state.auth.registerStatus)
    const isRegiserLoading = useSelector(state => state.auth.isRegiserLoading)
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const dispatch = useDispatch()

    const onSubmitClick = user => {
        dispatch(registerAction(user))
    }

    useEffect(() => {
        if (registerStatus === 'failed'){
            setShowErrorMessage(true)
            setTimeout(() => {
                setShowErrorMessage(false)
            }, 3000)
        }
        if (registerStatus === 'successful'){
            setShowSuccessMessage(true)
            setTimeout(() => {
                setShowSuccessMessage(false)                
            }, 3000)
        }
        return (() => dispatch(resetRegisterStatus()))
    }, [registerStatus, dispatch])

    return (
        <Container>
            <Grid centered>
                <Grid.Column width={8}>
                    <RegisterForm
                        onSubmit={user => onSubmitClick(user)}
                    />
                    {isRegiserLoading &&
                        <Loader active inline='centered' />}
                    {showErrorMessage && (
                        <Message negative>
                            Failed to register
                        </Message>
                    )}
                    {showSuccessMessage && (
                        <Message positive>
                            Registered successfully
                        </Message>
                    )}
                </Grid.Column>
            </Grid>
        </Container>
    )
}

export default RegisterView
