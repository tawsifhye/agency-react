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
                left: '56px',
                top: '136px',
                position: 'absolute',
                border: '1.32738px solid #FFFFFF',
                borderRadius: '14.72px',
                transform: 'rotate(23.64deg)',
                backgroundColor: '#5454D4',
                zIndex: -1,
            }

        },

        plusIcon: {
            background: '#E7E7E7',
            height: '26px',
            position: 'absolute',
            left: '343px',
            top: '410px',
            width: '5px',
            '&::after': {
                background: '#E7E7E7',
                content: '""',
                height: '5px',
                position: 'absolute',
                left: '-10px',
                top: '10px',
                width: '26px'
            }
        },

        circleIcon: {
            position: 'absolute',
            width: '36.55px',
            height: '36.55px',
            left: '343px',
            top: '3.12px',
            border: '1.99107px solid #FFFFFF',
            borderRadius: '50%',
            '&::before': {
                content: '""',
                position: 'absolute',
                width: '36.55px',
                height: '36.55px',
                left: '11px',
                top: '8.39px',
                border: '0.66369px solid #FFFFFF',
                borderRadius: '50%'
            }

        },

        zigzagIcon: {
            position: 'absolute',
            width: ' 18.58px',
            height: '18.58px',
            left: {
                lg: '-200.56px',
                sm: '16px',
                xs: '30px',
            },
            top: '3.31px',
            borderBottom: '2.65476px solid #E7E7E7',
            borderRight: '2.65476px solid #E7E7E7',
            transform: 'rotate(52deg)',
            '&::before': {
                content: '""',
                position: 'absolute',
                width: '18.58px',
                height: '18.58px',
                left: '-16px',
                top: '21.31px',
                borderBottom: '2.65476px solid #E7E7E7',
                borderRight: '2.65476px solid #E7E7E7',
                transform: 'rotate(347deg)'
            },
            '&::after': {
                content: '""',
                position: 'absolute',
                width: '18.58px',
                height: '18.58px',
                left: '18px',
                top: '-20.69px',
                borderBottom: '2.65476px solid #E7E7E7',
                transform: 'rotate(347deg)'
            }

        },

        triangleIcon1: {
            position: 'absolute',
            width: ' 47.45px',
            height: ' 48.45px',
            left: {
                lg: '-200.56px',
                sm: '16px',
                xs: '16px',
            },
            top: '334px',
            borderBottom: '2.65476px solid #E7E7E7',
            transform: 'rotate(387deg)',
            '&:: before': {
                content: '""',
                position: 'absolute',
                width: '51.45px',
                height: '50.45px',
                left: '-14px',
                top: '32px',
                borderBottom: '2.65476px solid #E7E7E7',
                transform: 'rotate(300deg)',
            },
            '&:: after': {
                content: '""',
                position: 'absolute',
                width: ' 49.45px',
                height: ' 48.45px',
                left: '8px',
                top: '35px',
                borderBottom: '2.65476px solid #E7E7E7',
                transform: 'rotate(424deg)'

            }
        },

        triangleIcon2: {
            position: 'absolute',
            width: '47.45px',
            height: '48.45px',
            left: {
                lg: '-195.56px',
                sm: '19px',
                xs: '19px',
            },
            top: '353px',
            borderBottom: '1.65476px solid #E7E7E7',
            transform: 'rotate(387deg)',
            '&:: before': {
                content: '""',
                position: 'absolute',
                width: '48.45px',
                height: '48.45px',
                left: '-11px',
                top: '33px',
                borderBottom: '1.65476px solid #E7E7E7',
                transform: 'rotate(300deg)',
            },
            '&::after': {
                content: '""',
                position: 'absolute',
                width: '49.45px',
                height: '48.45px',
                left: '8px',
                top: '35px',
                borderBottom: '1.65476px solid #E7E7E7',
                transform: 'rotate(424deg)'

            }
        }
    }
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
                        <Box sx={Styles.plusIcon}></Box>
                        <Box sx={Styles.circleIcon}></Box>
                        <Box sx={Styles.zigzagIcon}></Box>
                        <Box sx={Styles.triangleIcon1}></Box>
                        <Box sx={Styles.triangleIcon2}></Box>
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