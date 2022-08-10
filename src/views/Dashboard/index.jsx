import {Component} from "react";
import Navbar from "../../component/Navbar";
import './style.css'
import {Avatar, CardContent, CardHeader, Typography} from "@mui/material";
import {red} from "@mui/material/colors";
import Grid from '@mui/material/Grid';

class Dashboard extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <>
            <Navbar/>


                <Grid container spacing={4} marginTop={2}>
                    <Grid item xs={4}>
                        <card sx={{ maxWidth: 345 }}  >
                            <Typography bgcolor={"aqua"}>
                                <Typography textAlign={"center"}>
                                <CardHeader

                                    title="Products"
                                />
                                </Typography>
                                <CardContent>
                                    <Typography variant="body2" fontSize={"xxx-large"} textAlign={"center"} color="text.primary">
                                        <p id={"productsCount"}>2</p>
                                    </Typography>
                                </CardContent>
                            </Typography>
                        </card>
                    </Grid>
                    <Grid item xs={4}>
                        <card sx={{ maxWidth: 345 }}  >
                            <Typography bgcolor={"aqua"}>
                                <Typography textAlign={"center"}>
                                    <CardHeader

                                        title="Users"
                                    />
                                </Typography>
                                <CardContent>
                                    <Typography variant="body2" fontSize={"xxx-large"} textAlign={"center"} color="text.primary">
                                        <p id={"usersCount"}>10</p>
                                    </Typography>
                                </CardContent>
                            </Typography>
                        </card>
                    </Grid>
                    <Grid item xs={4}>
                        <card sx={{ maxWidth: 345 }}  >
                            <Typography bgcolor={"aqua"}>
                                <Typography textAlign={"center"}>
                                    <CardHeader

                                        title="Cart"
                                    />
                                </Typography>

                                <CardContent>
                                    <Typography variant="body2" fontSize={"xxx-large"} textAlign={"center"} color="text.primary">
                                        <p id={"cartCount"}>6</p>
                                    </Typography>
                                </CardContent>
                            </Typography>
                        </card>
                    </Grid>

                </Grid>

            </>
        )

    }
}
export default Dashboard;