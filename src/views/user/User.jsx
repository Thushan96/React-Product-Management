import { Component } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Grid, Tooltip} from "@mui/material";
import UserService from "../../services/UserService";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import * as PropTypes from "prop-types";

function EditIcon(props) {
    return null;
}

EditIcon.propTypes = {color: PropTypes.string};

class User extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }

    loadData=async ()=>{
        let res=await UserService.fetchUser();
        if (res.status===200){
            this.setState({
                data: res.data
            });
            console.log(this.state.data);
        }


    }
    updateCustomer = (data) => {
        // console.log(data)
        //
        // this.setState({
        //     btnLabel: 'update',
        //     btnColor: 'secondary',
        //     formData: {
        //         id: data.id,
        //         name: data.name,
        //         address: data.address,
        //         salary: data.salary
        //     }
        // });
    };

    deleteCustomer = async (id) => {
        let params = {
            id: id
        }
        let res = await UserService.deleteUser(params);

        if(res.status === 200) {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'success'
            });
            await this.loadData();
        } else {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'error'
            });
        }
    };


    componentDidMount() {
        this.loadData();
    }

    render(){
        return(
            <Grid container style={{position:'relative', top:'50px' ,padding:'20px 50px 10px'}}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="user table">
                        <TableHead>
                            
                            <TableRow>
                                    <TableCell align="left">First Name</TableCell>
                                    <TableCell align="left">Last Name</TableCell>
                                    <TableCell align="left">Email</TableCell>
                                    <TableCell align="left">User Name</TableCell>
                                    <TableCell align="left">Password</TableCell>
                                    <TableCell align="left">City</TableCell>
                                    <TableCell align="left">Street</TableCell>
                                    <TableCell align="left">Street No</TableCell>
                                    <TableCell align="left">Zip Code</TableCell>
                                    <TableCell align="left">Lat Value</TableCell>
                                    <TableCell align="left">Long Value</TableCell>
                                    <TableCell align="left">Mobile No</TableCell>
                                    <TableCell align="left">Action</TableCell>
                                </TableRow>
                           
                        </TableHead>

                        <TableBody>
                            {

                                this.state.data.map((row) => (
                                    <TableRow>
                                        <TableCell align="left">{row.name.firstname}</TableCell>
                                        <TableCell align="left">{row.name.lastname}</TableCell>
                                        <TableCell align="left">{row.email}</TableCell>
                                        <TableCell align="left">{row.username}</TableCell>
                                        <TableCell align="left">{row.password}</TableCell>
                                        <TableCell align="left">{row.address.city}</TableCell>
                                        <TableCell align="left">{row.address.street}</TableCell>
                                        <TableCell align="left">{row.address.number}</TableCell>
                                        <TableCell align="left">{row.address.zipcode}</TableCell>
                                        <TableCell align="left">{row.geolocation.lat}</TableCell>
                                        <TableCell align="left">{row.geolocation.long}</TableCell>
                                        <TableCell align="left">{row.geolocation.long}</TableCell>
                                        <TableCell align="left">{row.phone}</TableCell>
                                        <TableCell align="left">
                                            <Tooltip title="Edit">
                                                <IconButton
                                                    onClick={() => {
                                                        console.log("edit icon clicked!")
                                                        // this.updateCustomer(row);
                                                    }}
                                                >
                                                    <EditIcon color="primary" />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title="Delete">
                                                <IconButton
                                                    onClick={() => {
                                                        this.deleteCustomer(row.id)
                                                    }}
                                                >
                                                    <DeleteIcon color="error" />
                                                </IconButton>
                                            </Tooltip>
                                        </TableCell>
                                    </TableRow>
                                ))
                            }

                        </TableBody>


                    </Table>
                </TableContainer>

            </Grid>
        )
    }
}

export default User