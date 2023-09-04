import { Box, Button, Divider, Link, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

export default function BlackMobileMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        color: "black", // Updated color here
        fontSize: "18px",
        fontFamily: "Raleway",
        fontWeight: "500",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "2rem",
        alignItems: "center",
        maxWidth: "900px",
        width: "100%",
        boxSizing: "border-box",
        zIndex: 10,
      }}
    >
      <Box>
        <Link href="#" color="inherit" fontSize={"2rem"}>
          BW
        </Link>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{
            borderColor: "black", // Updated borderColor here
            padding: "0",
            margin: "0",
          }}
        />
      </Box>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          color: "black", // Updated color here
          fontSize: "18px",
          fontFamily: "Raleway",
          fontWeight: "500",
        }}
      >
        Menu
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        PaperProps={{
          sx: {
            backgroundColor: "black", // Updated backgroundColor here
            color: "white" // Assuming you want the text to be visible on the black background
          },
        }}
      >
        <MenuItem onClick={handleClose} sx={{ fontFamily: "Raleway" }}>
          The team
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ fontFamily: "Raleway" }}>
          Portfolio
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ fontFamily: "Raleway" }}>
          Contact us
        </MenuItem>
      </Menu>
    </Box>
  );
}
