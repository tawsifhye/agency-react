import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import portfolio_image1 from '../images/portfolio-img1.png'
import portfolio_image2 from '../images/portfolio-img2.png'
import portfolio_image3 from '../images/portfolio-img3.png'
const styles = {
    title: {
        fontWeight: 800,
        fontSize: '38.494px',
        lineHeight: '53px',
        color: '#FFFFFF',
    },

    circleIcon: {
        position: 'absolute',
        width: '36.55px',
        height: '36.55px',
        right: '31px',
        top: '31px',
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
        },
    },
    zigzagIcon: {
        position: 'absolute',
        width: ' 18.58px',
        height: '18.58px',
        left: '60px',
        bottom: '-40px',
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
    slider: {
        background: '#5454D4',
        height: 0,
        width: '13px',
        padding: '4px',
        position: 'absolute',
        left: '50%',
        borderRadius: '10px',
        '&::before': {
            content: '""',
            height: '5px',
            width: '5px',
            background: '#121213',
            position: 'absolute',
            right: '-20px',
            top: '2px',
            borderRadius: '5px',
        },
        '&::after': {
            content: '""',
            height: '5px',
            width: '5px',
            background: '#121213',
            position: 'absolute',
            right: '-11px',
            top: '2px',
            borderRadius: '5px'
        }
    }
}
const Portfolio = () => {
    return (
        <Container maxWidth='lg' sx={{ marginTop: '131px', position: 'relative' }}>
            <Box sx={styles.circleIcon} />
            <Box sx={styles.zigzagIcon} />
            <Typography sx={styles.title}>
                Our Awesome Portofolio
            </Typography>
            <Grid container spacing={2} sx={{
                marginTop: '45px',
                mx: 'auto',
                justifyContent: 'center',
            }}>
                <Grid item lg={4} md={4} sm={6} xs={12}
                >
                    <img style={{ width: '75%' }} src={portfolio_image1} alt="" />
                </Grid>
                <Grid item lg={4} md={4} sm={6} xs={12}
                    sx={{
                        marginTop: {
                            lg: '40px',
                            md: '40px',
                            sm: 0,
                            xs: '20px'
                        }
                    }}
                >
                    <img style={{ width: '75%' }} src={portfolio_image2} alt="" />
                </Grid>
                <Grid item lg={4} md={4} sm={6} xs={12}
                    sx={{
                        marginTop: {
                            lg: '80px',
                            md: '80px',
                            xs: '20px'
                        }
                    }}
                >
                    <img style={{ width: '75%' }} src={portfolio_image3} alt="" />
                    <Box sx={styles.slider} />
                </Grid>

            </Grid>
        </Container >
    );
};

export default Portfolio;