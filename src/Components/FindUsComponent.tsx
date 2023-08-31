import React from "react";
import { Box, Typography } from "@mui/material";

const MapComponent: React.FC = () => {
    return (
        <Box sx={{ mt: 4, textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h1" sx={{ fontSize: '90px', fontFamily: 'Raleway, sans-serif' }}>Find us here</Typography>
            <Box sx={{ my: 2, height: '2px', width: '100%', maxWidth: "1070px", backgroundColor: 'black' }}></Box>
            <Box 
                sx={{
                    border: '3px solid black',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    boxShadow: '5px 5px 15px rgba(0,0,0,0.3)',
                    maxWidth: '1070px',
                    width: '100%',
                    height: 'auto'
                }}
            >
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2131.39512405772!2d11.991950277299182!3d57.70974577387078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff30de9cbee3d%3A0xbb3f902b63916df6!2sMedieinstitutet!5e0!3m2!1ssv!2sse!4v1693398830514!5m2!1ssv!2sse"
                    width="100%"
                    height="480"
                    style={{ border: 'none' }}
                    title="Our Location"
                ></iframe>
            </Box>
        </Box>
    );
};

export default MapComponent;
