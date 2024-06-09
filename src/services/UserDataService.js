import http from "../http-common";

class UserDataService {
    getAll(){
        return http.get("/usuarios");
    }

    deleteProduct(id){
        return http.delete(`/usuarios/${id}`);
    }

    create(data){
        return http.post("/usuarios", data)
    }
}

export default new UserDataService();
