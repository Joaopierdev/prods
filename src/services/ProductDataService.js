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

    editProduct(id, data){
        const params = {
            status: data.status,
            nome: data.nome,
            idCategoria: data.idCategoria,
            preco: data.preco,
            estoque: data.estoque
        }
        return http.put(`/produtos/${id}`, params)
    }

    create(data, categoryId) {
        return http.post(`/produtos/?IdCategoria=${categoryId}`, data)
    }
}

export default new ProductDataService();
