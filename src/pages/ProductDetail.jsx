import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Button, Card, Image } from 'semantic-ui-react'
import Categories from '../layouts/Categories';
import ProductService from '../services/productService'



export default function ProductDetail() {

    let { id } = useParams();



    const [product, setProduct] = useState({});

    
    useEffect(()=>{

      let productService = new ProductService();
      productService.getProductById(id).then(result=>setProduct(result.data.data))
    },[])





    return (



        <div>


            <Card.Group>
                <Card fluid style = {{marginTop : "15em"}}>
                    <Card.Content>
                
                        <Card.Header>{product.productName}</Card.Header>
                        <Card.Meta>{product.unitPrice} $ </Card.Meta>
                        
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>
                                Sepete Ekle
                            </Button>
                            <Button basic color='red'>
                                Favorilere Ekle
                            </Button>
                        </div>


                    </Card.Content>
                
                </Card>
               
            </Card.Group>


        </div>

    )
}
