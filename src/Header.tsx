import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import MenuBar from "./Menu";
import MobileMenu from "./MobileMenu";

export default function HeaderSection() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "900px",
        backgroundImage: "url('../src/assets/tree.jpeg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontWeight: "700",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      {isSmallScreen ? <MobileMenu /> : <MenuBar />}

      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <Typography
          color={"#FCF8EC"}
          fontSize={"clamp(1.6rem, 0.5714rem + 4.5714vw, 4rem)"}
          fontFamily={"Oswald"}
          textAlign="left"
        >
          Digital innovation company <br />
          that creates progress.
        </Typography>
      </Box>
    </Box>
  );
}
