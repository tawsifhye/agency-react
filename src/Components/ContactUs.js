import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const ContactUs = () => {
    const styles = {
        circleIcon: {
            position: 'absolute',
            width: '36.55px',
            height: '36.55px',
            left: '337.53px',
            bottom: 0,
            border: '1.99107px solid #FFFFFF',
            borderRadius: '50%',
            '&::after': {
                content: '""',
                position: 'absolute',
                width: '36.55px',
                height: '36.55px',
                left: ' 11px',
                top: '8.39px',
                border: '0.66369px solid #FFFFFF',
                borderRadius: '50%',
            }
        },
        plusIcon: {
            background: '#E7E7E7',
            height: '26px',
            position: 'absolute',
            top: "16.67%",
            right: "16.67%",
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
    }
    return (
        <>
            <Box spacing={2}
                sx={{
                    backgroundColor: 'rgba(30, 30, 32, 0.5)',
                    marginTop: '111px',
                    display: 'flex',
                    flexDirection: {
                        md: 'row',
                        sm: 'column',
                        xs: 'column'
                    },
                    px: {
                        md: 0,
                        sm: '20px',
                        xs: '20px'
                    },
                    justifyContent: 'space-around',
                    py: '100px',
                    position: 'relative'
                }}>
                <Box sx={styles.circleIcon} />
                <Box sx={styles.plusIcon} />
                <Box >
                    <Typography
                        sx={{
                            fontWeight: 'bold',
                            fontSize: '39.8214px',
                            lineHeight: '44px',
                            color: '#FFFFFF'
                        }}
                    >
                        Contact us for the service <br /> you want to use
                    </Typography>
                </Box>

                <Box>
                    <Button variant="contained" sx={{
                        width: '135.39px',
                        height: '38.49px',
                        marginTop: '32.84px',
                        backgroundColor: '#5454D4',
                        borderRadius: '2.65476px'
                    }}
                    >
                        Contact Us
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default ContactUs;