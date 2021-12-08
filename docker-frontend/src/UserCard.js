import React from 'react'
import { Card, Container, Icon } from 'semantic-ui-react'

const UserCard = ({ user }) => {
    return (
        <Container>
            <Card>
                <Container textAlign='center'>
                    <Icon name='smile' size='huge' />
                </Container>
                <Card.Content>
                    <Card.Header>{user.username}</Card.Header>
                    First name: {user.firstName} <br />
                    Last name: {user.lastName}
                </Card.Content>
            </Card>
        </Container>
    )
}

export default UserCard
