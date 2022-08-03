import React from 'react'
import { Menu , Container } from 'semantic-ui-react'

export default function Categories() {
  return (
    <div>


        <Container>
          <Menu pointing vertical>
        <Menu.Item
          name='home'
         
        />
        <Menu.Item
          name='messages'
          
        />
        <Menu.Item
          name='friends'
          
        />
      </Menu>
      </Container>


    </div>
  )
}
