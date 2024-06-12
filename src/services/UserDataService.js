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

    deleteUser(id){
        return http.delete(`/usuarios/${id}`);
    }

    create(data){
        return http.post("/usuarios", data)
    }
}

export default new UserDataService();
