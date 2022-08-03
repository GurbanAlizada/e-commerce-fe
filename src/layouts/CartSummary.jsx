import React from 'react'
import { NavLink } from 'react-router-dom';
import { Button, Dropdown, Menu , Container } from 'semantic-ui-react';


export default function CartSummary() {
  return (
    <div>
        
        <Dropdown item text='Sepetiniz'>
            <Dropdown.Menu>
              <Dropdown.Item>Acer</Dropdown.Item>
              <Dropdown.Item>Asus</Dropdown.Item>
              <Dropdown.Item>HP</Dropdown.Item>
              <Dropdown.Divider></Dropdown.Divider>
              <Dropdown.Item as={NavLink}  to="cart" >Sepete Git</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>


    </div>
  )
}
