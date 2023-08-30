import { Box, Button, Divider, Link, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

export default function MobileMenu() {
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
        color: "#FCF8EC",
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
            borderColor: "#FCF8EC",
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
          color: "#FCF8EC",
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
            backgroundColor: "#FCF8EC",
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
