import React, { useEffect, useState } from 'react'
import { Menu, Container  } from 'semantic-ui-react'
import CategoryService from '../services/categoryService'
import { Link } from 'react-router-dom'




export default function CategoryList() {


  const [categories, setCategories] = useState([])



  useEffect(() => {

    let categoryService = new CategoryService();
    categoryService.getCategories().then(result => setCategories(result.data.data))
  }, [])


  return (



    <div>


        <Container >

        <Menu pointing vertical style={{marginTop : "1em"}}>

          <Menu.Item style={{background:"black" , color : "white"}}>Kategoriler</Menu.Item>

        {
          categories.map(c=>(

            <Menu.Item  key={c.id} > <Link to={`/productWithCategory/${c.id}`} >{c.categoryName}</Link> </Menu.Item>
            

          ))

        }
        
       
      </Menu>

      </Container>



    </div>
  )
}
