import { styleSheet } from "./style";
import { withStyles} from "@mui/styles";
import { Typography} from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import {ValidatorForm} from "react-material-ui-form-validator";
import LogInService from "../../services/LogInService";
import GDSESnackBar from "../../component/SnackBar";

const { Component } = require("react");
const { render } = require("react-dom");


class LogIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            loginData: {
                username: '',
                password: ''
            },

            alert: false,
            message: '',
            severity: '',

            data: [],
        }
    }



    submitLogin = async () => {
        let formData = this.state.loginData;
        console.log("inside console log");

        let res = await LogInService.postLogin(formData);
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
            console.log(res);
            this.setState({
                alert: true,
                message: res.response.data,
                severity: 'error'
            });
        }

    };


    render(){
        const {classes} = this.props;
        return(
            <>
                <GDSESnackBar
                    open={this.state.alert}
                    onClose={() => {
                        this.setState({ alert: false })
                    }}
                    message={this.state.message}
                    autoHideDuration={3000}
                    severity={this.state.severity}
                    variant="filled"
                >
                </GDSESnackBar>
            <ValidatorForm ref="form"  onSubmit={this.submitLogin}>
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
                            value={this.state.loginData.username}
                                   onChange={(e) => {
                                       console.log(e.target.value)
                                       let formData = this.state.loginData
                                       formData.username = e.target.value
                                       this.setState({ formData })
                                   }}
                            />

                        <TextField style={{width:'50vh',position:'relative',bottom:'30px'}}
                            id="outlined-password-input"
                            label="password"
                            type="password"
                                   value={this.state.loginData.password}
                                   onChange={(e) => {
                                       console.log(e.target.value)
                                       let formData = this.state.loginData
                                       formData.password = e.target.value
                                       this.setState({ formData })
                                   }}
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
            </ValidatorForm>

            </>
        )
    }
}
export default withStyles(styleSheet)(LogIn)