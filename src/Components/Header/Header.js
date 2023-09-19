import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Image from "../Assest/carwash.png"
import '../Header/Header.css';
import bcimg from '../Assest/bc_img.jpg'
import logo from '../Assest/Car Wash.png'
// import FacebookIcon from "@mui/icons-material/Facebook";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
// import { Facebook, Twitter, Instagram } from '@mui/icons-material';


// Copyright function

function Copyright(props) {
    return (
        <Typography color="#001478" variant="body2" textAlign="left"  {...props}

        >
            {'Copyright © 2020 '}
            <Link color="#FF4900" href="#">
                Car Wash
            </Link>{' '}
            {'All rights reserved.'}{'Term & Condition'}

        </Typography>
    );
}


export default function SignInSide() {


    return (
        <Grid container >
            <Box display="grid" gridTemplateColumns="repeat(15, 1fr)" gap={0} position={"fixed"} >
                <Box component={"img"} src={bcimg} sx={{
                    position: 'absolute',
                    height: '710px',
                    width: '1800px',
                    zIndex: '-1',
                    opacity: '0.25'
                }} />
                <div >
                    <Box className='content'
                        sx={{
                            width: "780px",
                            height: "100vh",
                            overflow: "hidden",
                        }}
                    >
                        <div>
                            <Box className="logo" component={'img'}
                                src={logo}
                            />

                            <div className='SignIn'>
                                <div>
                                    <Box>
                                    <Typography sx={{ textShadow: '0px 0px 4px rgba(0, 0, 0, 0.30), 1px 1px 4px rgba(0, 0, 0, 0.30)' }} ml="5rem" mt="5rem" variant="h3" color={"#001478"} fontWeight={"bold"} fontFamily={"Playfair Display"} textAlign={"left"} justifyContent={"left"}>Sign Up</Typography>
                                    <Typography ml="5rem" color="#001478" textAlign={"left"} marginBottom={"15px"}>Enter your credential below.</Typography>
                                    <Typography mt="3rem" ml="5rem" color="#001478" textAlign={"left"} >Enter your mobile number</Typography>
                                    <Box className='field'>
                                        <TextField
                                            
                                            height="200px"
                                            margin="10px"
                                            textAlign={"left"}
                                            inputProps={{
                                                style: {
                                                    height: "10px",
                                                },
                                            }}
                                            sx={{ border: 2, borderColor: "#001478", borderRadius: "6px", mt: 2, mb: 2 }}
                                        />

                                        <div>
                                            <Button
                                                type="submit"
                                                label="Default"
                                                variant="contained"
                                                fullwidth

                                                Height="900px"
                                                Top="3414.5px"
                                                sx={{ minWidth: 230, ml: 'auto', mt: 1, mb: 2, backgroundColor: "#FF4900" }}
                                            >
                                                SEND
                                            </Button>
                                        </div>
                                        <Typography sx={{ ml: 'auto', mb: 2 }} color="#001478">{"Already have an account? "}
                                            <Link color="#FF4900" href="#" variant="body2">
                                                Login
                                            </Link>
                                        </Typography>
                                    </Box>

                                    <Box sx={{ ml: 9, mt: 15 }} ><Copyright /></Box>
                                    </Box>
                                </div>
                            </div>
                        </div>
                    </Box>
                </div>

                <Box >
                    <div className="social-media-icons-container">
                        <img src={Image} alt="" style={{ "width": "819px", "height": "100vh", "Position": "relative", "top": "-0.5px", "left": "5px" }} />
                        
                                <Box className="icbutt">
                                <FacebookOutlinedIcon color='primary' />

                                </Box>
                                <div>
                                <Box className="icbutt">
                                <FacebookOutlinedIcon color='primary' />

                                </Box>
                                </div>
                            </div>

                   

                </Box>
            </Box>

        </Grid >
    );
}