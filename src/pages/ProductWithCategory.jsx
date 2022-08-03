import React, { useEffect, useState } from 'react'
import { Menu, Table  } from 'semantic-ui-react'
import CategoryService from '../services/categoryService'
import { Link, useParams } from 'react-router-dom'

export default function ProductWithCategory() {
 
    let{id} = useParams()
 
 
    const [categories, setCategories] = useState({})



  useEffect(() => {

    let categoryService = new CategoryService();
    categoryService.getProductWithCategory(id).then(result => setCategories(result.data.data))
  }, [])
 
 
 
 
 
 
    return (
    <div>













    </div>
  )
}


/*



<Table celled style = {{marginTop : "1em"}}>

<Table.Header >
  <Table.Row  >
   
    <Table.HeaderCell style={{background:"black" , color : "white"}}>Urun Adi</Table.HeaderCell>
    <Table.HeaderCell style={{background:"black" , color : "white"}}>Fiyati</Table.HeaderCell>
    <Table.HeaderCell style={{background:"black" , color : "white"}}>Stok adedi</Table.HeaderCell>
    <Table.HeaderCell style={{background:"black" , color : "white"}}>Aciklama</Table.HeaderCell>

  </Table.Row>
</Table.Header>

<Table.Body >

    {

        (categories.products).map(c=>(
        <Table.Row  key={c.products.id}>

        <Table.Cell>{c.productName}</Table.Cell>
        <Table.Cell>{c.unitPrice}</Table.Cell>
        <Table.Cell>{c.unitsInStock}</Table.Cell>
        <Table.Cell>{c.quantityPerUnit}</Table.Cell>

        </Table.Row>
        
      ))
    }
 
 
</Table.Body>

</Table>






*/