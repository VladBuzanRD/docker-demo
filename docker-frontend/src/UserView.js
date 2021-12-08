import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'
import { Container, Grid, Loader } from 'semantic-ui-react'
import UserCard from './UserCard'

const UserView = () => {
    const isUserLoading = useSelector(state => state.auth.isUserLoading)
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    const user = useSelector(state => state.auth.user)

    if (isUserLoading) {
        return (
            <Loader active inline='centered' />
        )
    }

    if (isLoggedIn) {
        return (
            <Container>
                <Grid centered>
                    <Grid.Column width={8}>
                        <UserCard user={user} />
                    </Grid.Column>
                </Grid>
            </Container>
        )
    } else {
        return (
            <Navigate to='/' />
        )
    }
}

export default UserView
