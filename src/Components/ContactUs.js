import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const ContactUs = () => {
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
                    py: '100px'
                }}>
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