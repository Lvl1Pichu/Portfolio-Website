import { Box, Divider, Link } from "@mui/material";

export default function MenuBar() {
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
        zIndex: 10,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "300px",
          padding: "0",
          height: "60px",
        }}
      >
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

        <Link href="#team-section" color="inherit" underline="hover"
          onClick={(e) => {
            e.preventDefault(); 

            const contactSection = document.getElementById("team-section"); 

            if (contactSection) {
              contactSection.scrollIntoView({
                behavior: "smooth", 
                block: "start",     
              });
            }
          }}
        >
          The Team
        </Link>
        
        <Link href="#" color="inherit" underline="hover">
          Portfolio
        </Link>
      </Box>

      <Link href="#contact-section" color="inherit" underline="hover"
         onClick={(e) => {
          e.preventDefault(); 

          const contactSection = document.getElementById("contact-section"); 

          if (contactSection) {
            contactSection.scrollIntoView({
              behavior: "smooth", 
              block: "start",     
            });
          }
        }}
      >
        Contact us
      </Link>
    </Box>
  );
}
