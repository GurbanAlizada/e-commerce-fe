import React from 'react';
import { Button, Dropdown, Menu , Container } from 'semantic-ui-react';


export default function Navi() {
    return (
        <div>



        <Container>

            <Menu inverted fixed>
                <Menu.Item
                    name='home'
                    
                />
                <Menu.Item
                    name='messages'
                    
                />

                <Menu.Menu position='right'>
                    <Dropdown item text='Language'>
                        <Dropdown.Menu>
                            <Dropdown.Item>English</Dropdown.Item>
                            <Dropdown.Item>Russian</Dropdown.Item>
                            <Dropdown.Item>Spanish</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Menu.Item>
                        <Button primary>Sign Up</Button>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
            </Container>


        </div>
    )
}
