import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import LayersIcon from '@mui/icons-material/Layers';
import ViewAgendaIcon from '@mui/icons-material/ViewAgenda';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';

const Services = () => {

    const serviceStyle = {
        title: {
            width: '200px',
            height: '25px',
            fontWeight: 600,
            fontSize: '18.5833px',
            lineHeight: '25px',
            margin: '0 auto',
            letterSpacing: '-0.497977px',
            color: '#FFFFFF',
        },

        details: {
            width: '198.44px',
            height: '38px',
            fontWeight: 'normal',
            fontSize: '13.2738px',
            lineHeight: '19px',
            margin: '0 auto',
            letterSpacing: '-0.331985px',
            color: 'rgba(255, 255, 255, 0.7)'
        },
        icon: {
            width: '45.79px',
            height: '45.79px',
            borderRadius: '50%',
            padding: '13.72px 14.38px',
        },
        triangleIcon1: {
            position: 'absolute',
            width: ' 47.45px',
            height: ' 48.45px',
            left: {
                md: '178.44px',
                sm: '41px',
                xs: '38px',
            },
            top: {
                md: '-43px',
                sm: '-37',
                xs: '23px',
            },
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
                md: '178.44px',
                sm: '47px',
                xs: '38px',
            },
            top: {
                md: '-30px',
                sm: '37px',
                xs: '10px',
            },
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
        },
        crossIcon1: {
            background: '#E7E7E7',
            content: '""',
            height: '26px',
            position: 'absolute',
            right: '95px',
            top: '80px',
            width: '5px',
            transform: 'rotate(63deg)',
            '&::after': {
                background: '#E7E7E7',
                content: '""',
                height: '5px',
                position: 'absolute',
                left: '-10px',
                top: '11px',
                width: '26px',
            }
        },
        crossIcon2: {
            background: '#E7E7E7',
            content: '""',
            height: '26px',
            position: 'absolute',
            left: {
                md: '64.44px',
                sm: '41px',
                xs: '38px',
            },
            bottom: '-25px',
            width: '5px',
            transform: 'rotate(63deg)',
            '&::after': {
                background: '#E7E7E7',
                content: '""',
                height: '5px',
                position: 'absolute',
                left: '-10px',
                top: '11px',
                width: '26px',
            }
        },
    }

    return (
        <Container maxWidth='lg' sx={{ marginTop: '99px', textAlign: 'center', position: 'relative' }}>
            <Box sx={serviceStyle.triangleIcon1} />
            <Box sx={serviceStyle.triangleIcon2} />
            <Box sx={serviceStyle.crossIcon1} />
            <Box sx={serviceStyle.crossIcon2} />
            <Typography
                sx={{

                    fontWeight: 'bold',
                    fontSize: '39.8214px',
                    lineHeight: '46px',
                    textAlign: 'center',
                    color: '#FFFFFF',
                    margin: '0 auto',
                }}
            >
                The Service We Provide <br /> For You
            </Typography>
            <Grid container sx={{
                marginTop: '64px',
                textAlign: 'center',
                rowGap: 10,
            }}>
                <Grid item lg={4} md={6} sm={12} xs={12} >
                    <IntegrationInstructionsIcon sx={{ ...serviceStyle.icon, color: '#5454D4', backgroundColor: 'rgba(84, 84, 212, 0.1)' }} />
                    <Typography sx={serviceStyle.title}>
                        Development
                    </Typography>
                    <Typography sx={serviceStyle.details}>
                        Create a platform with the best and coolest quality from us.
                    </Typography>
                </Grid>
                <Grid item lg={4} md={6} sm={12} xs={12} >
                    <LayersIcon sx={{ ...serviceStyle.icon, color: '#F04037', backgroundColor: 'rgba(240, 64, 55, 0.1)' }} />
                    <Typography sx={serviceStyle.title}>
                        UI/UX Designer
                    </Typography>
                    <Typography sx={serviceStyle.details}>
                        We provide UI/UX Design services, and of course with the best quality
                    </Typography>
                </Grid>
                <Grid item lg={4} md={6} sm={12} xs={12} >
                    <IntegrationInstructionsIcon sx={{ ...serviceStyle.icon, color: '#FEDC5A', backgroundColor: 'rgba(254, 220, 90, 0.1)' }} />
                    <Typography sx={serviceStyle.title}>
                        Grapik Designer
                    </Typography>
                    <Typography sx={serviceStyle.details}>
                        We provide Graphic Design services, with the best designers
                    </Typography>
                </Grid>
                <Grid item lg={4} md={6} sm={12} xs={12} sx={{ padding: '20px' }}>
                    <ViewAgendaIcon sx={{ ...serviceStyle.icon, color: '#FEDC5A', backgroundColor: 'rgba(254, 220, 90, 0.1)' }} />
                    <Typography sx={serviceStyle.title}>
                        Motion Grapik
                    </Typography>
                    <Typography sx={serviceStyle.details}>
                        Create a platform with the best and coolest quality from us.
                    </Typography>
                </Grid>
                <Grid item lg={4} md={6} sm={12} xs={12} sx={{ padding: '20px' }}>
                    <PhotoCameraIcon sx={{ ...serviceStyle.icon, color: '#5454D4', backgroundColor: 'rgba(84, 84, 212, 0.1)' }} />
                    <Typography sx={serviceStyle.title}>
                        Photography
                    </Typography>
                    <Typography sx={serviceStyle.details}>
                        We provide Photography services, and of course with the best quality
                    </Typography>
                </Grid>
                <Grid item lg={4} md={6} sm={12} xs={12} >
                    <OndemandVideoIcon sx={{ ...serviceStyle.icon, color: '#F04037', backgroundColor: 'rgba(240, 64, 55, 0.1)' }} />
                    <Typography sx={serviceStyle.title}>
                        Videography
                    </Typography>
                    <Typography sx={serviceStyle.details}>
                        Create a platform with the best and coolest quality from us.
                    </Typography>
                </Grid>
            </Grid>
        </Container >
    );
};

export default Services;