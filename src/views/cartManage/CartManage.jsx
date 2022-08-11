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
            top100Films: [
                {label: 'The Shawshank Redemption', year: 1994},
                {label: 'The Godfather', year: 1972},
                {label: 'The Godfather: Part II', year: 1974},
                {label: 'The Dark Knight', year: 2008},
                {label: '12 Angry Men', year: 1957},
                {label: "Schindler's List", year: 1993},
                {label: 'Pulp Fiction', year: 1994}
            ],

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
                            <TextField
                                id="outlined-description"
                                type="date"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                id="outlined-select-currency"
                                select
                                label="Tittle"

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