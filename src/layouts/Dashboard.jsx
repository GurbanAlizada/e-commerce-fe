import React from 'react'
import ProductList from '../pages/ProductList'
import Categories from './Categories'
import Navi from './Navi'
import { Grid } from 'semantic-ui-react';
import { Route, Routes } from 'react-router';
import ProductDetail from '../pages/ProductDetail';
import CartDetail from '../pages/CartDetail';
import CategoryList from '../pages/CategoryList';
import ProductWithCategory from '../pages/ProductWithCategory';
/*

import React from 'react'
import React, { useEffect, useState } from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import CategoryService from '../services/categoryService'




export default function CategoryList() {
 
 
    const [categories, setCategories] = useState([])



    useEffect(()=>{

      let categoryService = new CategoryService();
      categoryService.getCategories().then(result=>setProducts(result.data.data))
    },[])

 
    return (


   






    <div>



<Table celled>

<Table.Header>
  <Table.Row>
   
   
    <Table.HeaderCell>Kategoriler</Table.HeaderCell>

  </Table.Row>
</Table.Header>

<Table.Body>

    {
      
      categories.map(c=>(
        <Table.Row  key={c.id}>
        <Table.Cell>{c.categoryName}</Table.Cell>
       </Table.Row>
        
      ))
    }
 
 

</Table.Body>


</Table>  



    </div>
  )
}


*/


export default function Dashboard() {
  return (
    <div>



      <Grid>
        <Grid.Row>
          <Grid.Column width = {4}>
          <CategoryList />
          </Grid.Column>
          <Grid.Column width = {12}>
        


                <Routes>


                <Route exact path='/' element={<ProductList/>}  />
                <Route exact path='/products' element={<ProductList/>}  />
                <Route path='/products/:id' element={<ProductDetail/>}  />
                <Route path='/cart' element={<CartDetail/>}  />
                <Route path='/productWithCategory/:id' element={<ProductWithCategory/>} />




                </Routes>






          </Grid.Column>
        </Grid.Row>
      </Grid>
      
     
      

    </div>
  )
}

