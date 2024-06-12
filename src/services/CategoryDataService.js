import http from "../http-common";

class CategoryDataService {
    async getAll(nome, status){
        const params = {
            nomeCategoria: nome,
            status: status
        }

        return await http.get(`/categorias`, {params: params});
    }

    create(category){
        return http.post("/categorias", category)
    }

    editCategory(id, category){
        return http.put(`/categorias/${id}`, category)
    }


    deleteCategory(id){
        return http.delete(`/categorias/${id}`);
    }

    // create(data){
    //     return http.post("/posts", data)
    // }
}

export default new CategoryDataService();
