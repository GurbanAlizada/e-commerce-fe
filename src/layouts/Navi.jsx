import React, { useState } from 'react';
import { Button , Menu , Container } from 'semantic-ui-react';
import CartSummary from './CartSummary'
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';

export default function Navi() {

    const [isAuthenticated, setIsAuthenticated] = useState(true)



        function handleSignOut(params) {
            setIsAuthenticated(false);
        }

        function handleSignIn(params) {
            setIsAuthenticated(true);
        }



    return (
        <div>



        

            <Menu inverted fixed="top">
            <Container>
                <Menu.Item
                    name='home'
                    
                />
                <Menu.Item
                    name='messages'
                    
                />

                <Menu.Menu position='right'>
                    <CartSummary/>

                    {isAuthenticated?<SignedIn signOut = {handleSignOut} />:<SignedOut signIn={handleSignIn} />}
                   
                   

                </Menu.Menu>
                </Container>
            </Menu>
           


        </div>
    )
}
