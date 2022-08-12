import React, {Component} from "react";
import {Autocomplete, Grid} from "@mui/material";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DatePicker from "react-datepicker";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import CartService from "../../services/CartService";




class CartManage extends Component{
    constructor(props) {
        super(props);
        this.state = {

            cartData: {
                userId: '',
                date: '',
                products: [
                    {
                        productId: '',
                        quantity: ''
                    }
                ]
            },

            user: [
                // {
                //     email: '',
                //     username: '',
                //     password: '',
                //     name: {
                //         firstname: '',
                //         lastname: ''
                //     },
                //     address: {
                //         city: '',
                //         street: '',
                //         number: '',
                //         zipcode: '',
                //         geolocation: {
                //             lat: '',
                //             long: ''
                //         }
                //     },
                //     phone: ''
                // }
                {
                    address: {
                        geolocation: {
                            lat: "-37.3159",
                            long: "81.1496"
                        },
                        city: "kilcoole",
                        street: "new road",
                        number: 7682,
                        zipcode: "12926-3874"
                    },
                    id: 1,
                    email: "john@gmail.com",
                    username: "johnd",
                    password: "m38rmF$",
                    name: {
                        firstname: "john",
                        lastname: "doe"
                    },
                    phone: "1-570-236-7033",
                    __v: 0
                },
                {
                    address: {
                        geolocation: {
                            lat: "-37.3159",
                            long: "81.1496"
                        },
                        city: "kilcoole",
                        street: "Lovers Ln",
                        number: 7267,
                        zipcode: "12926-3874"
                    },
                    id: 2,
                    email: "morrison@gmail.com",
                    username: "mor_2314",
                    password: "83r5^_",
                    name: {
                        firstname: "david",
                        lastname: "morrison"
                    },
                    phone: "1-570-236-7033",
                    __v: 0
                },
            ],

            productTitles: [

                // {
                //     title: '',
                //     price: '',
                //     description: '',
                //     image: '',
                //     category: ''
                // }

                {
                    id: 1,
                    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                    price: 109.95,
                    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                    category: "men's clothing",
                    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                    rating: {
                        rate: 3.9,
                        count: 120
                    }
                },
                {
                    id: 2,
                    title: "Mens Casual Premium Slim Fit T-Shirts ",
                    price: 22.3,
                    description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
                    category: "men's clothing",
                    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
                    rating: {
                        rate: 4.1,
                        count: 259
                    }
                },
                {
                    id: 3,
                    title: "Mens Cotton Jacket",
                    price: 55.99,
                    description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
                    category: "men's clothing",
                    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
                    rating: {
                        rate: 4.7,
                        count: 500
                    }
                },
            ],
        }
    }

    submitCart = async () => {

        let formData = this.state.cartData;

        let res = await CartService.postCart(formData);
        if (res.status === 200) {
            this.setState({
                alert: true,
                message: 'Cart Successfully Added',
                severity: 'success',
            });
            this.clearFields();
            //this.loadData();
        } else {
            this.setState({
                alert: true,
                message: res.response.data.message,
                severity: 'error'
            });
        }
    };

    putCart = async () => {

        let formData = this.state.cartData;

        let res = await CartService.putCart(formData);
        if (res.status === 200) {
            this.setState({
                alert: true,
                message: 'Cart Successfully Updated',
                severity: 'success',
            });
            this.clearFields();
            //this.loadData();
        } else {
            this.setState({
                alert: true,
                message: res.response.data.message,
                severity: 'error'
            });
        }
    };

    getSingleCart = async (id) => {


        let params={
            id: id
        }

        let res = await CartService.fetchAsingleCart(params);
        if (res.status === 200) {
            this.setState({
                alert: true,
                message: 'single cart fetched',
                severity: 'success',
            });
            this.clearFields();
            //this.loadData();
        } else {
            this.setState({
                alert: true,
                message: res.response.data.message,
                severity: 'error'
            });
        }
    };





    deleteCart = async (id) => {
        let params = {
            id: id
        }
        let res = await CartService.deleteCart(params);
        console.log(res)

        if (res.status === 200) {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'success'
            });
            //this.loadData();
        } else {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'error'
            });
        }
    };


    render() {
        return(
            <>
                <ValidatorForm ref="form"  onSubmit={this.submitCart}>
                <div style={{backgroundColor:"aqua"}}>
                    <h1 style={{marginLeft:"2rem"}}>Cart Manage</h1>
                </div>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '50ch', marginLeft:"2rem"},
                    }}
                    noValidate
                    autoComplete="off"
                >

                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <Autocomplete
                                getOptionLabel={
                                    (option) => option.username
                                }
                                onChange={(e, value) => {
                                    console.log(value.id)
                                    let formData = this.state.cartData
                                    formData.products.p = value.id
                                    this.setState({ formData });
                                }}
                                style={{width: '40vw'}}
                                id="controllable-states-demo"
                                options={this.state.user}
                                renderInput={(params) => <TextField {...params} label="User Name"/>}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                id="outlined-description"
                                type="date"
                                value={this.state.cartData.date}
                                onChange={(e) => {
                                    let formData = this.state.cartData
                                    formData.date = e.target.value
                                    this.setState({ formData })
                                }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Autocomplete
                                getOptionLabel={
                                    (option) => option.title
                                }
                                onChange={(e, value) => {
                                    console.log(value.id)
                                    let formData = this.state.cartData
                                    formData.userId = value.id
                                    this.setState({ formData });
                                }}
                                style={{width: '40vw'}}
                                id="controllable-states-demo"
                                options={this.state.productTitles}
                                size="small"
                                renderInput={(params) => <TextField {...params} label="Product Title"/>}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                                id="outlined-description"
                                label="Description"
                                placeholder="Placeholder"
                                multiline
                                value={this.state.cartData.products.quantity}
                                onChange={(e) => {
                                    let formData = this.state.cartData.products
                                    formData.quantity = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>
                    </Grid>
                </Box>
                <div>
                    <Stack direction="row" spacing={2}  justifyContent={"end"} marginRight={40}>
                        <Grid item xs={3}>
                            <Button variant="contained" color="error">Clear</Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant="contained" color="success">Save</Button>
                        </Grid>
                    </Stack>
                </div>
                </ValidatorForm>

            </>
        )
    }

}

export default CartManage;