import { Avatar, Grid,Paper, Typography ,TextField, Button,Link} from "@mui/material";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import {ValidatorForm} from "react-material-ui-form-validator";
import UserService from "../../services/UserService";


const { Component } = require("react");

class SignUp extends Component{
    constructor(props){
        super(props);
        this.state = {
        userData:{
            email: '',
            username: '',
            password: '',
            name: {
            firstname: '',
                lastname: ''
        },
            address: {
                city: '',
                street: '',
                number: '',
                zipcode: '',
                geolocation: {
                    lat: '',
                    long: ''
            }
        },
            phone: ''
        }
            }


    }

    registerCustomer=async ()=>{
        let userData=this.state.userData;

        let res=await UserService.postUser(userData);
        if (res.status === 200) {
            this.setState({
                link: '/dashboard'
            });

            this.setState({
                alert: true,
                message: 'Login Successfully',
                severity: 'success',
            });
            // this.clearFields();
            //this.loadData();
        } else {
            this.setState({
                alert: true,
                message: res.response.data.message,
                severity: 'error'
            });
        }
    }


    render(){
    
    const paperStyle={padding:'30px 20px',width:600,margin:'20px auto'}    
    //  Top & Down,Left @ Right,width,Top & Down,Left @ Right

    const headerStyle={margin:'0'}
    const avatarStyle={backgroundColor:'#673ab7'}


        return(
          <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}>
                    <AddCircleOutlineOutlinedIcon/>
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant="caption">
                      Please fill this form to create an account  
                    </Typography>
                </Grid>

                <ValidatorForm ref="form"  onSubmit={this.registerCustomer}>
                <Grid container alignItems="center" justify="center" direction="row" spacing={2}
                          sx={{padding:6, mt: -4}}>

                        <Grid item sx={{paddingLeft: 2}}>
                            <TextField label='FirstName' placeholder='Enter FirstName'
                                       name="firstName"
                                       onChange={(e) => {
                                           console.log(e.target.value)
                                           let formData = this.state.userData
                                           formData.name.firstname = e.target.value
                                           this.setState({ formData })
                                       }}
                                       validators={['required']}
                            />
                        </Grid>
                        <Grid item sx={{paddingLeft: 2}}>
                            <TextField label='LastName' placeholder='Enter LastName'
                                       name="lastName"
                                       onChange={(e) => {
                                           console.log(e.target.value)
                                           let formData = this.state.userData
                                           formData.name.lastname = e.target.value
                                           this.setState({ formData })
                                       }}
                                       validators={['required']}
                            />
                        </Grid>
                        <Grid item sx={{paddingLeft: 2}}>
                            <TextField label='Email' placeholder='Enter Email'
                                       name="email"
                                       onChange={(e) => {
                                           console.log(e.target.value)
                                           let formData = this.state.userData
                                           formData.email = e.target.value
                                           this.setState({ formData })
                                       }}
                                       validators={['required']}
                            />
                        </Grid>
                        <Grid item sx={{paddingLeft: 2}}>
                            <TextField label='UserName' placeholder='Enter UserName'
                                       name="username"
                                       onChange={(e) => {
                                           console.log(e.target.value)
                                           let formData = this.state.userData
                                           formData.username = e.target.value
                                           this.setState({ formData })
                                       }}
                                       validators={['required']}
                            />
                        </Grid>
                        <Grid item sx={{paddingLeft: 2}}>
                            <TextField label='Password' placeholder='Enter Password'
                                       name="password"
                                       onChange={(e) => {
                                           console.log(e.target.value)
                                           let formData = this.state.userData
                                           formData.password = e.target.value
                                           this.setState({ formData })
                                       }}
                                       validators={['required']}
                            />
                        </Grid>
                        <Grid item sx={{paddingLeft: 2}}>
                            <TextField label='City' placeholder='Enter City'
                                       name="city"
                                       onChange={(e) => {
                                           console.log(e.target.value)
                                           let formData = this.state.userData
                                           formData.address.city = e.target.value
                                           this.setState({ formData })
                                       }}
                                       validators={['required']}
                            />
                        </Grid>
                        <Grid item sx={{paddingLeft: 2}}>
                            <TextField label='Street' placeholder='Enter Street'
                                       name="street"
                                       onChange={(e) => {
                                           console.log(e.target.value)
                                           let formData = this.state.userData
                                           formData.address.street = e.target.value
                                           this.setState({ formData })
                                       }}
                                       validators={['required']}
                            />
                        </Grid>
                        <Grid item sx={{paddingLeft: 2}}>
                            <TextField label='Street No' placeholder='Enter Street No'
                                       name="streetNo"
                                       onChange={(e) => {
                                           console.log(e.target.value)
                                           let formData = this.state.userData
                                           formData.address.number = e.target.value
                                           this.setState({ formData })
                                       }}
                                       validators={['required']}
                            />
                        </Grid>
                        <Grid item sx={{paddingLeft: 2}}>
                            <TextField label='Zip Code' placeholder='Enter Zip Code'
                                       name="zipCode"
                                       onChange={(e) => {
                                           console.log(e.target.value)
                                           let formData = this.state.userData
                                           formData.address.zipcode = e.target.value
                                           this.setState({ formData })
                                       }}
                                       validators={['required']}
                            />
                        </Grid>
                        <Grid item sx={{paddingLeft: 2}}>
                            <TextField label='Lat Value' placeholder='Enter Lat Value'
                                       name="latValue"
                                       onChange={(e) => {
                                           console.log(e.target.value)
                                           let formData = this.state.userData
                                           formData.address.geolocation.lat = e.target.value
                                           this.setState({ formData })
                                       }}
                                       validators={['required']}
                            />
                        </Grid>
                        <Grid item sx={{paddingLeft: 2}}>
                            <TextField label='Long Value' placeholder='Enter Long Value'
                                       name="longValue"
                                       onChange={(e) => {
                                           console.log(e.target.value)
                                           let formData = this.state.userData
                                           formData.address.geolocation.long = e.target.value
                                           this.setState({ formData })
                                       }}
                                       validators={['required']}
                            />
                        </Grid>
                        <Grid item sx={{paddingLeft: 2}}>
                            <TextField label='Mobile No' placeholder='Enter Mobile No'
                                       name="mobileNo"
                                       onChange={(e) => {
                                           console.log(e.target.value)
                                           let formData = this.state.userData
                                           formData.phone = e.target.value
                                           this.setState({ formData })
                                       }}
                                       validators={['required']}
                            />
                        </Grid>


                </Grid>

                 <div style={{position:'relative',left:'200px'}}>
                 <Button type="submit" variant="contained" color="secondary">Create an Account</Button>
                 </div>


                 <div style={{position:'relative',left:'190px'}}>
                 <Typography>Already have an account
                 <Link href="#" 
                         underline="always">
                          Sign In
                </Link>
                 </Typography>
                 
                </div>

                </ValidatorForm>
        
             
            </Paper>
          </Grid>
        )
    }
}

export default SignUp