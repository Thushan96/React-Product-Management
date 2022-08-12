import axios from "../axios";

class CartService{
    postCart = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('carts', data)
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
    };

    deleteCart = async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.delete('carts', {params:params})
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
    };

    fetchCart = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('carts')
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    };

    fetchAsingleCart= async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.get('carts',{params:params})
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
    };

    fetchLimitGetAllCart= async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.get('carts',{params:params})
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
    };

    putCart= async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.put('carts',data)
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

export default new CartService()