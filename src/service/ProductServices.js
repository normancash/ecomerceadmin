import axios from 'axios';

const URL = "http://localhost:8181/api/product";

class ProductServices {

    getAll(){
        return axios.get(URL + "/list").then(res => res.data);
    }

    
}

export default ProductServices