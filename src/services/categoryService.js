import axios from 'axios'

export default class categoryService{
  


    getCategories(){
    return axios.get("http://localhost:8080/api/categories/getall")
    }




    getProductWithCategory(id){
        return axios.get("http://localhost:8080/api/categories/getById?id="+id)
    }


}
