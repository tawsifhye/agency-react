import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import meeting_image from '../images/image4.png'

const WhyEnver = () => {
    return (

        <Container maxWidth='lg' sx={{ marginTop: '103px' }}>
            <Grid container spacing={2}
            >
                <Grid item lg={6} md={6} sm={12} xs={12}
                >
                    <Typography
                        sx={{
                            width: '390.25px',
                            height: '93px',
                            fontStyle: 'normal',
                            fontWeight: 'bold',
                            fontSize: '39.82px',
                            lineHeight: '46.46px',
                            color: 'white'
                        }}
                    >
                        Why Enver Is The Best Choice?
                    </Typography>
                </Grid>

                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Typography
                        sx={{
                            width: '390.25px',
                            height: '52px',
                            fontSize: '13.9375px',
                            lineHeight: '26px',
                            letterSpacing: '-0.43573px',
                            color: 'rgba(255, 255, 255, 0.7)',
                        }}
                    >
                        Watch this one minute video so you understand why you should use our services!
                    </Typography>

                </Grid>

            </Grid>
            <img src={meeting_image} style={{ width: '100%', marginTop: '33px' }} />
        </Container>
    );
};

export default WhyEnver;