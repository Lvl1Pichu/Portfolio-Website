import { Box } from "@mui/material";

export default function HeaderSection() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "700px",
        backgroundImage: "url('../src/assets/bg.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",

        fontWeight: "700",
        textAlign: "center",
      }}
    >
      Meny{" "}
    </Box>
  );
}
