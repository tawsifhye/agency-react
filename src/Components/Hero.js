import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import banner_img from '../images/hero-image.png';
const Hero = () => {
    return (
        <div>
            <Container maxWidth='lg' sx={{ marginTop: '103px' }}>
                <Grid container spacing={2} sx={{ '@media(max-width: 899px) and (min-width: 768px)': { display: 'grid', gridTemplateColumns: '1fr 1fr' }, '@media(max-width: 767px)': { display: 'grid', justifyContent: 'center', alignItems: 'center' } }}>
                    <Grid item lg={7} md={6} sm={12} xs={12} >
                        <Typography sx={{
                            color: 'white', fontWeight: 'bold', fontSize: '53.0952px', lineHeight: '56px', width: '386.27px', height: '168px'
                        }}>
                            Build Your Awesome Platform
                        </Typography>
                        <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '13.9375px', width: '355.74px', height: '78px', lineHeight: '26px' }}>
                            Enver studio is a digital studio that offers several services such as UI/UX Design to developers, we will provide the best service for those of you who use our services.
                        </Typography>
                    </Grid>
                    <Grid item lg={5} md={6} sm={12} xs={12} >
                        <Box sx={{ width: '100%' }}>
                            <img src={banner_img} alt="" />
                        </Box>
                    </Grid>
                </Grid>

            </Container>

        </div >
    );
};

export default Hero;