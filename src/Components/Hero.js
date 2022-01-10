import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import banner_img from '../images/hero-image.png';
const Hero = () => {

    const Styles = {
        image: {
            clipPath: 'polygon(45% 0%, 84% 10%, 54% 0%, 120% 27%, 89% 79%, 76% 101%, 24% 84%, 0% 84%, 0% 0%, 0% 0%)',
            zIndex: 100
        },
        imageBox: {
            width: '100%',
            padding: '20px',
            position: 'relative',
            '&::before': {
                content: '""',
                width: '249.11px',
                height: '249.11px',
                left: '40px',
                top: '101px',
                position: 'absolute',
                border: '1.32738px solid #FFFFFF',
                borderRadius: '14.72px',
                transform: 'rotate(23.64deg)',
                zIndex: - 10
            },
            '&::after': {
                content: '""',
                width: '249.11px',
                height: '249.11px',
                left: '76px',
                top: '156px',
                position: 'absolute',
                border: '1.32738px solid #FFFFFF',
                borderRadius: '14.72px',
                transform: 'rotate(23.64deg)',
                backgroundColor: '#5454D4',
                zIndex: -1,
            }

        }

    }
    console.log();
    return (

        <Container maxWidth='lg' sx={{ marginTop: '103px' }}>
            <Grid container spacing={2} sx={{
                '@media(max-width: 899px) and (min-width: 768px)': { display: 'grid', gridTemplateColumns: '1fr 1fr' }, '@media(max-width: 767px)': { display: 'grid', justifyContent: 'center', alignItems: 'center' }
            }}
            >
                <Grid item lg={7} md={6} sm={12} xs={12} >
                    <Typography sx={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '53.0952px',
                        lineHeight: '56px',
                        width: '386.27px',
                        height: '168px'
                    }}
                    >
                        Build Your Awesome Platform
                    </Typography>
                    <Typography sx={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontSize: '13.9375px',
                        width: '355.74px',
                        height: '78px',
                        lineHeight: '26px'
                    }}
                    >
                        Enver studio is a digital studio that offers several services such as UI/UX Design to developers, we will provide the best service for those of you who use our services.
                    </Typography>
                    <Button variant="contained" sx={{
                        width: '135.39px',
                        height: '38.49px',
                        marginTop: '32.84px',
                        backgroundColor: '#5454D4',
                        borderRadius: '2.65476px'
                    }}
                    >
                        Contained <ArrowRightAltIcon sx={{ transform: 'rotate(-50deg)' }} />
                    </Button>
                </Grid>
                <Grid item lg={5} md={6} sm={12} xs={12} >
                    <Box sx={Styles.imageBox}
                    >
                        <img
                            style={Styles.image}
                            src={banner_img} alt="" />
                    </Box>
                </Grid>
            </Grid>

        </Container >
    );
};

export default Hero;