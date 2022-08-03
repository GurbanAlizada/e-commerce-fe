import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import ProductService from '../services/productService'

export default function ProductList() {

    const [products, setProducts] = useState([])



    useEffect(()=>{

      let productService = new ProductService();
      productService.getProducts().then(result=>setProducts(result.data.data))
    },[])



  return (
    <div>
      <Table celled style = {{marginTop : "1em"}}>

        <Table.Header >
          <Table.Row  >
           
            <Table.HeaderCell style={{background:"black" , color : "white"}}>Urun Adi</Table.HeaderCell>
            <Table.HeaderCell style={{background:"black" , color : "white"}}>Fiyati</Table.HeaderCell>
            <Table.HeaderCell style={{background:"black" , color : "white"}}>Stok adedi</Table.HeaderCell>
            <Table.HeaderCell style={{background:"black" , color : "white"}}>Aciklama</Table.HeaderCell>
            <Table.HeaderCell style={{background:"black" , color : "white"}}>Kategory</Table.HeaderCell>

          </Table.Row>
        </Table.Header>

        <Table.Body>

            {

              products.map(product=>(
                <Table.Row  key={product.id}>
                <Table.Cell><Link to={`/products/${product.id}`} >{product.productName}</Link></Table.Cell>
                <Table.Cell>{product.unitPrice}</Table.Cell>
                <Table.Cell>{product.unitsInStock}</Table.Cell>
                <Table.Cell>{product.quantityPerUnit}</Table.Cell>
                <Table.Cell>{product.productCategoryDto.categoryName}</Table.Cell>


              </Table.Row>
                
              ))
            }
         
         
    
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='3'>
              <Menu floated='right' pagination>
                <Menu.Item as='a' icon>
                  <Icon name='chevron left' />
                </Menu.Item>
                <Menu.Item as='a'>1</Menu.Item>
                <Menu.Item as='a'>2</Menu.Item>
                <Menu.Item as='a'>3</Menu.Item>
                <Menu.Item as='a'>4</Menu.Item>
                <Menu.Item as='a' icon>
                  <Icon name='chevron right' />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>    </div>
  )
}
