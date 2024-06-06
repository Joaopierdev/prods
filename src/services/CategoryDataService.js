import http from "../http-common";

class CategoryDataService {
    getAll(){
        return http.get("/categorias");
    }

    create(category){
        return http.post("/categorias", category)
    }

    deleteCategory(id){
        return http.delete(`/categorias/${id}`);
    }

    // create(data){
    //     return http.post("/posts", data)
    // }
}

export default new CategoryDataService();
