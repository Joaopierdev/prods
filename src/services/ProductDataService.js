import http from "../http-common";

class ProductDataService {
    getAll(){
        return http.get("/produtos");
    }

    deleteProduct(id){
        return http.delete(`/produtos/${id}`);
    }

    // create(data){
    //     return http.post("/posts", data)
    // }
}

export default new ProductDataService();
