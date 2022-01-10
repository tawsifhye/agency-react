import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
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
        }
    }

    return (
        <Container maxWidth='lg' sx={{ marginTop: '99px', textAlign: 'center' }}>
            <Typography
                sx={{
                    width: '461.26px',
                    height: '93px',
                    fontWeight: 'bold',
                    fontSize: '39.8214px',
                    lineHeight: '46px',
                    textAlign: 'center',
                    color: '#FFFFFF',
                    margin: '0 auto',
                }}
            >
                The Service We Provide For You
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