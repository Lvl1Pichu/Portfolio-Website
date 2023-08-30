import { Box } from "@mui/material";
import MenuBar from "./Menu";

export default function HeaderSection() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "700px",
        backgroundImage: "url('../src/assets/tree.jpeg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        fontWeight: "700",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <MenuBar />
    </Box>
  );
}
