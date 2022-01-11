import { Container, Grid, Typography } from '@mui/material';
import { Box, fontSize } from '@mui/system';
import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import meeting_image from '../images/image4.png'

const WhyEnver = () => {
    return (

        <Container maxWidth='lg' sx={{ marginTop: '103px', position: 'relative' }}>
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
            <Box sx={{ position: 'relative', marginTop: '33px' }}>
                <img style={{ width: '100%' }} src={meeting_image} alt="" />
                <PlayArrowIcon sx={{
                    position: 'absolute',
                    color: 'white',
                    fontSize: '50px',
                    backgroundColor: '#5454D4',
                    borderRadius: '50%',
                    padding: '5px',
                    top: {
                        lg: '50%',
                        sm: '39%',
                        xs: '36%'
                    },
                    left: {
                        lg: '50%',
                        sm: '49%',
                        xs: '41%'
                    },
                }} />

            </Box>

        </Container>
    );
};

export default WhyEnver;