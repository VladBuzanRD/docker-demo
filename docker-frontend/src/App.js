import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Button, Container, Grid } from 'semantic-ui-react'

const App = () => {
  return (
    <Container>
      <Grid columns={2} centered stackable>
        <Grid.Column verticalAlign='middle'>
          <Button
            content={'Log in'}
            size='big'
            as={Link} to='/login'
          />
        </Grid.Column>
        <Grid.Column verticalAlign='middle'>
          <Button
            content={'Register'}
            size='big'
            as={Link} to='/register'
          />
        </Grid.Column>
      </Grid>
      <Outlet />
    </Container>
  )
}

export default App
