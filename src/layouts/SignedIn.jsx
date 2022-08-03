import React from 'react'
import { Dropdown, Menu , Image } from 'semantic-ui-react'


export default function SignedIn({signOut}) {
  return (
    <div>



<Menu.Item>

<Image avatar spaced = "right" src = "https://img.a.transfermarkt.technology/portrait/big/216603-1622208818.jpg?lm=1" />


<Dropdown pointing ="top left" text='Qurban'>
    <Dropdown.Menu>
        <Dropdown.Item text="Bilgilerim" icon="info"  />
        <Dropdown.Item text="Cikis Yap" icon="sign out"  onClick={signOut}/>

            
  

    </Dropdown.Menu>
</Dropdown>


</Menu.Item>



    </div>
  )
}
