import React, {Component} from "react";
import {Grid} from "@mui/material";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DatePicker from "react-datepicker";



class CartManage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                id: '',
                name: '',
                address: '',
                salary: ''
            },
            alert: false,
            message: '',
            severity: '',

            data: [],
            btnLabel: 'save',
            btnColor: 'primary'
        }
    }


    render() {
        return(
            <>
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
                            <TextField
                                id="outlined-select-currency"
                                select
                                label="Category"
                                // value={currency}
                                // onChange={handleChange}
                                helperText="Please select Username"
                            >
                                {/*value={this.state.formData.name}*/}
                                {/*onChange={(e) => {*/}
                                {/*let formData = this.state.formData*/}
                                {/*formData.name = e.target.value*/}
                                {/*this.setState({ formData })*/}

                            </TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <DatePicker style={{
                                backgroundColor: "aliceblue",
                                height: "24px",
                                borderRadius: "8px",
                                fontSize: "14px",
                                padding: "3px 10px"
                            }} selected={new Date()}  />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                id="outlined-select-currency"
                                select
                                label="Category"
                                // value={currency}
                                // onChange={handleChange}
                                helperText="Please select Product Tittle"
                            >
                                {/*value={this.state.formData.name}*/}
                                {/*onChange={(e) => {*/}
                                {/*let formData = this.state.formData*/}
                                {/*formData.name = e.target.value*/}
                                {/*this.setState({ formData })*/}

                            </TextField>
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                                id="outlined-description"
                                label="Description"
                                placeholder="Placeholder"
                                multiline
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

            </>
        )
    }

}

export default CartManage;