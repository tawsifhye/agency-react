import { Typography } from '@mui/material';
import { Box, padding } from '@mui/system';
import React from 'react';

const Footer = () => {
    const Styles = {
        fontSize: '15px',
        lineHeight: '16px',
        textAlign: 'center',
        color: 'rgba(255, 255, 255, 0.7)',
        display: 'inline-block',
        padding: '10px'
    }
    return (
        <Box sx={{
            display: {
                lg: 'flex',
                justifyContent: 'space-evenly'
            },
            textAlign: 'center',
            py: '20px'
        }}>
            <Box>
                <Typography sx={Styles}>
                    Support
                </Typography>
                <Typography sx={Styles}>
                    Privacy Policy
                </Typography>
                <Typography sx={Styles}>
                    Terms and Condition
                </Typography>
            </Box>
            <Box>
                <Typography sx={Styles}>
                    &copy; 2022 Enver. All RightReserved
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;