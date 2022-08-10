import { Avatar, Grid,Paper, Typography ,TextField, Button,Link} from "@mui/material";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const { Component } = require("react");

class SignUp extends Component{
    constructor(props){
        super(props);
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
               
                <form>
                <Grid container alignItems="center" justify="center" direction="row" spacing={2}
                          sx={{padding:6, mt: -4}}>

                        <Grid item sx={{paddingLeft: 2}}>
                            <TextField label='FirstName' placeholder='Enter FirstName'
                                       name="firstName"
                                       validators={['required']}
                            />
                        </Grid>
                        <Grid item sx={{paddingLeft: 2}}>
                            <TextField label='LastName' placeholder='Enter LastName'
                                       name="lastName"
                                       validators={['required']}
                            />
                        </Grid>
                        <Grid item sx={{paddingLeft: 2}}>
                            <TextField label='Email' placeholder='Enter Email'
                                       name="email"
                                       validators={['required']}
                            />
                        </Grid>
                        <Grid item sx={{paddingLeft: 2}}>
                            <TextField label='UserName' placeholder='Enter UserName'
                                       name="username"
                                       validators={['required']}
                            />
                        </Grid>
                        <Grid item sx={{paddingLeft: 2}}>
                            <TextField label='Password' placeholder='Enter Password'
                                       name="password"
                                       validators={['required']}
                            />
                        </Grid>
                        <Grid item sx={{paddingLeft: 2}}>
                            <TextField label='City' placeholder='Enter City'
                                       name="city"
                                       validators={['required']}
                            />
                        </Grid>
                        <Grid item sx={{paddingLeft: 2}}>
                            <TextField label='Street' placeholder='Enter Street'
                                       name="street"
                                       validators={['required']}
                            />
                        </Grid>
                        <Grid item sx={{paddingLeft: 2}}>
                            <TextField label='Street No' placeholder='Enter Street No'
                                       name="streetNo"
                                       validators={['required']}
                            />
                        </Grid>
                        <Grid item sx={{paddingLeft: 2}}>
                            <TextField label='Zip Code' placeholder='Enter Zip Code'
                                       name="zipCode"
                                       validators={['required']}
                            />
                        </Grid>
                        <Grid item sx={{paddingLeft: 2}}>
                            <TextField label='Lat Value' placeholder='Enter Lat Value'
                                       name="latValue"
                                       validators={['required']}
                            />
                        </Grid>
                        <Grid item sx={{paddingLeft: 2}}>
                            <TextField label='Long Value' placeholder='Enter Long Value'
                                       name="longValue"
                                       validators={['required']}
                            />
                        </Grid>
                        <Grid item sx={{paddingLeft: 2}}>
                            <TextField label='Mobile No' placeholder='Enter Mobile No'
                                       name="mobileNo"
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

                </form>    
        
             
            </Paper>
          </Grid>
        )
    }
}

export default SignUp