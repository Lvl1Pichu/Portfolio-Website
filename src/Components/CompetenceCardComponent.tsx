import React from "react";
import { Box, Typography } from "@mui/material";

interface CompetenceCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const CompetenceCard: React.FC<CompetenceCardProps> = ({ imageSrc, title, description }) => {
  return (
    <Box
      sx={{
        maxWidth: '1074px',
        display: 'flex',
        alignItems: 'center',
        gap: '34px',
        marginLeft: "auto",
        marginRight: "auto"
      }}
    >
      {/* Image */}
      <Box
        sx={{
          width: '350px',
          height: '350px',
          overflow: 'hidden',
          transition: 'borderRadius 1s ease',  // Moved transition property here
          "& img": {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '0',
            "&:hover": {
              borderRadius: '25px'
            }
          }
        }}
      >
        <img src={imageSrc} alt={title} />
      </Box>

      {/* Title and Text */}
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <Typography variant="h5" sx={{ fontFamily: 'Raleway, sans-serif', fontWeight: 'bold' }}>
          {title}
        </Typography>
        <Typography sx={{ fontFamily: 'Raleway, sans-serif', fontWeight: '300', wordWrap: "break-word", maxWidth: "690px" }}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default CompetenceCard;
