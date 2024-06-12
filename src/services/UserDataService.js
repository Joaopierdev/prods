import http from "../http-common";

class UserDataService {
    getAll(apelido, email, status){
        const params = {
            status: status,
            ApelidoUsuario: apelido,
            email: email

        }

        return http.get(`/usuarios`, {params: params});
    }

    create(data){
        return http.post("/usuarios", data)
    }

    editUser(id, data){
        return http.put(`/usuarios/${id}`, data)
    }

    deleteUser(id){
        return http.delete(`/usuarios/${id}`);
    }

    
}

export default new UserDataService();
