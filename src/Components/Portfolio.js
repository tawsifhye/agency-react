import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import portfolio_image1 from '../images/portfolio-img1.png'
import portfolio_image2 from '../images/portfolio-img2.png'
import portfolio_image3 from '../images/portfolio-img3.png'
const Styles = {
    title: {
        fontWeight: 800,
        fontSize: '38.494px',
        lineHeight: '53px',
        color: '#FFFFFF',
    },
}

const Portfolio = () => {
    return (
        <Container maxWidth='lg' sx={{ marginTop: '131px' }}>
            <Typography sx={Styles.title}>
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
                </Grid>

            </Grid>
        </Container >
    );
};

export default Portfolio;