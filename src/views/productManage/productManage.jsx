import React, {Component} from "react";
import {Autocomplete, Grid} from "@mui/material";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ProductService from "../../services/ProductService";
import PersonIcon from '@mui/icons-material/Person'
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";






class ProductManage extends Component{
    constructor(props) {
        super(props);
        this.state = {

            productData: {
                title: '',
                price: '',
                description: '',
                image: 'https://i.pravatar.cc',
                category: ''
            },

            categoryTypes: [
                {
                    type: 'Electronic'
                },
                {
                    type: 'Medium'
                },
                {
                    type: 'Large'
                }
            ],

            alert: false,
            message: '',
            severity: '',

            data: [],
        }
    }



    clearFields = () => {
        this.setState({
            productData: {
                title: '',
                price: '',
                description: '',
                image: '',
                category: ''
            },
        });
    };

    loadData = async () => {
        let res = await ProductService.fetchProduct();

        if (res.status === 200) {
            this.setState({
                data: res.data.data
            });
        }
        console.log(this.state.data)    // print customers array

    };

    getAllProductCategories = async () => {
        let res = await ProductService.fetchLimitGetAllProducts();

        if (res.status === 200) {
            this.setState({
                data: res.data.data
            });
        }
        console.log(this.state.data)

    };

    submitProduct = async () => {
        let formData = this.state.productData;

        let res = await ProductService.postProduct(formData);
        if (res.status === 200) {
            this.setState({
                alert: true,
                message: 'Product Successfully Added',
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


    render() {
        return(
            <>
                <ValidatorForm ref="form"  onSubmit={this.submitProduct}>

                <div style={{backgroundColor:"aqua"}}>
               <h1 style={{marginLeft:"2rem"}}>Products Manage</h1>
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
                        <TextField
                            id="outlined-Tittle-input"
                            label="Tittle"
                            type="text"
                            onChange={(e) => {
                                console.log(e.target.value)
                                let formData = this.state.productData
                                formData.title = e.target.value
                                console.log(formData.title)
                                this.setState({ formData })
                            }}
                            autoComplete="off"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextValidator
                            id="outlinedbasic"
                            placeholder=""
                            variant="outlined"
                            size="small"
                            label="Price"
                            value={this.state.productData.price}
                            onChange={(e) => {
                                let formData = this.state.productData
                                formData.price = e.target.value
                                console.log(formData.price)
                                this.setState({ formData })
                            }}
                            validators={['required']}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Autocomplete
                            onChange={(e, value, r) => {

                                let formData = this.state.productData
                                formData.category = value.type
                                console.log(formData.category)
                                this.setState({formData})

                            }}
                            getOptionLabel={
                                (option) => option.type
                            }
                            style={{width: '40vw'}}
                            id="controllable-states-demo"
                            options={this.state.categoryTypes}
                            size="small"
                            renderInput={(params) => <TextField {...params} label="Category"/>}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <TextValidator

                            id="outlined-multiline-flexible"
                            placeholder="Description"
                            variant="outlined"
                            multiline
                            maxRows={4}
                            label="Description"
                            value={this.state.productData.description}
                            onChange={(e) => {
                                let formData = this.state.productData
                                formData.description = e.target.value
                                console.log(formData.description)
                                this.setState({ formData })
                            }}
                            validators={['required']}
                        />
                    </Grid>
                </Grid>
                        <Grid width="100%" container direction="row" justifyContent="flex-start" alignItems="center">
                            <div >
                                <PersonIcon style={{color:'D9D9D9',fontSize:'180px'}}/>
                            </div>
                            <div><input

                                style={{display: 'none'}}
                                accept="image/*"
                                // className={classes.input}
                                id="contained-button-file01"
                                multiple
                                type="file"
                                // onChange={(e) => {
                                //     this.setState({
                                //         frontImage: e.target.files[0],
                                //         frontView : URL.createObjectURL(e.target.files[0])
                                //     })
                                // }}
                            />
                                <label htmlFor="contained-button-file01">
                                    <Button variant="contained" size="small" component="span"
                                            style={{margin:'40px 0 0 20px',backgroundColor:'white',color:'black'}}
                                    >
                                        Choose Image
                                    </Button>
                                </label>

                            </div>
                        </Grid>
                </Box>
                <div>
           <Stack direction="row" spacing={2}  justifyContent={"end"} marginRight={40}>
                    <Grid item xs={3}>
                        <Button variant="contained" color="error">Clear</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained" type={"submit"} color="success">Save</Button>
                    </Grid>
           </Stack>
                </div>
            </ValidatorForm>

            </>
        )
    }

}

export default ProductManage;