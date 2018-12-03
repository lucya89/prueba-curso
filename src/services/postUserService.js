import api from './api'

export default{
    register(credentials) {
        return api().post('add_user',credentials)
    }
}