import $api from '../http/index';


export default class AuthService{

    static async login(email, password):Promise{
        return $api.post('/login',  {email, password})
    }

    static async registration(username, email, password):Promise{
        return $api.post('/register',  {username, email, password})
    }

    static async logout():Promise{
        return $api.post('/logout')
    }

    static async getRole():Promise{
        return $api.get('/user_role')
    }
}