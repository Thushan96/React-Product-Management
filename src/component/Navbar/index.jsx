import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {CatchingPokemon} from "@mui/icons-material";
import {Stack} from "@mui/material";
import {Link} from "react-router-dom";

const Navbar=()=>{
    return(
        <AppBar position={"static"}>
            <Toolbar>
                <IconButton size={"large"} edge={"start"} color={"inherit"} aria-label={'logo'}>
                    <CatchingPokemon/>
                </IconButton>
                <Typography variant={"h6"} component={"div"} sx={{flexGrow:1}}>
                    Dashboard
                </Typography>
                <Stack direction={"row"} fontSize={"large"} spacing={2}>
                    <Button color={"inherit"} as={Link} to={"/products"} style={{ textDecoration: 'none' }}>Product</Button>
                    <Button color={"inherit"} as={Link} to={"/cart"} style={{ textDecoration: 'none' }} >Cart</Button>

                </Stack>
                <Typography variant={"h6"} display={"flex"} flexWrap={"inherit"} justifyContent={"flex-end"}  component={"div"} sx={{flexGrow:1}}>
                    User
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
