import http from "../http-common";

class ProductDataService {
    async getAll(nome, idCategoria, status) {
        const params = {
            NomeProduto: nome,
            idCategoria: idCategoria,
            status: status
        }
        
        return await http.get(`/produtos`, { params: params });
    }

    deleteProduct(id) {
        return http.delete(`/produtos/${id}`);
    }

    create(data, categoryId) {
        return http.post(`/produtos/?IdCategoria=${categoryId}`, data)
    }
}

export default new ProductDataService();
