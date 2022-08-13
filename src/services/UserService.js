import axios from "../axios";

class UserService{
    postUser = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('users', data)
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
    };

    fetchUser = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('users')
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
    };

    deleteUser = async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.get('users',{params:params})
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
    };



}

export default new UserService()