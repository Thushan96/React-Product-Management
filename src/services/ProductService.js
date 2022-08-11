import axios from "axios";
class ProductService{
    fetchLimitGetAllProducts = async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('products',{params:params})
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
    };

    postProduct = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('products',data)
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
export default new ProductService()