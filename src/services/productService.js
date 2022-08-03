import axios from "axios";

export default class productService{


    getProducts(){
        return axios.get("http://localhost:8080/api/products/getall")
    }

    getProductById(id){
        return axios.get("http://localhost:8080/api/products/"+id)
    }


}