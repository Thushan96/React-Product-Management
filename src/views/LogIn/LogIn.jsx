import { styleSheet } from "./style";
import { withStyles} from "@mui/styles";
import { Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Navbar from "../../component/Navbar";
const { Component } = require("react");
const { render } = require("react-dom");


class LogIn extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const {classes} = this.props;
        return(
        <div className={classes.container}>
               <div className={classes.logincover}>

                        <div className={classes.logintitle}>
                          <Typography style={{position:'relative',top:'30px',fontSize:'20px'}}>SignIn</Typography>
                        </div>
                        <div className={classes.loginform}>
                        <TextField style={{width:'50vh'}}
                            id="outlined-username-input"
                            label="UserName"
                            type="text"
                            />

                        <TextField style={{width:'50vh',position:'relative',bottom:'30px'}}
                            id="outlined-password-input"
                            label="password"
                            type="password"
                            />      

                        </div>
                        <div className={classes.loginbtns}>
                            <div>
                                <Button 
                                    style={{width:'20rem'}}
                                    variant="contained" 
                                    type="submit"
                                    color="secondary">
                                    Sign In
                                </Button>

                            </div>

                            <div style={{position:'relative',left:'90px',padding:'20px'}}>
                               
                                <Link href="#" 
                                underline="hover">
                                {'forgotten password'}
                                </Link>
                            </div>

                            <div style={{position:'relative',left:'60px',padding:'20px'}}>
                            <Link href="#" 
                                underline="always">
                                {'Not a member SignUp Now'}
                                </Link>
                            </div>
                        
                        </div>

               </div> 
        </div>
           
        )
    }
}
export default withStyles(styleSheet)(LogIn)